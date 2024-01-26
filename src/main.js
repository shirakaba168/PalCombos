import { createApp } from 'vue'
import App from './App.vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
          mdi,
      },
  },
  theme: {
    themes: {
      light: {
        colors: {
            primary: '#69c',
            secondary: '#def',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')