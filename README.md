# Guía Cultural del Mercado San Pedro de Cusco

Sitio informativo independiente y sin fines de lucro sobre el Mercado Central de San Pedro (Cusco, Perú).

## Stack
- Astro 7.2.6
- Tailwind CSS 4.3.3 mediante `@tailwindcss/vite`
- TypeScript 6.0.3 (compatible con `@astrojs/check` 0.9.10)
- pnpm 11.13.1
- Node.js 24.19.0 LTS
- Cloudflare Workers Static Assets mediante Wrangler 4.125.0

## Configuración del dominio
El dominio se define solo mediante `SITE_URL`, consumido por el campo `site` de `astro.config.mjs`.

```bash
SITE_URL=https://tu-dominio-real.pe pnpm build
```

Si `SITE_URL` está vacío, el proyecto sigue construyendo: no se emite canonical absoluto y `@astrojs/sitemap` no se activa.

## Desarrollo
```bash
corepack enable
corepack prepare pnpm@11.13.1 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare
`wrangler.jsonc` publica el directorio `dist` como Workers Static Assets.

```bash
pnpm deploy
```

## Fotografías
La web usa imágenes reales servidas desde Wikimedia Commons / Unsplash con atribución visible en la página. Por restricciones de conectividad del entorno de ensamblado, las fotografías no se pudieron materializar dentro del ZIP; los iconos y la identidad visual sí son completamente locales. Las URLs de imagen apuntan a los archivos originales con licencias indicadas en la web.
