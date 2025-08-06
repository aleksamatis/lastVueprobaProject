import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg'

// Import global CSS
import './assets/global.css'

const app = createApp(App)

app.component('inline-svg', InlineSvg)

app.use(router)

app.mount('#app')
