// main.js

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import zhTW from './i18n/zh-TW'
import en from './i18n/en'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh-TW', // 設置默認語言
  fallbackLocale: 'zh-TW', // 設置備用語言
  messages: {
    'zh-TW': zhTW,
    en: en
  }
})

const app = createApp(App)

// 使用 pinia
const pinia = createPinia()
app.use(pinia)

// app.use(createPinia())
app.use(router)
app.use(i18n)

// 使 textarea 自己長高
const adjustHeight = (el) => {
  if (!el) return
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
}

app.directive('autogrow', {
  mounted(el) {
    el.addEventListener('input', () => adjustHeight(el))
    requestAnimationFrame(() => adjustHeight(el))
  },
  unmounted(el) {
    el.removeEventListener('input', () => adjustHeight(el))
  }
})

// Animate.css
import 'animate.css'

app.mount('#app')
