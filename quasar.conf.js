// Configuration for your app

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'axios',
      { path: 'firebase', server: false },
      { path: 'vue-plyr', server: false },
      { path: 'vue-h5-audio-controls', server: false },
      'addressbar-color',
      { path: 'vue-particles', server: false },
//      { path: 'vue-threeejs', server: false },
{ path: 'vue-wave-surfer', server: false },
    ],
    
    css: [
      'app.styl',
      'app.css'
    ],

    preFetch: true,

    extras: [
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      // 'ionicons-v4',
      // 'mdi-v3',
      'fontawesome-v5',
      'eva-icons'
    ],

    framework: {
      all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QBar',
        'QDialog',
        'QSpace',
        'QTooltip',
        'QInput',
        'QUploader',
        'QAvatar',
        'QBadge',
        'QCarousel',
        'QCarouselControl',
        'QCarouselSlide'        
      ],

      directives: [
        'Ripple',
        'ClosePopup',
        'GoBack'

      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'LoadingBar',
        'Meta',
        'AddressbarColor',
        
      ],

      // Quasar configs
      config: {
        loadingBar: {
          skipHijack: false,
          color: 'light-blue-9',
          size: '4px'          
        }
      }

      // iconSet: 'ionicons-v4'
      // lang: 'de' // Quasar language
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg, { isServer, isClient }) {
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      vueDevtools: true,
      open: false // opens browser window automatically
    },

    // animations: 'all' --- includes all animations
    animations: [],

    ssr: {
      pwa: true,
      manualHydration: true
    },

    head: {
      titleTemplate: 'What\'s on The Menu: A Zeke and the Popo Story',
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap' },
  
      ]
    },


    pwa: {  
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#222222',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
