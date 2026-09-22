// i18n framework for the static, file-based multilingual site.
// Spanish (es) is the default locale at "/"; English (en) lives under "/en/".
// No @astrojs/i18n is used because routing is explicit (one folder per locale).

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const htmlLang: Record<Locale, string> = { es: 'es-PE', en: 'en' };
export const ogLocale: Record<Locale, string> = { es: 'es_PE', en: 'en_US' };

export const langLabel: Record<Locale, { name: string; short: string }> = {
  es: { name: 'Español', short: 'ES' },
  en: { name: 'English', short: 'EN' }
};

// Route map: every public page keyed by locale. Trailing slashes match the
// canonical URLs emitted by Astro's static build.
export const routes = {
  home: { es: '/', en: '/en/' },
  horario: { es: '/horario-cómo-llegar/', en: '/en/hours/' },
  comida: { es: '/comida-compras/', en: '/en/food-shopping/' },
  seguridad: { es: '/seguridad/', en: '/en/safety/' },
  privacidad: { es: '/privacidad/', en: '/en/privacy/' },
  terminos: { es: '/terminos/', en: '/en/terms/' },
  cookies: { es: '/cookies/', en: '/en/cookies/' }
} as const;

export type RouteKey = keyof typeof routes;

export function pathFor(locale: Locale, key: RouteKey): string {
  return routes[key][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

// Build hreflang alternates (plus x-default) for a route key.
// Returns [] when Astro.site is unset, so build stays safe with no site URL.
export function hreflangAlternates(key: RouteKey, site: URL | undefined): { lang: string; href: string }[] {
  if (!site) return [];
  const out: { lang: string; href: string }[] = [];
  for (const loc of locales) {
    out.push({ lang: loc, href: new URL(routes[key][loc], site).toString() });
  }
  out.push({ lang: 'x-default', href: new URL(routes[key][defaultLocale], site).toString() });
  return out;
}

// BreadcrumbList JSON-LD for a single locale-aware page, ending at the page itself.
export function breadcrumbSchema(locale: Locale, key: RouteKey, site: URL | undefined) {
  if (!site) return undefined;
  const crumbs: { name: string; url: string }[] = [
    { name: locale === 'es' ? 'Inicio' : 'Home', url: new URL(routes.home[locale], site).toString() }
  ];
  if (key !== 'home') {
    crumbs.push({ name: breadcrumbLeafName(locale, key), url: new URL(routes[key][locale], site).toString() });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url
    }))
  };
}

function breadcrumbLeafName(locale: Locale, key: RouteKey): string {
  const map: Record<RouteKey, { es: string; en: string }> = {
    home: { es: 'Inicio', en: 'Home' },
    horario: { es: 'Horario y cómo llegar', en: 'Hours & how to get there' },
    comida: { es: 'Comida y compras', en: 'Food & shopping' },
    seguridad: { es: 'Seguridad', en: 'Safety' },
    privacidad: { es: 'Privacidad', en: 'Privacy' },
    terminos: { es: 'Términos', en: 'Terms' },
    cookies: { es: 'Cookies', en: 'Cookies' }
  };
  return map[key][locale];
}
