<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {
  initializeMap,
  createMarkersAndPopups,
  filterMarkers,
  resetMarkers
} from '../js/leaflet-map'
import { onMounted, ref } from 'vue'
import { markers } from '../js/leaflet-marker'

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

onMounted(() => {
  map = initializeMap()
  createMarkersAndPopups(markers) //創建座標及彈窗
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
    <div class="banner-title first-letter-underline">{{ businessInfo[0].business_title }}</div>
  </div>

  <!-- 營業實績 title -->
  <div class="page-title">
    <span class="page-title-txt">{{ businessInfo[0].business_title }}</span>
  </div>

  <div class="page-content">
    <!-- 營業實績 內容 -->
    <div class="lg:px-20 mb-5 lg:mb-10">{{ businessInfo[0].business_txt }}</div>

    <div class="content-wrapper">
      <!-- 螢幕1024以上的下拉選單 -->
      <div class="button-wrapper">
        <div class="button-container" v-if="windowWidth > 1024">
          <button @click="filterMarkers('')">全部工程</button>
          <button @click="filterMarkers('保護電驛工程')">保護電驛工程</button>
          <button @click="filterMarkers('發電機機組保護電驛工程')">發電機機組保護電驛</button>
          <button @click="filterMarkers('電力監控系統')">電力監控系統</button>
          <button @click="filterMarkers('RCP設計組裝')">RCP設計組裝</button>
          <button @click="filterMarkers('特高壓及高壓GIS安裝測試維護保養')">特高壓及高壓GIS</button>
          <button @click="filterMarkers('電力電纜安裝工程')">電力電纜安裝工程</button>
          <button @click="filterMarkers('變電站統包工程')">變電站統包工程</button>
        </div>

        <div v-else>
          <!-- 螢幕1024以下的下拉選單 -->
          <select
            v-model="selectedOption"
            @change="filterMarkers(selectedOption)"
            class="dropdown-menu"
          >
            <option value="">全部工程</option>
            <option value="保護電驛工程">保護電驛工程</option>
            <option value="發電機機組保護電驛工程">發電機機組保護電驛</option>
            <option value="電力監控系統">電力監控系統</option>
            <option value="RCP設計組裝">RCP設計組裝</option>
            <option value="特高壓及高壓GIS安裝測試維護保養">特高壓及高壓GIS</option>
            <option value="電力電纜安裝工程">電力電纜安裝工程</option>
            <option value="變電站統包工程">變電站統包工程</option>
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
      selectedOption: '' // 新增一個選項來儲存下拉選單的值
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    filterMarkers(option) {
      // 實作過濾標記的邏輯
    }
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth <= 1024) {
        // 螢幕小於等於1024，初始化下拉選單的值
        this.selectedOption = ''
      }
    }
  }
}
</script>

<style scoped>
/* 設置地圖高度 */
#map {
  @apply h-[800px] w-[70%] z-0 rounded-xl  border-2 -ml-20 md:border-4;
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
  background-color: rgba(167, 204, 241, 0.6);
  backdrop-filter: blur(5px); /* 毛玻璃模糊效果 */
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2); /* 右和下陰影 */
}

.button-container {
  @apply flex w-full flex-col;
}

.button-container button {
  @apply px-10 py-3  text-xl  text-left;
  transition: font-weight 0.3s;
}

.button-container button:hover,
.button-container button:focus {
  @apply font-black;
}

@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .button-container button {
    @apply text-base px-5 py-3;
  }
}

@media screen and (max-width: 1024px) {
  #map {
    @apply w-full h-[800px] my-0 mx-auto;
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
