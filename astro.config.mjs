import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://stephan-mertin.github.io",
  base: "/website",
  integrations: [react()],
});
