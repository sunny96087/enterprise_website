<script setup>
// test
const aboutInfo = [
  {
    about_no: 1,
    about_title: '關於我們',
    about_title_pic: '/img/AboutView/banner.png',
    about_block1_pic: '/img/AboutView/about_pic1.jpeg',
    about_block1_txt1:
      '歡迎來到喵喵咖啡廳，我們的小天地自2006年開始，不僅是一間咖啡廳，更是城市中的一片貓咪樂土。我們致力於為每位貓愛好者提供一個放鬆、舒適的空間，同時享受我們精心烘焙的咖啡和自家製作的點心。',
    about_block1_txt2:
      '我們的喵星人由專業團隊照料，確保它們健康、快樂。同時，我們也重視顧客的體驗，提供各種互動活動，讓您與貓咪建立特別的連結。在這裡，每個角落都充滿了貓咪的足跡和歡笑。',
    about_block2_pic: '/img/AboutView/about_pic2.jpeg',
    about_block2_txt1:
      '我們的團隊相信，喵喵咖啡廳不僅僅是一個商業空間，它是一個能夠帶給人們幸福感的地方。我們鼓勵員工展現他們對貓咪和咖啡的熱愛，並將這份熱情傳遞給每一位顧客。',
    about_block2_txt2:
      '喵喵咖啡廳更像是一個大家庭。我們不僅關心員工的專業成長，也關懷他們的個人福祉。我們舉辦定期的聚餐和旅行，讓員工及其家庭都能感受到團隊的溫暖和關懷。'
  }
]

// 組織資訊數據
const organizeInfo = [
  {
    organize_no: 1,
    trend_txt:
      '"以真誠待客、以信守約" 是我們貓貓咖啡廳的經營理念，我們視顧客和合作伙伴為咖啡廳的珍貴夥伴。這種對品質與服務承諾的堅持是我們持續成長的動力，並且在過去三年中，我們的營業額有顯著的增長。這不僅反映了我們在貓咪愛好者社群中獲得的高度肯定，也顯示了我們對提供獨特咖啡體驗和貓咪互動樂趣的承諾得到市場的認可。'
  }
]

// 引入必要的 Vue 和 Chart.js 庫
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

// 營業額圖表設定
const chartCanvas = ref(null)
const data = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: '',
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
      data: [3, 3, 5, 6, 7, 9, 12]
    }
  ]
}

// 填充背景色和邊框色
for (let i = 0; i < data.datasets[0].data.length; i++) {
  const value = data.datasets[0].data[i]
  const color = value > 11 ? '#eaa86b' : '#57a6d0'
  data.datasets[0].backgroundColor.push(color)
  data.datasets[0].borderColor.push(color)
}

// 數據填充和選項設定
const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

// 圖表掛載
onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data,
    options
  })
})

// 團隊人數圖表設定
const lineChart = ref(null)
const lineData = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: '',
      data: [1, 2, 2, 4, 5, 7, 10],
      backgroundColor: '#57a6d0',
      borderColor: '#57a6d0',
      borderWidth: 2,
      fill: false
    }
  ]
}

// 數據填充和選項設定
const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
}

// 圖表掛載
onMounted(() => {
  const ctx = lineChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: lineData,
    options: lineOptions
  })
})
</script>

<template>
  <div class="about">
    <!-- banner -->
    <div class="banner">
      <div
        class="bg-pic"
        :style="{ backgroundImage: 'url(' + aboutInfo[0].about_title_pic + ')' }"
      ></div>
      <div class="banner-overlay"></div>
      <div class="banner-title first-letter-underline">{{ aboutInfo[0].about_title }}</div>
    </div>

    <!-- title + animate -->
    <div class="page-title animate__animated animate__flipInX">
      <span class="page-title-txt">{{ aboutInfo[0].about_title }}</span>
    </div>

    <div class="page-content">
      <!-- block1 -->
      <div class="block1">
        <!-- animate -->
        <div class="block1-pic pic-card animate__animated animate__fadeIn">
          <div
            class="bg-pic rounded-xl"
            :style="{ backgroundImage: 'url(' + aboutInfo[0].about_block1_pic + ')' }"
          ></div>
        </div>

        <!-- txt + animate -->
        <div class="block-txt block1-txt" data-aos="fade-right">
          <div class="txt1">{{ aboutInfo[0].about_block1_txt1 }}</div>
          <div class="txt1">{{ aboutInfo[0].about_block1_txt2 }}</div>
        </div>
      </div>

      <!-- block2 -->
      <div class="block2">
        <div class="block2-pic pic-card" data-aos="zoom-out-right">
          <!-- animate -->
          <div
            class="bg-pic2"
            :style="{ backgroundImage: 'url(' + aboutInfo[0].about_block2_pic + ')' }"
          ></div>
        </div>

        <!-- txt + animate -->
        <div class="block-txt block2-txt" data-aos="fade-left">
          <div class="txt1">{{ aboutInfo[0].about_block2_txt1 }}</div>
          <div class="txt1">{{ aboutInfo[0].about_block2_txt2 }}</div>
        </div>
      </div>

      <!-- 成長趨勢 title + animate -->
      <div class="page-title" data-aos="fade-up">
        <span class="page-title-txt">成長趨勢</span>
      </div>

      <!-- 成長趨勢 內容 + animate -->
      <div class="lg:px-20 mb-5 lg:mb-10 md:text-lg" data-aos="fade-up">
        {{ organizeInfo[0].trend_txt }}
      </div>

      <!-- animate -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-10" data-aos="fade-up">
        <!-- chart 1 -->
        <div class="growth-box">
          <h3 class="text-2xl font-semibold text-center mb-2">貓貓成長趨勢</h3>
          <canvas ref="chartCanvas" width="854" height="427"></canvas>
          <p class="text-right text-gray-400 mt-2">(單位：貓)</p>
        </div>

        <!-- chart 2 -->
        <div class="growth-box">
          <h3 class="text-2xl font-semibold text-center mb-2">團隊人數成長趨勢</h3>
          <canvas ref="lineChart" width="854" height="427"></canvas>
          <p class="text-right text-gray-400 mt-2">(單位：人)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block1 {
  @apply flex flex-col lg:flex-row-reverse lg:gap-8 lg:items-center;
}
.block1-pic {
  @apply w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[54vh];

  .bg-pic {
    @apply h-full;
  }
}

.block-txt {
  @apply w-full lg:w-1/2 lg:text-lg flex flex-col gap-4 py-5 px-3;
  letter-spacing: 1.4px;
  line-height: 1.7;
}

.block2 {
  @apply flex flex-col lg:flex-row gap-8 items-center mt-10 lg:mt-20;

  .block-txt {
    @apply w-full lg:w-1/2;
  }
}
.block2-pic {
  @apply relative w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[54vh] object-cover overflow-hidden;
}

.bg-pic2 {
  @apply w-full h-0 bg-cover bg-center;
  padding-top: 100%;
}
</style>
