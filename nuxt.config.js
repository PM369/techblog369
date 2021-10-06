const axios = require('axios')
import colors from 'vuetify/es5/util/colors'

export default {
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  ssr: false,
  // publicRuntimeConfig: {
  //   baseURL: process.env.NODE_ENV === 'production' ? 'http://perfectpolitics.in' : 'http://0.0.0.0:3019',
  //   apiLink: process.env.NODE_ENV === 'production' ? 'https://api20.cicdhosting.com/articles' : 'https://api20.cicdhosting.com/articles'
  // },
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // },
  // env: {
  //   baseUrl: process.env.NODE_ENV === 'production' ? 'https://techblog369.in' : 'http://0.0.0.0:3000',
  //   apiLink: process.env.NODE_ENV === 'production' ? 'https://api.techblog369.in/articles' : 'http://localhost:1337/articles',
  //   appimage: process.env.NODE_ENV === 'production' ? 'https://api.techblog369.in/' : 'http://localhost:1337/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - techblog369.in',
    title: 'techblog369.in',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:"Everything you need to know about technology, we'll show how to step- by - step.Best programming language, free source code, tools, tips and create great content that your audience will love."},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/techblog369.png' },
      { rel: "canonical", href: "https://techblog369.in" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  sitemap: {
    hostname: 'https://techblog369.in',
    gzip: true,
    exclude: [

    ],
    routes: async () => {
      let { data } = await axios.get('https://api.techblog369.in/articles')
      return data.map(v => `/blog/${v.slug}`)
    }
  },
 
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
