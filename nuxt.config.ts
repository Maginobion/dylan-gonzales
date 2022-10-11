// https://v3.nuxtjs.org/api/configuration/nuxt.config

import UnocssIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt'
    ],
    unocss:{
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        // core options
        shortcuts: [],
        rules: [],
    },
    runtimeConfig:{
        public:{
            apiBase: ''
        }
    },
    css: ['@/assets/css/styles.css']
})
