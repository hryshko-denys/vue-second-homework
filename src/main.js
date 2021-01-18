import { createApp, h } from 'vue'
import App from './App.vue'
import './theme.css'

import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp({
  render: () => h(App)
})

app.use(VueAxios, axios)

app.mount('#app')
