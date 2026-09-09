import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://stephan-mertin.de",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/impressum/") && !page.endsWith("/datenschutz/"),
    }),
  ],
});
