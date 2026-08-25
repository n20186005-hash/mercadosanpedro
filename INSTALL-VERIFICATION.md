# Estado de verificación del ensamblado

El entorno de ejecución usado para preparar este paquete no tiene resolución DNS saliente hacia `registry.npmjs.org`. Por ese motivo no fue posible descargar pnpm/dependencias, producir el grafo transitorio completo del lockfile ni ejecutar honestamente la secuencia de instalación limpia.

El `pnpm-lock.yaml` incluido fija el importador y las versiones directas solicitadas, pero **debe regenerarse una vez en un entorno con acceso a npm antes de tratarlo como lockfile final**:

```bash
corepack enable
corepack prepare pnpm@11.13.1 --activate
pnpm install --no-frozen-lockfile
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
grep -RInE 'example\\.com|localhost|chrome-extension://' dist || true
```

Si `SITE_URL` no está definido, no se genera sitemap. Para generar sitemap con URLs reales:

```bash
SITE_URL=https://DOMINIO-REAL pnpm build
```
