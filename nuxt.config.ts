import tailwindForms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import { theme } from '#tailwind-config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', "@nuxt/image"],
  pages: true,
  css: ['~/assets/css/main.css', '~/assets/font/stylesheet.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Bicyclette', ...defaultTheme.fontFamily.sans],
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
            teal: {
              '50': '#f0fbfb',
              '100': '#d8f4f5',
              '200': '#b6e8eb',
              '300': '#83d7dd',
              '400': '#53bfca',
              '500': '#2d9fad',
              '600': '#298191',
              '700': '#276977',
              '800': '#275663',
              '900': '#254954',
              '950': '#133039',
            },
            gray: colors.stone,
          },
          typography: ({ theme }: any) => ({
            DEFAULT: {
              css: {
                '--tw-prose-body': theme('colors.stone[800]'),
                '--tw-prose-headings': theme('colors.stone[900]'),
                '--tw-prose-lead': theme('colors.stone[700]'),
                '--tw-prose-links': theme('colors.amber[600]'),
                '--tw-prose-bold': theme('colors.stone[900]'),
                '--tw-prose-counters': theme('colors.stone[600]'),
                '--tw-prose-bullets': theme('colors.amber[400]'),
                '--tw-prose-hr': theme('colors.stone[300]'),
                '--tw-prose-quotes': theme('colors.stone[900]'),
                '--tw-prose-quote-borders': theme('colors.stone[300]'),
                '--tw-prose-captions': theme('colors.stone[700]'),
                '--tw-prose-code': theme('colors.stone[900]'),
                '--tw-prose-pre-code': theme('colors.stone[100]'),
                '--tw-prose-pre-bg': theme('colors.stone[900]'),
                '--tw-prose-th-borders': theme('colors.amber[300]'),
                '--tw-prose-td-borders': theme('colors.amber[200]'),
              }
            }
          }),
        },
      },
      plugins: [tailwindForms, typography],
    },
  },
  devtools: { enabled: true },
})
