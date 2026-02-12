import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node'; // You might need to install this!

export default defineConfig({
  output: 'server', // <--- Change 'static' or 'hybrid' to 'server'
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind()],
});