// @/stores/languageStore.js

// import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: '中'
  }),
  actions: {
    // 切換語言頁面 函數
    toggleLanguage(newLang, router) {
      if (this.language !== newLang) {
        this.language = newLang
        this.updatePathBasedOnLanguage(router)
      }
    },
    // 監聽 language 變量的變化，切換中英文頁面
    // updatePathBasedOnLanguage(router) {
    //   let newPath = router.currentRoute.value.path
    //   if (this.language === 'EN' && !newPath.includes('En')) {
    //     newPath += 'En'
    //   } else if (this.language === '中' && newPath.includes('En')) {
    //     newPath = newPath.replace('En', '')
    //   }
    //   router.push(newPath)
    // }

    updatePathBasedOnLanguage(router) {
      const currentRoute = router.currentRoute.value
      let name = currentRoute.name
      let params = { ...currentRoute.params }
      let query = { ...currentRoute.query }

      // 調整路由名稱或路徑以反映語言更改
      if (this.language === 'EN') {
        // 如果是切換到英文，調整路由名稱或添加特定的標識
        name = name + 'En' // 或者其他適合您應用的方式
      } else {
        // 如果是切換回中文，移除英文標識
        name = name.replace('En', '')
      }

      // 使用更新後的名稱和原始參數和查詢導航到新路由
      router.push({ name, params, query })
    }
  }
})
