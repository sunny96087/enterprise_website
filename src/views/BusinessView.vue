<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {
  initializeMap,
  createMarkersAndPopups,
  filterMarkers,
  resetMarkers
} from '../js/leaflet-map'
import { onMounted, ref, watch } from 'vue'
import { markers } from '../js/leaflet-marker'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
//設定banner
const businessInfo = [
  {
    business_no: 1,
    business_title: '營業實績',
    business_title_pic: '/img/BusinessView/banner.png',
    business_txt:
      '「歷年來承攬全國各大企業電力系統相關工程，如：台電各縣市供電處、中鋼鋁業、台塑、中油等，由北至南皆有許多本公司服務案例，並且各項工程皆以「高品質」、「高標準」、「高專業」的服務、客戶滿意為目標，秉持專業的設計、優良的施工，主動積極完成客戶所託，另外所有工程皆由本公司內部工程團隊施工，在團隊合作及人員控管上有一定的默契及水準。'
  }
]

let map = null
const currentFilter = ref('')

onMounted(() => {
  map = initializeMap()
  createMarkersAndPopups(markers, locale.value)
})

const handleFilter = (option) => {
  currentFilter.value = option
  filterMarkers(option, locale.value)
}

// 監聽語言變化
watch(locale, (newLocale) => {
  filterMarkers(currentFilter.value, newLocale)
})
</script>

<template>
  <!-- banner -->
  <div class="banner">
    <div
      class="bg-pic"
      :style="{ backgroundImage: 'url(' + businessInfo[0].business_title_pic + ')' }"
    ></div>
    <div class="banner-overlay"></div>
    <div class="banner-title first-letter-underline">{{ t('BusinessView.business_title') }}</div>
  </div>

  <!-- 營業實績 title -->
  <div class="page-title">
    <span class="page-title-txt">{{ t('BusinessView.business_title') }}</span>
  </div>

  <div class="page-content">
    <!-- 營業實績 內容 -->
    <div class="lg:px-20 mb-5 lg:mb-10">{{ t('BusinessView.business_txt') }}</div>

    <div class="content-wrapper">
      <!-- 螢幕1024以上的下拉選單 -->
      <div class="button-wrapper">
        <div class="button-container" v-if="windowWidth > 1024">
          <button @click="handleFilter('')" :class="{ 'button-txt-focus': currentFilter === '' }">
            {{ t('BusinessView.all_stores') }}
          </button>
          <button
            @click="handleFilter('貓咪主題')"
            :class="{ 'button-txt-focus': currentFilter === '貓咪主題' }"
          >
            {{ t('BusinessView.cat_cafe') }}
          </button>
          <button
            @click="handleFilter('寵物友善')"
            :class="{ 'button-txt-focus': currentFilter === '寵物友善' }"
          >
            {{ t('BusinessView.pet_friendly') }}
          </button>
          <button
            @click="handleFilter('貓咪收容')"
            :class="{ 'button-txt-focus': currentFilter === '貓咪收容' }"
          >
            {{ t('BusinessView.cat_shelter') }}
          </button>
          <button
            @click="handleFilter('貓咪美容')"
            :class="{ 'button-txt-focus': currentFilter === '貓咪美容' }"
          >
            {{ t('BusinessView.cat_salon') }}
          </button>
          <button
            @click="handleFilter('寵物用品')"
            :class="{ 'button-txt-focus': currentFilter === '寵物用品' }"
          >
            {{ t('BusinessView.pet_shop') }}
          </button>
        </div>

        <div v-else>
          <!-- 螢幕1024以下的下拉選單 -->
          <select
            v-model="selectedOption"
            @change="handleFilter(selectedOption)"
            class="dropdown-menu"
          >
            <option value="">{{ t('BusinessView.all_stores') }}</option>
            <option value="貓咪主題">{{ t('BusinessView.cat_cafe') }}</option>
            <option value="寵物友善">{{ t('BusinessView.pet_friendly') }}</option>
            <option value="貓咪收容">{{ t('BusinessView.cat_shelter') }}</option>
            <option value="貓咪美容">{{ t('BusinessView.cat_salon') }}</option>
            <option value="寵物用品">{{ t('BusinessView.pet_shop') }}</option>
          </select>
        </div>
      </div>

      <!-- 地圖 -->
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      selectedOption: ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth <= 1024) {
        this.selectedOption = ''
      }
    }
  }
}
</script>

<style scoped>
/* 設置地圖高度 */
#map {
  @apply h-[600px] w-[70%] z-0 rounded-xl  border-2 -ml-20 md:border-4;
  border-color: var(--color-blue);
  float: right;
  box-shadow: 3px 3px 3.6px 0 rgba(0, 0, 0, 0.2); /* 右和下陰影 */
}

.content-wrapper {
  @apply flex justify-center;
}

.button-wrapper {
  @apply border-2 rounded-xl w-[20%] h-[100%] inline-block z-10 mt-6 py-3;
  border-color: var(--color-blue);
  background-color: rgba(241, 209, 167, 0.6);
  backdrop-filter: blur(5px); /* 毛玻璃模糊效果 */
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2); /* 右和下陰影 */
}

.button-container {
  @apply flex w-full flex-col;
}

.button-container button {
  @apply px-10 py-3 text-xl text-left transition-all duration-300 hover:font-black;
}

.button-txt-focus {
  @apply font-black;
}

select:focus-visible {
  outline: transparent;
}

@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .button-container button {
    @apply text-base px-5 py-3;
  }
}

@media screen and (max-width: 1024px) {
  #map {
    @apply w-full h-[500px] my-0 mx-auto;
    float: none;
  }
  .content-wrapper {
    @apply flex my-0 mx-5;
    flex-direction: column;
  }
  .button-wrapper {
    @apply mb-6;
  }

  .button-wrapper {
    @apply w-full p-2;
  }

  .dropdown-menu {
    @apply px-2 py-2 w-full;
    background-color: transparent;
  }
}
</style>
