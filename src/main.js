/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from './global-components'
import utils from './utils'
import './libs'
import { createI18n } from 'vue-i18n'
import en from "./locale/en.json"
import uz from "./locale/uz.json"
import ru from "./locale/ru.json"

// SASS Theme
import './assets/sass/app.scss'

const i18n = createI18n({
  locale: localStorage.getItem('lang'),
  messages: {
    EN: en,
    UZ: uz,
    RU:ru
  }
})
const app = createApp(App)
  .use(store)
  .use(router)

globalComponents(app)
utils(app)
app.use(i18n)
app.mount('#app')
