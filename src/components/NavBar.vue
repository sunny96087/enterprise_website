<!-- NavBar.vue -->
<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 引入 Pinia store
import { useLanguageStore } from '@/stores/languageStore'

// company table data
const companyInfo = [
  {
    company_no: 1,
    company_name_tw: '誠諾工程技術股份有限公司',
    company_name_en: 'CHENG-NUO ENGINEERING TECHNOLOGY CO., LTD.',
    company_tel: '07-7223777',
    company_fax: '07-7229777',
    company_add: '高雄市鳳山區武林路51號',
    company_add_en: 'No. 51, Wulin Rd., Fengshan Dist., Kaohsiung City , Taiwan (R.O.C.)',
    company_email: 'cnetcsales@mx.cnetc.tw',
    company_joblink: 'https://www.1111.com.tw/corp/51350659/#c4',
    company_logo_pic: '/img/CompanyData/logo.svg',
    company_footer_pic: '/img/CompanyData/company_footer_pic.svg',
    company_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

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

const router = useRouter()
const route = useRoute()

// 使用 Pinia languageStore 變量
const languageStore = useLanguageStore()

// 切換語言頁面 函數
const toggleLanguage = (newLang) => {
  languageStore.toggleLanguage(newLang, router)
}

// computed 變量反映 Pinia store 中的語言狀態
const language = computed(() => languageStore.language)

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
    <RouterLink :to="language === '中' ? '/' : '/en'" class="logo">
      <div>
        <!-- company_logo_pic -->
        <img :src="companyInfo[0].company_logo_pic" alt="cnetc_logo" />
      </div>
    </RouterLink>

    <div class="menu cursor-pointer" @click="toggleNav">
      <!-- <img src="/img/menu.svg" alt="menu" /> -->
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
        <!-- <img src="/img/CompanyData/logo_companyname.svg" alt="logo_companyname" /> -->
        <div class="inline-flex flex-col gap-3 items-center">
          <img src="/img/CompanyData/logo.svg" class="w-[215px] h-[52px]" alt="cnetc_logo" />
          <div class="inline-flex flex-col items-center">
            <h1
              class="text-sky-700 text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-bold"
            >
              {{ companyInfo[0].company_name_tw }}
            </h1>
            <h1
              class="text-sky-700 text-[10px] sm:text-[14px] lg:text-base font-medium text-center"
            >
              {{ companyInfo[0].company_name_en }}
            </h1>
          </div>
        </div>
      </div>

      <!-- * 中間的分隔線 -->
      <div class="hidden sm:block blue-line"></div>

      <!-- * tw -->
      <nav v-if="language === '中'" class="inline-flex flex-col gap-5 items-left text-2xl">
        <!-- 切換語言 -->
        <div class="flex gap-3 text-base">
          <button
            @click="toggleLanguage('中')"
            :class="{ 'selected-language': language === '中' }"
            class="btn-circle"
          >
            中
          </button>
          <button
            @click="toggleLanguage('EN')"
            :class="{ 'selected-language': language === 'EN' }"
            class="btn-circle"
          >
            EN
          </button>
        </div>
        <!-- 中文導航欄內容 -->
        <RouterLink to="/" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">服務項目</span>
        </RouterLink>

        <!-- about -->
        <div class="cursor-pointer triangle-hover custom-txt-gap4" @click="aboutList = !aboutList">
          <span class="custom-triangle block">▶</span>關於誠諾
        </div>

        <div class="inline-flex flex-col gap-5 items-left text-xl ml-4 sm:ml-8" v-show="aboutList">
          <RouterLink to="/about" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">關於誠諾</span>
          </RouterLink>

          <RouterLink to="/license" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">專業證照</span>
          </RouterLink>

          <RouterLink to="/organize" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">組織架構</span>
          </RouterLink>
        </div>

        <RouterLink to="/business" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">營業實績</span>
        </RouterLink>
        <RouterLink to="/news" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">最新消息</span>
        </RouterLink>
        <RouterLink to="/contact" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">聯絡我們</span>
        </RouterLink>
        <a href="https://www.1111.com.tw/corp/51350659/#c4" target="_blank">
          <div class="cursor-pointer triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>人力招募
          </div>
        </a>
        <div class="cursor-pointer triangle-hover custom-txt-gap4" @click="areaList = !areaList">
          <span class="custom-triangle block">▶</span>企業專區
        </div>

        <!-- 企業專區內選項 -->
        <div class="inline-flex flex-col gap-5 items-left text-xl ml-4 sm:ml-8" v-show="areaList">
          <a href="https://www.cnetc.tw/admin/login" target="_blank">
            <div class="cursor-pointer triangle-hover custom-txt-gap4">
              <span class="custom-triangle block">▶</span>員工專區
            </div>
          </a>

          <a href="https://www.cnetc.tw/html/case_area_login" target="_blank">
            <div class="cursor-pointer triangle-hover custom-txt-gap4">
              <span class="custom-triangle block">▶</span>鵬鼎專區
            </div>
          </a>

          <RouterLink to="/backendLogin" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span class="font-bold">後台管理</span>
          </RouterLink>
        </div>
      </nav>

      <!-- * en -->
      <nav v-else class="inline-flex flex-col gap-5 items-left text-xl sm:text-2xl">
        <!-- 切換語言 -->
        <div class="flex gap-3 text-base">
          <button
            @click="toggleLanguage('中')"
            :class="{ 'selected-language': language === '中' }"
            class="btn-circle"
          >
            中
          </button>
          <button
            @click="toggleLanguage('EN')"
            :class="{ 'selected-language': language === 'EN' }"
            class="btn-circle"
          >
            EN
          </button>
        </div>
        <!-- 英文導航欄內容 -->
        <RouterLink to="/En" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">Our Services</span>
        </RouterLink>

        <!-- about -->
        <div class="cursor-pointer triangle-hover custom-txt-gap4" @click="aboutList = !aboutList">
          <span class="custom-triangle block">▶</span>About CHENG-NUO
        </div>

        <div class="inline-flex flex-col gap-5 items-left text-xl ml-4 sm:ml-8" v-show="aboutList">
          <RouterLink to="/aboutEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">About CHENG-NUO</span>
          </RouterLink>

          <RouterLink to="/licenseEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">Professional license</span>
          </RouterLink>

          <RouterLink to="/organizeEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
            <span class="custom-triangle block">▶</span>
            <span :class="{ 'link-active': isActive }" class="font-bold">Capital structure</span>
          </RouterLink>
        </div>

        <RouterLink to="/businessEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold"
            >Operational Achievements</span
          >
        </RouterLink>
        <RouterLink to="/newsEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">News & Events</span>
        </RouterLink>
        <RouterLink to="/contactEn" v-slot="{ isActive }" class="triangle-hover custom-txt-gap4">
          <span class="custom-triangle block">▶</span>
          <span :class="{ 'link-active': isActive }" class="font-bold">Contact Us</span>
        </RouterLink>
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
