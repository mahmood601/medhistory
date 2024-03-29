import { defineConfig, sharpImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import legacy from '@vitejs/plugin-legacy';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Works on both development and production build environments
  esbuild: {
    // Configure this value when the browser version of the development environment is lower
    target: "es2015",
    include: /\.(ts|jsx|tsx|astro)$/
  },
  // For production build environments only
  build: {
    /**
     * The final built browser-compatible target, minimum support to es2015
     *
     * Note: In vite v3.0 and above, this value may be overridden by @vitejs/plugin-legacy
     */
    target: "es2015",
    /**
     * Configure the css compression target separately, or use the default configuration
     *
     * Note: This option has a different default value in vite and @vitejs/plugin-legacy
     */
    cssTarget: "chrome61"
  },
  plugins: [
    // For production build environments only
    legacy({
      /**
       * Expected compatible target browser version range
       *
       * The example here is in the configuration format of browserslist
       * (https://github.com/browserslist/browserslist)
       */
      targets: ["chrome >= 64", "edge >= 79", "safari >= 11.1", "firefox >= 67"],
      /**
       * Whether to generate legacy browser compatibility chunks
       *
       * The examples here are only compatible with modern browsers, so it is not necessary to generate
       */
      renderLegacyChunks: false,
      /**
       * Polyfills required by modern browsers
       *
       * Since some low-version modern browsers do not support the new syntax
       * You need to load polyfills corresponding to the syntax to be compatible
       * At build, the required polyfills are packaged according to the target browser version range
       *
       * Two configuration methods:
       *
       * 1. true
       *  - Auto detect required polyfills based on target browser version range
       *  - Demerit: will introduce polyfills that are not needed by modern browsers in higher versions,
       *    as well as more aggressive polyfills.
       *
       * 2. string[]
       *  - Add low-version browser polyfills as needed
       *  - Example: ['es/global-this', 'proposals/object-from-entries']
       *  - Demerit: It needs to be added manually, which is inflexible;
       *    it will be discovered after the production is deployed, resulting in production failure! ! !
       */
      modernPolyfills: true
    })],
  output: "hybrid",
  adapter: vercel({
    imageService: true
  }),
  site: "https://medhistory.vercel.app",
  integrations: [tailwind({}), icon({
    include: {
      mdi: ["facebook", "instagram", "whatsapp", "telegram", "github", "heart"]
    }
  }), sitemap()]
});
