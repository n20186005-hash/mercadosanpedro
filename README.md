# Guía Cultural del Mercado San Pedro de Cusco

Guía independiente del Mercado Central de San Pedro, Cusco, Perú, disponible en español e inglés. El mercado y cada puesto pueden tener horarios distintos; las referencias fechadas y sus discrepancias se explican en ambas versiones.

## Desarrollo

El proyecto fija Node.js 24.19.0 y pnpm 11.13.1 en `package.json` y conserva `pnpm-lock.yaml`.

```sh
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
node scripts/consent-test.mjs
node scripts/weather-test.mjs
```

Astro 7.2.6 genera `dist/` (no versionado). El Worker sirve Static Assets y el proxy de pronóstico `/api/weather`; `wrangler.jsonc` usa el proyecto `mercadosanpedro`. El dominio predeterminado de `astro.config.mjs` es `https://mercadosanpedro.com`; una variable `SITE_URL` puede sustituirlo para un entorno distinto. El dominio, metadatos y enlaces de entidad también se definen en `src/data/site.ts`.

## Contenido y recursos

Las fuentes públicas y sus fechas están enlazadas en la guía. No se promete disponibilidad de puestos ni se codifican horarios variables como una programación permanente en JSON-LD. Las fotografías proceden de los tres registros individuales de Commons descritos en [IMAGE-CREDITS.md](IMAGE-CREDITS.md); la atribución y las licencias también son visibles junto a las fotos. El gráfico original `public/images/hero.jpg` se conserva como imagen social.

El pronóstico usa Open-Meteo a través del Worker, con atribución y un enlace de referencia a SENAMHI. La interfaz distingue datos modelados, hora del dato, fallos y consejos orientativos. Los datos no son alertas oficiales.

La página de cookies mantiene el control existente de Google Analytics. Las pruebas ejecutan el archivo publicado y sus callbacks con un DOM/almacenamiento simulado; no sustituyen una revisión visual ni prueban envío de telemetría. El service worker antiguo se retira para evitar servir páginas o controles antiguos desde su caché.
