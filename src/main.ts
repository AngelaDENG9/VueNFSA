import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
=======

const app = createApp(App)

app.use(createPinia())
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
app.use(router)

app.mount('#app')
