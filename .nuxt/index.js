import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_87bb4740 from 'nuxt_plugin_workbox_87bb4740' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_38eacb84 from 'nuxt_plugin_nuxticons_38eacb84' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_42857a80 from 'nuxt_plugin_plugin_42857a80' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_5de54d86 from 'nuxt_plugin_vuesocialsharingplugin_5de54d86' // Source: ./vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_ae990028 from 'nuxt_plugin_cookieuniversalnuxt_ae990028' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_googleanalytics_4d2b5d62 from 'nuxt_plugin_googleanalytics_4d2b5d62' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_axios_2d2a2f78 from 'nuxt_plugin_axios_2d2a2f78' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_elementui_72a9ed1c from 'nuxt_plugin_elementui_72a9ed1c' // Source: ../plugins/element-ui.js (mode: 'all')
import nuxt_plugin_vuelazyload_211b2937 from 'nuxt_plugin_vuelazyload_211b2937' // Source: ../plugins/vue-lazyload (mode: 'all')
import nuxt_plugin_slugify_69285c3b from 'nuxt_plugin_slugify_69285c3b' // Source: ../plugins/slugify (mode: 'all')
import nuxt_plugin_vuesession_3ffc8819 from 'nuxt_plugin_vuesession_3ffc8819' // Source: ../plugins/vue-session (mode: 'all')
import nuxt_plugin_instantSearch_5017ec38 from 'nuxt_plugin_instantSearch_5017ec38' // Source: ../plugins/instantSearch.js (mode: 'client')
import nuxt_plugin_plugin_210bb280 from 'nuxt_plugin_plugin_210bb280' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s ","title":"Swap","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"google-site-verification","content":"9nICd7bfcFZ7SaJjQGo5l_mMs_n_pXY68ZsRg6r9m2M"},{"hid":"og:site_name","name":"og:site_name","content":"Swap Store"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"ecommerce"},{"hid":"author","name":"author","content":"Jimmy"},{"hid":"description","name":"description","content":"multi-vendor ecommerce website"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"ecommerce"},{"hid":"og:description","name":"og:description","property":"og:description","content":"multi-vendor ecommerce website"}],"script":[{"src":"https:\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js","data-ad-client":"ca-pub-1017484296147530","async":true},{"src":"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.5.1\u002Fjquery.min.js"},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.5.0\u002Fjs\u002Fbootstrap.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Fjimkiarie8.nyc3.digitaloceanspaces.com\u002Fswap\u002Fsite\u002Flogo.jpg"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.c21523a3.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.d959b6.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.d959b6.png","sizes":"512x512"}],"style":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_87bb4740 === 'function') {
    await nuxt_plugin_workbox_87bb4740(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_38eacb84 === 'function') {
    await nuxt_plugin_nuxticons_38eacb84(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_42857a80 === 'function') {
    await nuxt_plugin_plugin_42857a80(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_5de54d86 === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_5de54d86(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_ae990028 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_ae990028(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_4d2b5d62 === 'function') {
    await nuxt_plugin_googleanalytics_4d2b5d62(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_2d2a2f78 === 'function') {
    await nuxt_plugin_axios_2d2a2f78(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_72a9ed1c === 'function') {
    await nuxt_plugin_elementui_72a9ed1c(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelazyload_211b2937 === 'function') {
    await nuxt_plugin_vuelazyload_211b2937(app.context, inject)
  }

  if (typeof nuxt_plugin_slugify_69285c3b === 'function') {
    await nuxt_plugin_slugify_69285c3b(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesession_3ffc8819 === 'function') {
    await nuxt_plugin_vuesession_3ffc8819(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_instantSearch_5017ec38 === 'function') {
    await nuxt_plugin_instantSearch_5017ec38(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_210bb280 === 'function') {
    await nuxt_plugin_plugin_210bb280(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
