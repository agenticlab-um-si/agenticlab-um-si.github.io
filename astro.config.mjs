import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://agenticlab-um-si.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
