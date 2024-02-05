import tailwindForms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: [...defaultTheme.fontFamily.sans],
          },
          colors: {
            amber: {
              '50': '#fdf5ef',
              '100': '#fae8da',
              '200': '#f5cdb3',
              '300': '#eeac83',
              '400': '#e58152',
              '500': '#df6130',
              '600': '#d94e29',
              '700': '#ad3821',
              '800': '#8b2e21',
              '900': '#70281e',
              '950': '#3c120e',
            },
          },
        },
      },
      plugins: [tailwindForms],
    },
  },
  devtools: { enabled: true },
})
