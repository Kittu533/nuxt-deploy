export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      API_PRODUCTS: process.env.NUXT_PUBLIC_API_PRODUCTS,
    },
  },
  nitro: {
    preset: 'node-server'
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@nuxtjs/color-mode',
    'nuxt-aos',
    '@nuxt/image'
  ]
})
