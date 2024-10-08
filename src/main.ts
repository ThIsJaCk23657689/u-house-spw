import './assets/index.css'

import { createApp } from 'vue'
import App from './Main.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
