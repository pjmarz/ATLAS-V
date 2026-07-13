// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://peterjamarino.com',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'EB Garamond',
      cssVariable: '--font-eb-garamond',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
