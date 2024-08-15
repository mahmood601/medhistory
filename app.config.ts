import { defineConfig } from "@solidjs/start/config";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  vite: {
    plugins: [ViteImageOptimizer()]
  }

});
