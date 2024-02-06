<!-- FooterView.vue -->
<script setup>
import { watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 引入 Pinia languageStore
import { useLanguageStore } from '@/stores/languageStore'

// 公司資料
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
    company_logo_pic: '圖片.png',
    company_footer_pic: '/img/CompanyData/company_footer_pic.svg'
  }
]

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

// 監聽，當路由發生變化時滾動到頂部
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- * 中文導航欄內容 -->
      <nav
        v-if="language === '中'"
        class="flex flex-col items-center gap-8 lg:gap-0 lg:flex-row justify-center"
      >
        <div class="flex">
          <div class="flex flex-col gap-5 pr-12 sm:pr-20 lg:px-20 lg:border-l border-neutral-600">
            <RouterLink to="/" class="link-txt">服務項目</RouterLink>
            <RouterLink to="/about" class="link-txt">關於誠諾</RouterLink>
            <RouterLink to="/license" class="link-txt">專業證照</RouterLink>
            <RouterLink to="/organize" class="link-txt">組織架構</RouterLink>
          </div>

          <div
            class="flex flex-col gap-5 pl-12 sm:pl-20 lg:px-20 border-l lg:border-r border-neutral-600"
          >
            <RouterLink to="/business" class="link-txt">營業實績 </RouterLink>
            <RouterLink to="/news" class="link-txt">最新消息</RouterLink>
            <RouterLink to="/contact" class="link-txt">聯絡我們</RouterLink>
            <a :href="companyInfo[0].company_joblink" target="_blank" class="link-txt">人力招募</a>
          </div>
        </div>

        <!-- 公司 data -->
        <div class="flex flex-col gap-8 lg:gap-5 lg:ml-20">
          <div class="flex flex-col sm:flex-row gap-3 items-left sm:items-center">
            <div class="w-[110px] h-[30.6px]">
              <img class="pic" :src="companyInfo[0].company_footer_pic" alt="company_footer_pic" />
            </div>
            <div class="text-xl font-medium">{{ companyInfo[0].company_name_tw }}</div>
          </div>

          <!-- 聯絡資訊 & 切換語言 -->

          <div class="flex flex-col gap-4 sm:flex-row justify-between sm:items-end">
            <!-- 聯絡資訊 -->

            <div class="flex flex-col gap-2 contact">
              <div class="tel contact-item">{{ companyInfo[0].company_tel }}</div>
              <div class="fax contact-item">{{ companyInfo[0].company_fax }}</div>
              <div class="add contact-item">{{ companyInfo[0].company_add }}</div>
              <a :href="'mailto:' + companyInfo[0].company_email" class="email contact-item">{{
                companyInfo[0].company_email
              }}</a>
              <!-- <div class="email">{{ companyInfo[0].company_email }}</div> -->
            </div>

            <!-- 切換語言 -->

            <div class="flex sm:flex-col gap-3 text-base text-black">
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
          </div>
        </div>
      </nav>

      <!-- * 英文導航欄內容 -->
      <nav v-else class="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-center">
        <div class="flex flex-col gap-5 sm:gap-0 sm:flex-row px-10 md:px-0 sm:self-center">
          <div
            class="flex flex-col gap-5 sm:pr-10 md:pr-20 xl:px-20 xl:border-l border-neutral-600"
          >
            <RouterLink to="/En" class="link-txt">Our Services</RouterLink>
            <RouterLink to="/aboutEn" class="link-txt">About CHENG-NUO</RouterLink>
            <RouterLink to="/licenseEn" class="link-txt">Professional license</RouterLink>
            <RouterLink to="/organizeEn" class="link-txt">Capital structure</RouterLink>
          </div>

          <div
            class="flex flex-col gap-5 sm:pl-10 md:pl-20 xl:px-20 sm:border-l xl:border-r border-neutral-600"
          >
            <RouterLink to="/businessEn" class="link-txt">Operational Achievements </RouterLink>
            <RouterLink to="/newsEn" class="link-txt">News & Events</RouterLink>
            <RouterLink to="/contactEn" class="link-txt">Contact Us</RouterLink>
          </div>
        </div>

        <!-- 公司 data -->
        <div class="flex flex-col gap-8 xl:gap-5 xl:ml-20 px-10 md:px-20 lg:px-52 xl:px-0">
          <div class="flex flex-col gap-3 items-left">
            <div class="w-[110px] h-[30.6px]">
              <img class="pic" :src="companyInfo[0].company_footer_pic" alt="company_footer_pic" />
            </div>
            <div class="text-xl font-medium">{{ companyInfo[0].company_name_en }}</div>
          </div>

          <!-- 聯絡資訊 & 切換語言 -->

          <div class="flex flex-col gap-4 sm:flex-row justify-between sm:items-end">
            <!-- 聯絡資訊 -->

            <div class="flex flex-col gap-2 contact">
              <div class="tel contact-item">{{ companyInfo[0].company_tel }}</div>
              <div class="fax contact-item">{{ companyInfo[0].company_fax }}</div>
              <div class="add contact-item">
                <div class="max-w-[200px] sm:max-w-xs break-words">
                  {{ companyInfo[0].company_add_en }}
                </div>
              </div>
              <a :href="'mailto:' + companyInfo[0].company_email" class="email contact-item">{{
                companyInfo[0].company_email
              }}</a>
              <!-- <div class="email">{{ companyInfo[0].company_email }}</div> -->
            </div>

            <!-- 切換語言 -->

            <div class="flex sm:flex-col gap-3 text-base text-black">
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
          </div>
        </div>
      </nav>
    </div>

    <!-- 版權 -->
    <div class="copyright">
      Copyright © 2023
      <!-- <span class="text-blueLight font-medium"></span> -->
      CNETC. All Rights Reserved
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #323232;

  .footer-content {
    @apply mx-auto py-10 sm:py-14 px-5 text-white;
  }

  .copyright {
    @apply text-white text-center py-3 text-xs font-light;
    background: rgba(0, 0, 0, 0.2);
    color: #dfdfdf;
  }

  .link-txt {
    @apply text-gray-200 text-xl font-medium tracking-widest;
  }

  .contact > .contact-item {
    @apply inline-flex items-center text-gray-200;
  }

  .contact > .contact-item::before {
    @apply w-5 h-5 inline-block mr-2 bg-cover bg-center;
    content: '';
  }

  .tel::before {
    background-image: url('/img/FooterView/phone.svg');
  }

  .fax::before {
    background-image: url('/img/FooterView/printer.svg');
  }

  .add::before {
    background-image: url('/img/FooterView/location.svg');
  }

  .email::before {
    background-image: url('/img/FooterView/mail.svg');
  }
}
</style>
