<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {
  initializeMap,
  createMarkersAndPopups,
  filterMarkers,
  resetMarkers
} from '../js/leaflet-map-en'
import { onMounted, ref } from 'vue'
import { markers } from '../js/leaflet-marker-en'

//設定banner
const businessInfo = [
  {
    business_no: 1,
    business_title_en: 'Operational Achievements',
    business_title_pic: '/img/BusinessView/banner.png',
    business_txt_en:
      'Over the years, we have undertaken power system-related projects for large enterprises nationwide, including but not limited to Taiwan Power Company\'s various divisions, China Steel Corporation, Formosa Plastics Group, CPC Corporation, and more. We have a multitude of service cases from north to south, all of which aim for "high quality," "high standards," and "high professionalism" in service, with customer satisfaction as our primary goal. We uphold professional design and excellent construction practices, actively striving to complete projects to our clients’ satisfaction. Furthermore, all of our projects are carried out by our in-house engineering team, which has established a high level of coordination and expertise in teamwork and personnel management.'
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
    <div class="banner-title first-letter-underline">{{ businessInfo[0].business_title_en }}</div>
  </div>

  <div class="page-content">
    <!-- 營業實績 title -->
    <div class="page-title">
      <span class="page-title-txt">{{ businessInfo[0].business_title_en }}</span>
    </div>
    <!-- 營業實績 內容 -->
    <div class="lg:px-20 mb-5 lg:mb-10">{{ businessInfo[0].business_txt_en }}</div>

    <div class="content-wrapper">
      <!-- 螢幕1024以上的下拉選單 -->
      <div class="button-wrapper">
        <div class="button-container" v-if="windowWidth > 1024">
          <button @click="filterMarkers('')">All projects.</button>
          <button @click="filterMarkers('保護電驛工程')">Protection Relays.</button>
          <button @click="filterMarkers('Generator Unit Protection Relay (RCP) Project ')">
            Generator Protection Relays.
          </button>
          <button @click="filterMarkers('電力監控系統')">SCADA System.</button>
          <button @click="filterMarkers('RCP Design and Assembly ')">
            Relay and Control Panel Design & Assembly.
          </button>
          <button @click="filterMarkers('特高壓及高壓GIS安裝測試維護保養')">HV Swithgear.</button>
          <button @click="filterMarkers('Power Cable Installation Project ')">Power Cables.</button>
          <button @click="filterMarkers('Substation EPC Project')">Substations</button>
        </div>

        <div v-else>
          <!-- 螢幕1024以下的下拉選單 -->
          <select
            v-model="selectedOption"
            @change="filterMarkers(selectedOption)"
            class="dropdown-menu"
          >
            <option value="">All projects.</option>
            <option value="保護電驛工程">Protection Relays.</option>
            <option value="Generator Unit Protection Relay (RCP) Project ">
              Generator Protection Relays.
            </option>
            <option value="電力監控系統">SCADA System.</option>
            <option value="RCP Design and Assembly ">
              Relay and Control Panel Design & Assembly.
            </option>
            <option value="特高壓及高壓GIS安裝測試維護保養">HV Swithgear.</option>
            <option value="Power Cable Installation Project ">Power Cables.</option>
            <option value="Substation EPC Project">Substations</option>
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
  border-color: #497ac2;
  float: right;
  box-shadow: 3px 3px 3.6px 0 rgba(0, 0, 0, 0.2); /* 右和下陰影 */
}

.content-wrapper {
  @apply flex justify-center;
}

.button-wrapper {
  @apply border-2 rounded-xl w-[20%] h-[100%] inline-block z-10 mt-6 py-3;
  border-color: #497ac2;
  background-color: rgba(167, 204, 241, 0.6);
  backdrop-filter: blur(5px); /* 毛玻璃模糊效果 */
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2); /* 右和下陰影 */
}

.button-container {
  @apply flex w-full flex-col;
}

.button-container button {
  @apply px-8 py-3  text-xl  text-left;
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

.dropdown-menu {
  @apply px-2 py-2;
  background-color: transparent;
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
    @apply w-full;
  }
}
</style>
