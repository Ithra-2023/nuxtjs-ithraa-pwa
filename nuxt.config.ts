// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'
const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  pages: true,
  devtools: {
    enabled: true
  },

  app: {
    baseURL: isProd ? '/nuxtjs-ithraa-pwa/' : '/',
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-gtag',
    'nuxt-vuefire'
  ],

  vuefire: {
    config: {
      apiKey: process.env.GOOGLE_API_KEY,
      authDomain: process.env.GOOGLE_AUTH_DOMAIN,
      projectId: process.env.GOOGLE_PROJECT_ID,
      storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
      messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
      appId: process.env.GOOGLE_APP_ID,
      measurementId: process.env.GOOGLE_MEASUREMENT_ID
    },

    auth: {
      enabled: false
    },
  },

  css: ['~/assets/css/main.css'],


  i18n: {
    langDir: "locales/",
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: "ar",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "ar",
        iso: "ar-SA",
        name: "عربي",
        file: "ar-SA.json",
        dir: "rtl",
      },
    ],
  },
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  tailwindcss: {
    viewer: false
  },



  pwa: {
    meta:{
      name: "Ithraa",
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black-translucent",
      lang: "ar",
      author: "6 Degrees Technologies"
    },
    workbox: {
      enabled: false
    },
    icon: {
      /* icon options */
    }
  }



})
