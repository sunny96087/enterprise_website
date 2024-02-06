<!-- App.vue -->

<script setup>
import { RouterView, useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/FooterView.vue'
import BackNavBar from './components/BackNavBar.vue'

const route = useRoute()

// AOS 套件初始化
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS.init()
// onMounted(() => {
//   AOS.init()
// })
onMounted(() => {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded', // AOS 應該在文件上初始化的事件名稱
    initClassName: 'aos-init', // 初始化後應用的類別
    animatedClassName: 'aos-animate', // 在動畫中應用的類
    useClassNames: false, // 如果為 true，則會在捲動時將 `data-aos` 的內容作為類別新增。
    disableMutationObserver: false, // 停用自動突變檢測（進階選項）。
    debounceDelay: 50, // 視窗調整大小時使用的 debounce 延遲（進階選項）。
    throttleDelay: 99, // 捲動頁面時使用的節流延遲（進階選項）。

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 40, // 觸發點，越小 => 越近才觸發動畫
    // delay: 0, // 值從 0 到 3000，以 50 毫秒為間隔。
    duration: 1200, // 持續時間，值從 0 到 3000，以 50 毫秒為間隔。
    easing: 'ease', // AOS 動畫的緩動效果。
    once: false, // 動畫是否應該只在向下滾動時觸發一次。
    mirror: false, // 在滾動過程中是否應該讓元素在滾出視野時產生退場動畫。
    anchorPlacement: 'top-bottom' // 定義了元素相對於視窗的位置，應觸發動畫。
  })
})
</script>

<template>
  <header class="w-full fixed z-[999]">
    <NavBar v-if="!route.meta.useBackNavBar" />
    <BackNavBar v-else />
  </header>

  <!-- <main class="px-5 sm:px-10 pb-4 sm:pb-6 grow flex flex-col"> -->
  <main class="grow flex flex-col min-h-screen">
    <RouterView />
  </main>

  <footer v-if="!route.meta.useBackNavBar">
    <Footer />
  </footer>
</template>

<style scoped lang="scss"></style>
