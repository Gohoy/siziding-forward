import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import VueKonva from 'vue-konva'
const app = createApp(App)

app.use(router)
app.use(VueKonva)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
