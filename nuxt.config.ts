// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  typescript:{
    shim: false,
    strict: true
  },
  modules: [
    [
        '@nuxtjs/i18n',
        {
            legacy: false,
            skipSettingLocaleOnNavigate: true,
            detectBrowserLanguage: {
                useCookie: true,
                cookieKey: 'i18n_redirected',
                redirectOn: 'root',  // recommended
            },
            lazy: true,
            langDir: 'locales',
            locales: [
                {
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.json', 
                },
                {
                    code: 'es',
                    iso: 'es-ES',
                    file: 'es-ES.json', 
                }, 
            ], // used in URL path prefix
            defaultLocale: 'en',
        }
    ],
    '@unocss/nuxt',
    '@nuxt/image'
  ],
  css: ['@/assets/css/styles.css'],
  runtimeConfig:{
    nodemaileruser: process.env.MAILTRAP_USERNAME,
    nodemailerpass: process.env.MAILTRAP_PASSWORD
  },
})
