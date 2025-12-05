// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/template/css/common.css', '~/assets/styles/common.css', '~/assets/template/css/reset.css'],
    modules: ['@nuxtjs/tailwindcss'],

    runtimeConfig: {
        public: {
            apiBaseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'localhost',
        }
    }
})