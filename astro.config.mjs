// @ts-check
import { defineConfig } from 'astro/config';

// build estatico, despues lo subo a vercel
export default defineConfig({
  site: 'https://arielbosquez.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
