<!-- NavBar.vue -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

/* NOTE ========== 語言切換 i18n ========== */
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const toggleLanguage = (newLang) => {
  locale.value = newLang
  currentLanguage.value = locale.value
}

// company table data
const companyInfo = [
  {
    company_no: 1,
    company_name_tw: '喵星人樂園',
    company_name_en: 'Meow Planet Paradise',
    company_tel: '07-777777777',
    company_fax: '07-777777777',
    company_add: '貓貓鎮鎮中路51號',
    company_add_en: 'No. 51, Zhenzhong Road, Maomao Town',
    company_email: 'meowmeow@gmail.com.tw',
    company_joblink: 'https://www.1111.com.tw/corp/51350659/#c4',
    company_logo_pic: '/img/CompanyData/logo.svg',
    company_footer_pic: '/img/CompanyData/logo.svg',
    company_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

/* NOTE ========== NavBar ========== */
// NavBar 變量
const isNavOpen = ref(false)

// NavBar 內下拉選單 變量
const areaList = ref(false)

// NavBar 內 about 下拉選單 變量
const aboutList = ref(false)

// NavBar 開關，關閉時也關閉下拉選單
function toggleNav() {
  isNavOpen.value = !isNavOpen.value
  areaList.value = false
  aboutList.value = false
}

const route = useRoute()

// 監聽 route 變化，當路由發生變化時關閉 NavBar
watch(route, () => {
  isNavOpen.value = false
})

// 監聽，當路由發生變化時滾動到頂部
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  }
)

</script>


<template>
  <main class="flex px-5 sm:px-10 py-4 sm:py-6 items-center justify-between">
    <RouterLink to="/" class="logo">
      <div>
        <img src="/img/CompanyData/logo.svg" alt="logo" />
      </div>
    </RouterLink>

    <div class="menu cursor-pointer" @click="toggleNav">
      <svg
        class="icon-blueDark-hover"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H40M8 24H40M8 36H40"
          stroke="var(--color-blue)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div v-show="isNavOpen" class="menu-open">
      <div class="flex justify-end sm:px-0 pt-10 sm:pt-0">
        <!-- company_logo_pic -->
        <div class="inline-flex flex-col gap-3 items-center w-[50vw] sm:w-4/5 lg:w-1/2">
          <img src="/img/CompanyData/logo.svg" class="w-full" alt="logo" />
        </div>
      </div>

      <!-- * 中間的分隔線 -->
      <div class="hidden sm:block blue-line"></div>

      <nav class="inline-flex flex-col gap-5 items-left text-2xl">
        <!-- * 切換語言 -->
        <div class="flex gap-3 text-base">
          <button
            @click="toggleLanguage('zh-TW')"
            :class="{ 'selected-language': currentLanguage === 'zh-TW' }"
            class="btn-circle"
          >
            中
          </button>
          <button
            @click="toggleLanguage('en')"
            :class="{ 'selected-language': currentLanguage === 'en' }"
            class="btn-circle"
          >
            EN
          </button>
        </div>
        <!-- 中文導航欄內容 -->
        <RouterLink to="/" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">{{
            $t('NavBar.service')
          }}</span>
        </RouterLink>

        <!-- about -->
        <RouterLink to="/about" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">{{
            $t('NavBar.about')
          }}</span>
        </RouterLink>

        <RouterLink to="/business" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">{{
            $t('NavBar.business')
          }}</span>
        </RouterLink>
        <RouterLink to="/news" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">{{
            $t('NavBar.news')
          }}</span>
        </RouterLink>
        <RouterLink to="/contact" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">{{
            $t('NavBar.contact')
          }}</span>
        </RouterLink>

        <div class="cursor-pointer triangle-hover custom-txt-gap4" @click="areaList = !areaList">
          <span class="custom-triangle block">▶</span>
          <span class="font-bold">{{ $t('NavBar.manage') }}</span>
        </div>

        <!-- 企業專區內選項 -->
        <div class="inline-flex flex-col gap-5 items-left text-xl ml-4 sm:ml-8" v-show="areaList">
          <RouterLink to="/backendLogin" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span class="font-bold">{{ $t('NavBar.backend') }}</span>
          </RouterLink>
        </div>
      </nav>

      <div class="fixed right-5 sm:right-8 top-5 cursor-pointer w-12 sm:w-16" @click="toggleNav">
        <!-- <img src="/img/x.svg" alt="x" /> -->
        <svg
          class="icon-blueDark-hover"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 60L60 20M20 20L60 60"
            stroke="var(--color-blue)"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.menu-open {
  @apply fixed inset-0 flex flex-col sm:grid items-center sm:justify-center py-8 sm:py-20 gap-5 sm:gap-10 lg:gap-20 px-5 overflow-y-auto sm:overflow-auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  grid-template-columns: 1fr 1px 1fr; /* 定義三列的佈局 */
  z-index: 999;
}

/* navbar 文字 item 排版 flex items-center gap-4 */
.custom-txt-gap4 {
  @apply flex items-center gap-4 font-bold;
}

/* navbar 文字選中樣式 */
.link-active {
  color: var(--color-blue) !important;
}

.custom-triangle {
  @apply text-lg;
  color: var(--color-blue);
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  /* transition: transform 0.3s cubic-bezier(.63,1.35,.17,-0.04);  */
}

.triangle-hover:hover {
  color: var(--color-blue);
}

.triangle-hover:hover > .custom-triangle {
  transform: translateX(10px); /* 懸停 RouterLink 時向右移動 */
}
</style>
