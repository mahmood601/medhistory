import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true
  }),
  integrations: [tailwind({}), icon({
    include: {
      mdi: ["facebook", "instagram", "whatsapp", "telegram", "github"]
    },
  })]
});
