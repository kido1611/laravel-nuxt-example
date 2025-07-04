// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    // can be override using env. NUXT_API_URL
    apiUrl: "http://localhost:8000",
  },
  routeRules: {
    "/": {
      redirect: "/dashboard/notes",
    },
    "/dashboard": {
      redirect: "/dashboard/notes",
    },
  },
});
