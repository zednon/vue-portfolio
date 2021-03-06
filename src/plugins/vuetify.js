import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VLayout,
  },
})

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#F09C23',
        accent: '#9E8371',
        accent2: 'accent2',
      },
    },
  },
})
