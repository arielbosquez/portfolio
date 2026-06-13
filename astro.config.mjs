// @ts-check
import { defineConfig } from 'astro/config';


export default defineConfig({
  site: 'https://arielbosquez.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
