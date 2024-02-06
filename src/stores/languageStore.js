// @/stores/languageStore.js

import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: localStorage.getItem('language') || '中'
  }),
  actions: {
    toggleLanguage(newLang, router) {
      if (this.language !== newLang) {
        this.language = newLang
        localStorage.setItem('language', newLang) // 更新本地存儲
        this.updatePathBasedOnLanguage(router)
      }
    },

    updatePathBasedOnLanguage(router) {
      const currentRoute = router.currentRoute.value
      let name = currentRoute.name
      let params = { ...currentRoute.params }
      let query = { ...currentRoute.query }

      if (this.language === 'EN') {
        name = name + 'En'
      } else {
        name = name.replace('En', '')
      }

      router.push({ name, params, query })
    }
  }
})
