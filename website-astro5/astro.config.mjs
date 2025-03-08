// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable experimental features for responsive images and SVG components
  experimental: {
    responsiveImages: true,
    svg: true,
  }
});
