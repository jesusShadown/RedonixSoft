import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// URL pública del sitio (necesaria para que Open Graph use rutas absolutas).
// En Vercel se toma automáticamente del dominio de producción.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export default defineConfig({
  site,
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});

