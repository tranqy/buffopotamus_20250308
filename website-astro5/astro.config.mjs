// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Enable experimental features for responsive images and SVG components
  experimental: {
    responsiveImages: true,
    svg: true,
  },
  // Add output and adapter settings for Cloudflare Pages
  output: 'server',
  adapter: cloudflare()
});
