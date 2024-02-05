import tailwindForms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],
  pages: true,
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
            yellow: {
              '50': '#fbf9f1',
              '100': '#f6f0de',
              '200': '#ebdcbb',
              '300': '#dfc592',
              '400': '#d1a666',
              '500': '#c78f48',
              '600': '#b97a3d',
              '700': '#9a6134',
              '800': '#7c4f30',
              '900': '#654129',
              '950': '#362114',
            },
            gray: colors.stone,
          },
        },
      },
      plugins: [tailwindForms],
    },
  },
  devtools: { enabled: true },
})
