import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import  react  from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  renderers: [
    '@astrojs/renderer-react'
  ],
  experimental: {
    viewTransitions: true
  },
  integrations: [tailwind(), compress(), react()]
});