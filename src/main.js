import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n, { changeLocale } from './locale'
import 'element-plus/dist/index.css'
import './styles'
// import './mock'

changeLocale(store.state.locale)

const app = createApp(App)

app.use(router)
  .use(store)
  .use(ElementPlus)
  .use(i18n)
  .mount('#app')
