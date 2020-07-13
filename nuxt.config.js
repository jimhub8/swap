import colors from 'vuetify/es5/util/colors'
import axios from "axios";

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s ',
    title: 'Swap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "google-site-verification", content: "9nICd7bfcFZ7SaJjQGo5l_mMs_n_pXY68ZsRg6r9m2M" },
      { hid: 'og:site_name', name: 'og:site_name', content:  'Swap Store' },
    ],
    script: [
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'data-ad-client': "ca-pub-1017484296147530", async: true },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/logo.jpg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/app.scss',
    '~/assets/css/all.css',
    '~/assets/css/responsive.css',
    '~/assets/css/main.css',
    '~/assets/css/theme.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui.js',
    '~/plugins/vue-lazyload',
    '~/plugins/slugify',
    '~/plugins/vue-session',
    { src: '~/plugins/instantSearch.js', ssr: false },


  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
    '@nuxtjs/auth',
    '@nuxtjs/google-analytics',
    'cookie-universal-nuxt',

    '@nuxtjs/sitemap'

    // '@nuxtjs/bootstrap',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  //  admin.jim/api/auth/login
  // http://admin.jim/api/auth/login
  axios: {
    // baseURL: process.env.API_URL
    baseURL: 'http://admin.jim'
    // baseURL: 'https://www.seller.swapstore.co.ke'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get', propertyName: false },
  //       },

  //       tokenRequired: true,
  //       tokenType: 'bearer',
  //       globalToken: true,
  //       autoFetchUser: true
  //     }
  //   }
  // },
  auth: {
    strategies: {
      local: {
        endpoints: {
          // login: { url: 'login', method: 'post', propertyName: 'token' },
          // logout: { url: 'logout', method: 'post' },

          login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: false },
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    token: {
      prefix: 'access_'
    },
  },

  router: {
    // middleware: ['auth']
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
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
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  googleAnalytics: {
    id: "UA-169626171-1",
    dev: true
  },
  /*
    sitemap: {
      path: '/sitemap.xml',
      hostname: 'https://swapstore.co.ke',
      cacheTime: 1000 * 60 * 15,
      gzip: true,
      generate: false,
      routes: [
        '/',
        '/shop',
        '/category',
        '/cart',
        '/checkout',
        '/privacy',
        '/account',
      ].map(route => ({
        url: route,
        changefreq: 'monthly',
        priority: 1,
        lastmodISO: new Date().toISOString().split('T')[0]
      }))
    },*/

  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: process.env.BASE_URL,
  //   cacheTime: 1000 * 60 * 15,
  //   gzip: true,
  //   generate: false,
  //   routes: async () => {
  //     // let apiUrl = process.env.API_URL || 'http://admin.jim/api/'
  //     let apiUrl = process.env.API_URL || 'https://www.seller.swapstore.co.ke/api/'
  //     const { data } = await axios.get(`${apiUrl}products`)
  //     return data.data.map(v => `/shop/${v.product_name}-${v.id}`)
  //   }
  // }


  sitemap: {

    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    sitemaps: [
      {
        path: '/sitemap/sitemap.xml',
      },
      {
        path: '/products/sitemap.xml',
        exclude: ['/account', '/Cart', '/category', '/checkout', '/faq', '/login', '/privacy', '/register', '/shop', '/subcategories', '/Thankyou', '/vendor', '/Carousel', '/'],
        routes: async () => {
            // let apiUrl = process.env.API_URL || 'http://admin.jim/api/'
            let apiUrl = process.env.API_URL || 'https://www.seller.swapstore.co.ke/api/'
            const { data } = await axios.get(`${apiUrl}products`)
            return data.data.map(v => `/shop/${v.product_name}-${v.id}`)
          }
      },
      {
        path: '/categories/sitemap.xml',
        exclude: ['/account', '/Cart', '/category', '/checkout', '/faq', '/login', '/privacy', '/register', '/shop', '/subcategories', '/Thankyou', '/vendor', '/Carousel', '/'],
        routes: async () => {
            // let apiUrl = process.env.API_URL || 'http://admin.jim/api/'
            let apiUrl = process.env.API_URL || 'https://www.seller.swapstore.co.ke/api/'
            const { data } = await axios.get(`${apiUrl}categories`)
            return data.data.map(v => `/category/${v.category}-${v.id}`)
          }
      },
      {
        path: '/subcategories/sitemap.xml',
        exclude: ['/account', '/Cart', '/category', '/checkout', '/faq', '/login', '/privacy', '/register', '/shop', '/subcategories', '/Thankyou', '/vendor', '/Carousel', '/'],
        routes: async () => {
            let apiUrl = process.env.API_URL || 'http://admin.jim/api/'
            // let apiUrl = process.env.API_URL || 'https://www.seller.swapstore.co.ke/api/'
            const { data } = await axios.get(`${apiUrl}subcategories`)
            return data.data.map(v => `/subcategories/${v.subcategory}-${v.id}`)
          }
      },
    ]
  }
}
