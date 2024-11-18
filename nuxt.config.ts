// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/i18n", "@unocss/nuxt"],
  runtimeConfig: {
    nodemaileruser: process.env.MAILTRAP_USERNAME,
    nodemailerpass: process.env.MAILTRAP_PASSWORD,
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  i18n: {
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "es",
        iso: "es-ES",
        file: "es-ES.json",
      },
    ], // used in URL path prefix
    defaultLocale: "en",
  },
  css: ["@/assets/css/styles.css"],
});
