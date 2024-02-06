// main.js

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import fullpage
import 'fullpage.js/dist/fullpage.min.css' // 引入 fullpage.js 的 CSS

const app = createApp(App)

// 使用 pinia
const pinia = createPinia()
app.use(pinia)

// app.use(createPinia())
app.use(router)

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
