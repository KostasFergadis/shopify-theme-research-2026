import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: 'frontend',
      entrypointsDir: 'frontend/entrypoints',
    })
  ],
  build: {
    emptyOutDir: false, // Ensures Vite doesn't delete Shopify's native assets
  },
});