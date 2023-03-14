// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    typescript:{
        shim: false
    },
    modules: [
        '@unocss/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
    ],
    unocss:{
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        // core options
        shortcuts: [],
        rules:[],
    },
    runtimeConfig:{
        nodemaileruser: process.env.MAILTRAP_USERNAME,
        nodemailerpass: process.env.MAILTRAP_PASSWORD
    },
    css: ['@/assets/css/styles.css'],
    i18n: {
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
                code:'en',
                iso: 'en-US',
                file: 'en.json', 
            },
            {
                code:'es',
                iso: 'es-ES',
                file: 'es.json', 
            }, 
        ], // used in URL path prefix
        defaultLocale: 'en',
    }
})
