import tailwindForms from '@tailwindcss/forms'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      plugins: [tailwindForms]
    }
  },
  devtools: { enabled: true }
})
