# Verificación local

La instalación con pnpm 11.13.1 y `--frozen-lockfile` resolvió el lockfile existente sin modificarlo. `pnpm check` y `pnpm build` se ejecutan sobre el código de Astro; el Worker se valida adicionalmente con su runtime de Static Assets. `dist/` sigue sin versionarse.

Si el entorno bloquea la escritura de preferencias de telemetría de Astro, se puede usar `ASTRO_TELEMETRY_DISABLED=1` al ejecutar las comprobaciones. No es necesario regenerar el lockfile para solucionar ese permiso local.

Una compilación local no acredita una publicación. La revisión visual de los dos idiomas, las interacciones, el pronóstico y el dominio de producción corresponde a una fase posterior de aceptación.
