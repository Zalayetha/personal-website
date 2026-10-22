import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zaghy.my.id",
  trailingSlash: "never",
  redirects: {
    "/blog": "/writing",
    "/writings": "/writing",
    "/projects": "/work",
    "/projects/[slug]": "/work/[slug]",
  },
});
