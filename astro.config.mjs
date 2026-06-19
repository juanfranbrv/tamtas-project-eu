import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tamtas-project.eu",
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
