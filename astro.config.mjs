import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://pdramirez-dev.github.io",
  base: "/TaskFlow-Smart",
  output: "static",
  integrations: [react(), tailwind()]
});
