// Cloudflare Worker: server-side weather proxy.
//
// Serves the static Astro build (./dist) for normal requests and exposes
// GET /api/weather, which fetches forecast data server-side and caches it at
// the edge for ~30 minutes. No API key is required for the upstream source.
//
// This file is intentionally excluded from the Astro tsconfig (see tsconfig.json)
// because it relies on Workers runtime globals (Request, Response, fetch, caches,
// ExecutionContext). wrangler bundles it with esbuild at deploy time.

interface AssetsBinding {
  fetch: (request: Request) => Promise<Response>;
}

interface Env {
  ASSETS: AssetsBinding;
}

const DEFAULT_LAT = -13.5209577;
const DEFAULT_LON = -71.9826676;
const CACHE_TTL_SECONDS = 1800;

type Lang = 'es' | 'en';

// WMO weather interpretation codes → short label (es + en) + glyph.
const WMO: Record<number, { es: string; en: string; glyph: string }> = {
  0: { es: 'Despejado', en: 'Clear', glyph: '☀️' },
  1: { es: 'Mayormente despejado', en: 'Mostly clear', glyph: '🌤️' },
  2: { es: 'Parcialmente nublado', en: 'Partly cloudy', glyph: '⛅' },
  3: { es: 'Nublado', en: 'Cloudy', glyph: '☁️' },
  45: { es: 'Niebla', en: 'Fog', glyph: '🌫️' },
  48: { es: 'Niebla helada', en: 'Rime fog', glyph: '🌫️' },
  51: { es: 'Llovizna leve', en: 'Light drizzle', glyph: '🌦️' },
  53: { es: 'Llovizna', en: 'Drizzle', glyph: '🌦️' },
  55: { es: 'Llovizna intensa', en: 'Dense drizzle', glyph: '🌧️' },
  56: { es: 'Llovizna helada', en: 'Freezing drizzle', glyph: '🌧️' },
  57: { es: 'Llovizna helada intensa', en: 'Freezing dense drizzle', glyph: '🌧️' },
  61: { es: 'Lluvia leve', en: 'Slight rain', glyph: '🌦️' },
  63: { es: 'Lluvia', en: 'Rain', glyph: '🌧️' },
  65: { es: 'Lluvia intensa', en: 'Heavy rain', glyph: '🌧️' },
  66: { es: 'Lluvia helada', en: 'Freezing rain', glyph: '🌧️' },
  67: { es: 'Lluvia helada intensa', en: 'Freezing heavy rain', glyph: '🌧️' },
  71: { es: 'Nieve leve', en: 'Slight snow', glyph: '🌨️' },
  73: { es: 'Nieve', en: 'Snow', glyph: '🌨️' },
  75: { es: 'Nieve intensa', en: 'Heavy snow', glyph: '🌨️' },
  77: { es: 'Granizo menudo', en: 'Snow grains', glyph: '🌨️' },
  80: { es: 'Chubascos leves', en: 'Slight showers', glyph: '🌦️' },
  81: { es: 'Chubascos', en: 'Showers', glyph: '🌧️' },
  82: { es: 'Chubascos intensos', en: 'Violent showers', glyph: '⛈️' },
  85: { es: 'Chubascos de nieve leves', en: 'Slight snow showers', glyph: '🌨️' },
  86: { es: 'Chubascos de nieve', en: 'Snow showers', glyph: '🌨️' },
  95: { es: 'Tormenta eléctrica', en: 'Thunderstorm', glyph: '⛈️' },
  96: { es: 'Tormenta con granizo', en: 'Thunderstorm with hail', glyph: '⛈️' },
  99: { es: 'Tormenta con granizo intensa', en: 'Severe thunderstorm with hail', glyph: '⛈️' }
};

function wmo(code: number): { es: string; en: string; glyph: string } {
  return WMO[code] ?? { es: 'Condición variable', en: 'Variable condition', glyph: '🌡️' };
}

// Convert wind speed (km/h) to the Beaufort scale.
function beaufort(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  return 11;
}

// Classify precipitation intensity from a WMO weather code.
function rainSeverity(code: number): 'none' | 'light' | 'mod' | 'heavy' | 'storm' {
  if (code >= 95) return 'storm';
  if (code === 65 || code === 82 || code === 85 || code === 86) return 'heavy';
  if (code === 63 || code === 81) return 'mod';
  if ((code >= 51 && code <= 57) || code === 61 || code === 80 || (code >= 71 && code <= 77)) return 'light';
  return 'none';
}

// Tourist-facing advice engine. Returns categorized, human-readable suggestions
// derived purely from the forecast — it never invents official alerts.
interface AdviceInput {
  code: number;
  isDay: boolean;
  tmax?: number;
  tmin?: number;
  precipProb?: number;
  windMax?: number;
  uv?: number;
}

function buildAdvice(t: AdviceInput, lang: Lang): { travel: string[]; play: string[]; items: string[]; risk: string[] } {
  const T = lang === 'en'
    ? {
        rainProbTravel: 'High chance of rain: bring an umbrella or raincoat.',
        rainProbPlay: 'Prioritise the covered market and roofed streets; save open-air walks for another time.',
        rainProbItem: 'Umbrella or raincoat',
        lightTravel: 'There is drizzle: stones and pavements are slippery, walk carefully.',
        lightPlay: 'Outdoor activities are less enjoyable.',
        lightItem: 'Folding umbrella',
        modTravel: 'Steady rain: better bring a raincoat.',
        modPlay: 'Avoid staying outside long; use the market and covered venues.',
        modItem: 'Raincoat',
        heavyRisk: 'Heavy rain: avoid gullies, low areas and poorly drained streets.',
        heavyPlay: 'Check official conditions and any operator changes before an outdoor trip.',
        heavyItem: 'Raincoat (better than a long umbrella if windy)',
        stormRisk: 'Thunderstorm: do not walk hills, nor shelter under trees or metal structures.',
        stormPlay: 'Check official warnings; do not infer closures from this forecast.',
        warmTravel: 'Somewhat warm day: avoid midday exposure.',
        warmItem: 'Light clothes and water',
        uvStrongTravel: 'The high-altitude sun is very strong: protect yourself.',
        uvHighTravel: 'High solar radiation: take care of the sun.',
        uvItem: 'Sunscreen, sunglasses and hat',
        uvMildItem: 'Sunscreen if you will be outside a lot',
        swingTravel: 'Big day-night difference: bring a jacket to add or remove layers.',
        coldNightTravel: 'Cold mornings and nights: wrap up well.',
        coldNightItem: 'Coat and scarf (highland nights are cold)',
        coldDayTravel: 'Cold day: mind your coat.',
        coldDayItem: 'Thick coat',
        windTravel: 'Noticeable wind: your hat may fly off; avoid long, loose skirts or shawls.',
        windPlay: 'Exposed outdoor routes may be affected by wind.',
        windRisk: 'Strong wind: stay away from signs, awnings and exposed open areas.',
        windRiskPlay: 'If wind is strong, prefer sheltered areas and avoid exposed viewpoints.',
        clearTravel: 'Clear day: ideal to walk and photograph.',
        clearPlay: 'Good time for sunrises, sunsets and mountain scenery.',
        clearItem: 'Do not forget sunscreen',
        niceTravel: 'Pleasant weather to be outside.',
        nicePlay: 'Good light for photos.',
        softTravel: 'Soft light: very good for photos.',
        softPlay: 'No strong sun, ideal for long walks.',
        fogRisk: 'Fog: low visibility; caution in traffic and possible flight or bus delays.',
        fogPlay: 'Not the best time to see the mountains from afar.',
        fogItem: 'Mask in crowded places'
      }
    : {
        rainProbTravel: 'Probabilidad alta de lluvia: lleva paraguas o impermeable.',
        rainProbPlay: 'Prioriza el mercado cubierto y las calles con techo; deja las caminatas al aire libre para otro momento.',
        rainProbItem: 'Paraguas o impermeable',
        lightTravel: 'Hay llovizna: las piedras y veredas están resbalosas, camina con cuidado.',
        lightPlay: 'Las actividades al aire libre se disfrutan menos.',
        lightItem: 'Paraguas plegable',
        modTravel: 'Lluvia marcada: mejor llevar impermeable.',
        modPlay: 'Evita estar mucho tiempo afuera; aprovecha el mercado y recintos cubiertos.',
        modItem: 'Impermeable',
        heavyRisk: 'Lluvia fuerte: evita quebradas, zonas bajas y calles con mal drenaje.',
        heavyPlay: 'Consulta las condiciones oficiales y cualquier cambio del operador antes de una salida al aire libre.',
        heavyItem: 'Impermeable (mejor que paraguas largo si hay viento)',
        stormRisk: 'Tormenta eléctrica: no camines por cerros, ni te refugies bajo árboles o estructuras metálicas.',
        stormPlay: 'Consulta avisos oficiales; este pronóstico no confirma cierres.',
        warmTravel: 'Día algo cálido: evita la exposición al mediodía.',
        warmItem: 'Ropa ligera y agua',
        uvStrongTravel: 'El sol a gran altitud es muy fuerte: protégete.',
        uvHighTravel: 'Radiación solar alta: cuídate del sol.',
        uvItem: 'Protector solar, lentes y gorra',
        uvMildItem: 'Protector solar si estarás mucho tiempo afuera',
        swingTravel: 'Gran diferencia entre el día y la noche: lleva una chaqueta para abrigarte o quitarte capas.',
        coldNightTravel: 'Mañanas y noches frías: abrígate bien.',
        coldNightItem: 'Abrigo y bufanda (las noches en el altiplano son frías)',
        coldDayTravel: 'Día frío: cuida el abrigo.',
        coldDayItem: 'Abrigo grueso',
        windTravel: 'Viento notable: la gorra se puede volar; evita faldas o chal largos y sueltos.',
        windPlay: 'Los tramos exteriores expuestos pueden verse afectados por el viento.',
        windRisk: 'Viento fuerte: aléjate de carteles, toldos y sectores abiertos expuestos.',
        windRiskPlay: 'Si hace viento fuerte, prefiere zonas resguardadas y evita miradores expuestos.',
        clearTravel: 'Día despejado: ideal para recorrer y fotografiar.',
        clearPlay: 'Buen momento para ver amaneceres, atardeceres y el paisaje de montaña.',
        clearItem: 'No olvides el protector solar',
        niceTravel: 'Tiempo agradable para estar afuera.',
        nicePlay: 'Luz buena para fotografiar.',
        softTravel: 'Luz suave: muy buena para fotos.',
        softPlay: 'Sin sol fuerte, ideal para caminar largos tramos.',
        fogRisk: 'Niebla: poca visibilidad; precaución en el tránsito y posibles demoras de vuelos o buses.',
        fogPlay: 'No es el mejor momento para ver de lejos las montañas.',
        fogItem: 'Mascarilla en lugares concurridos'
      };

  const travel: string[] = [];
  const play: string[] = [];
  const items: string[] = [];
  const risk: string[] = [];
  const tmax = t.tmax ?? 0;
  const tmin = t.tmin ?? 0;
  const swing = tmax - tmin;
  const prob = t.precipProb ?? 0;
  const sev = rainSeverity(t.code);
  const bf = beaufort(t.windMax ?? 0);
  const uv = t.uv ?? 0;

  if (prob >= 60) {
    travel.push(T.rainProbTravel);
    play.push(T.rainProbPlay);
    items.push(T.rainProbItem);
  }
  if (sev === 'light') {
    travel.push(T.lightTravel);
    play.push(T.lightPlay);
    items.push(T.lightItem);
  }
  if (sev === 'mod') {
    travel.push(T.modTravel);
    play.push(T.modPlay);
    items.push(T.modItem);
  }
  if (sev === 'heavy') {
    risk.push(T.heavyRisk);
    play.push(T.heavyPlay);
    items.push(T.heavyItem);
  }
  if (sev === 'storm') {
    risk.push(T.stormRisk);
    play.push(T.stormPlay);
  }

  if (tmax >= 24) {
    travel.push(T.warmTravel);
    items.push(T.warmItem);
  }
  if (uv >= 8) {
    travel.push(T.uvStrongTravel);
    items.push(T.uvItem);
  } else if (uv >= 6) {
    travel.push(T.uvHighTravel);
    items.push(T.uvItem);
  } else if (uv >= 3) {
    items.push(T.uvMildItem);
  }

  if (swing > 8) {
    travel.push(T.swingTravel);
  }
  if (tmin <= 5) {
    travel.push(T.coldNightTravel);
    items.push(T.coldNightItem);
  }
  if (tmax <= 10) {
    travel.push(T.coldDayTravel);
    items.push(T.coldDayItem);
  }

  if (bf >= 4 && bf <= 6) {
    travel.push(T.windTravel);
    play.push(T.windPlay);
  }
  if (bf >= 7) {
    risk.push(T.windRisk);
    play.push(T.windRiskPlay);
  }

  if (t.isDay) {
    if (t.code === 0) {
      travel.push(T.clearTravel);
      play.push(T.clearPlay);
      items.push(T.clearItem);
    } else if (t.code === 1) {
      travel.push(T.niceTravel);
      play.push(T.nicePlay);
    } else if (t.code === 3) {
      travel.push(T.softTravel);
      play.push(T.softPlay);
    }
  }

  if (t.code === 45 || t.code === 48) {
    risk.push(T.fogRisk);
    play.push(T.fogPlay);
    items.push(T.fogItem);
  }

  const uniq = (a: string[]) => Array.from(new Set(a));
  return { travel: uniq(travel), play: uniq(play), items: uniq(items), risk: uniq(risk) };
}

function buildApiUrl(lat: number, lon: number): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,is_day,weather_code,wind_speed_10m,wind_direction_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,uv_index_max',
    timezone: 'auto',
    forecast_days: '7',
    wind_speed_unit: 'kmh'
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

interface WorkerContext {
  waitUntil: (promise: Promise<unknown>) => void;
}

function transform(data: any, lat: number, lon: number, lang: Lang) {
  const cur = data?.current ?? {};
  const daily = data?.daily ?? {};
  const times: string[] = daily.time ?? [];
  const days = times.map((dt: string, i: number) => {
    const code = daily.weather_code?.[i];
    const w = wmo(code);
    return {
      date: dt,
      code,
      condLabel: lang === 'en' ? w.en : w.es,
      glyph: w.glyph,
      tmax: daily.temperature_2m_max?.[i],
      tmin: daily.temperature_2m_min?.[i],
      precipProb: daily.precipitation_probability_max?.[i],
      precipSum: daily.precipitation_sum?.[i],
      windMax: daily.wind_speed_10m_max?.[i],
      uv: daily.uv_index_max?.[i]
    };
  });
  const today = days[0] ?? {};
  const umbrella = (cur.precipitation ?? 0) > 0.1 || (today.precipProb ?? 0) >= 40;
  const curW = wmo(cur.weather_code);
  return {
    updated: cur.time ?? null,
    timezone: data.timezone ?? null,
    current: {
      temp: cur.temperature_2m,
      feels: cur.apparent_temperature,
      humidity: cur.relative_humidity_2m,
      precip: cur.precipitation,
      isDay: cur.is_day === 1,
      code: cur.weather_code,
      condLabel: lang === 'en' ? curW.en : curW.es,
      glyph: curW.glyph,
      wind: cur.wind_speed_10m,
      windDir: cur.wind_direction_10m
    },
    daily: days,
    advisory: buildAdvice({
      code: today.code,
      isDay: cur.is_day === 1,
      tmax: today.tmax,
      tmin: today.tmin,
      precipProb: today.precipProb,
      windMax: today.windMax,
      uv: today.uv
    }, lang),
    location: { lat, lon }
  };
}

async function getWeather(lat: number, lon: number, lang: Lang, ctx: WorkerContext): Promise<Response> {
  const cache = caches.default;
  const apiUrl = buildApiUrl(lat, lon);
  const cacheKey = new Request(apiUrl + '&lang=' + lang);

  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let upstream: Response;
  try {
    upstream = await fetch(apiUrl, { cf: { cacheTtl: CACHE_TTL_SECONDS } } as RequestInit);
  } catch {
    return new Response(JSON.stringify({ error: 'servicio no disponible' }), {
      status: 502,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }

  if (!upstream.ok) {
    return new Response(JSON.stringify({ error: 'servicio no disponible' }), {
      status: 502,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }

  let data: any;
  try { data = await upstream.json(); } catch { return Response.json({ error: 'weather unavailable' }, { status: 502 }); }
  if (!Number.isFinite(data?.current?.temperature_2m) || !Array.isArray(data?.daily?.time) || !data.daily.time.length) return Response.json({ error: 'weather unavailable' }, { status: 502 });
  const payload = JSON.stringify(transform(data, lat, lon, lang));
  const response = new Response(payload, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`,
      'access-control-allow-origin': '*'
    }
  });
  ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

async function notFound(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url); url.pathname = '/404.html'; url.search = '';
  const asset = await env.ASSETS.fetch(new Request(url, { method: 'GET' }));
  const headers = new Headers(asset.headers); headers.set('X-Robots-Tag', 'noindex, follow'); headers.set('Cache-Control', 'no-store');
  return new Response(request.method === 'HEAD' ? null : asset.body, { status: 404, headers });
}

export default {
  async fetch(request: Request, env: Env, ctx: WorkerContext): Promise<Response> {
    const url = new URL(request.url);

    // Canonical transport precedes error aliases and preserves path/query.
    if (url.hostname === 'www.mercadosanpedro.com' || url.hostname === 'mercadosanpedro.com' && url.protocol !== 'https:') {
      url.protocol = 'https:'; url.hostname = 'mercadosanpedro.com'; return Response.redirect(url.toString(), 301);
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    if (['/404', '/404/', '/404.html', '/404.html/'].includes(url.pathname)) return notFound(request, env);
    if (url.pathname === '/api/weather') {
      let lat = DEFAULT_LAT;
      let lon = DEFAULT_LON;
      const qLat = url.searchParams.get('lat');
      const qLon = url.searchParams.get('lon');
      if (qLat && qLon && !Number.isNaN(Number(qLat)) && !Number.isNaN(Number(qLon))) {
        lat = Number(qLat);
        lon = Number(qLon);
      }
      const qLang = url.searchParams.get('lang');
      const lang: Lang = qLang === 'en' ? 'en' : 'es';
      const response = await getWeather(lat, lon, lang, ctx);
      return request.method === 'HEAD' ? new Response(null, response) : response;
    }

    // Everything else is served from the static Astro build.
    const response = await env.ASSETS.fetch(request);
    return response.status === 404 ? notFound(request, env) : response;
  }
};
