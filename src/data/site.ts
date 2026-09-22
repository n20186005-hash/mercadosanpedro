// Centralized SEO entity binding for the single-attraction guide.
// Replace the values below to rebind the entire site to another attraction.

export const DOMAIN_NAME = 'mercadosanpedro.com';
export const SITE_URL = `https://${DOMAIN_NAME}`;

export const ATTRACTION_FULL_NAME = 'Mercado Central de San Pedro';
export const ATTRACTION_SHORT_NAME = 'Mercado San Pedro';
export const CITY_NAME = 'Cusco';
export const STATE_PROVINCE = 'Cusco';
export const COUNTRY_NAME = 'Perú';
export const COUNTRY_CODE_2LETTER = 'PE';

export const STREET_ADDRESS = 'Ca. Thupaq Amaru 477';
export const POSTAL_CODE = '08002';
export const PLUS_CODE = 'F2H8+JW Cusco, Perú';

export const LATITUDE = -13.520957686847316;
export const LONGITUDE = -71.982647;

export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/tG72Ybjn8motbpZR6';
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6909.893352368979!2d-71.98524252298962!3d-13.520957686847316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd67664356669%3A0x66d1176e24a485a0!2sMercado%20Central%20de%20San%20Pedro!5e1!3m2!1ses!2spe!4v1787621448064!5m2!1ses!2spe';

export const NEARBY_LANDMARK_1 = 'Plazoleta e Iglesia de San Pedro';
export const NEARBY_LANDMARK_2 = 'Plaza de Armas del Cusco';

// Official government tourism portal (Perú / MINCETUR).
export const GOVT_TOURISM_URL = 'https://www.gob.pe/mincetur';

// SEO site name: "attraction + city + travel guide".
export const SITE_NAME = 'Mercado Central de San Pedro Cusco — Guía de Visita';
// English equivalent for the /en/ locale.
export const SITE_NAME_EN = 'Mercado Central de San Pedro Cusco — Visitor Guide';

export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

export function withSiteNameLocale(suffix: string, locale: 'es' | 'en'): string {
  return locale === 'es' ? `${suffix} | ${SITE_NAME}` : `${suffix} | ${SITE_NAME_EN}`;
}

// Aggregate rating snapshot (kept as strings for schema.org).
export const RATING_VALUE = '4.3';
export const REVIEW_COUNT = '45695';

// Local branded cover, used for og:image, JSON-LD image and PWA.
export const HERO_IMAGE = `${SITE_URL}/images/hero.jpg`;

export const OPENING_HOURS = { opens: '06:00', closes: '18:00' };
