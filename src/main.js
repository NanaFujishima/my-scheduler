import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// v-calendarをプラグインとして使用
app.use(VCalendar, { componentPrefix: 'vc' })

app.mount('#app')
