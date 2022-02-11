import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  css: [
    '@/assets/css/styles.css',
  ],
  head: {
    title: 'Nuxt CMS Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt CMS blog cooming soon'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'
      },
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.15.4/js/all.js',
        body: true,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        body: true,
      },
      {
        src: 'https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js',
        body: true,
      }
    ],
  }
})
