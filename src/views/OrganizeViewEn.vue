<script setup>
// 組織資訊數據
const organizeInfo = [
  {
    organize_no: 1,
    organize_title_en: 'Organization Chart',
    organize_title_pic: '/img/OrganizeView/banner.png',
    organize_pic: '/img/OrganizeView/Organization_pic_en.png',
    trend_txt_en:
      'Our operating philosophy of "Founded on Honesty. Promise Strong Policy" is based on the belief that our customers and suppliers are our partners. This commitment to sustainable business is the key to our success, leading to year-on-year growth in our performance. In particular, our revenue has seen a "significant increase in the past three years," showcasing the high praise and recognition our company\'s engineering achievements have received in the industry.'
  }
]

// 引入必要的 Vue 和 Chart.js 庫
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

// 營業額圖表設定
const chartCanvas = ref(null)
const data = {
  labels: [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
  ],
  datasets: [
    {
      label: '',
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
      data: [
        143.5, 650.2, 980.7, 2241, 4287.5, 3777.5, 4439.1, 4430.4, 5226.5, 4517.8, 8212.6, 8637,
        13018.5, 14778.4, 15288.5, 28e3, 32216.5, 50890.3
      ]
    }
  ]
}

// 填充背景色和邊框色
for (let i = 0; i < data.datasets[0].data.length; i++) {
  const value = data.datasets[0].data[i]
  const color = value > 50000 ? '#F8C471' : '#007cc2'
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
  labels: [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
  ],
  datasets: [
    {
      label: '',
      data: [1, 1, 8, 11, 13, 17, 20, 27, 26, 25, 28, 28, 33, 33, 42, 62, 74, 66],
      backgroundColor: '#007cc2',
      borderColor: '#007cc2',
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
  <!-- banner -->
  <div class="banner">
    <div
      class="bg-pic"
      :style="{ backgroundImage: 'url(' + organizeInfo[0].organize_title_pic + ')' }"
    ></div>
    <div class="banner-overlay"></div>
    <div class="banner-title first-letter-underline">{{ organizeInfo[0].organize_title_en }}</div>
  </div>

  <div class="page-content">
    <!-- 公司組織圖 title + animate -->
    <div class="page-title animate__animated animate__flipInX">
      <span class="page-title-txt">{{ organizeInfo[0].organize_title_en }}</span>
    </div>

    <!-- 公司組織圖 圖片 + animate -->
    <div class="w-full m-auto md:px-10 animate__animated animate__fadeIn">
      <img class="pic" :src="organizeInfo[0].organize_pic" alt="organize_pic" />
    </div>
    <!-- 成長趨勢圖 title + animate -->
    <div class="page-title" data-aos="fade-up">
      <span class="page-title-txt">Growth Chart</span>
    </div>

    <!-- 成長趨勢圖 內容 + animate -->
    <div class="mb-5 lg:mb-10 lg:text-xl" data-aos="fade-up">
      {{ organizeInfo[0].trend_txt_en }}
    </div>

    <!-- animate -->
    <div class="lg:grid lg:grid-cols-2 lg:gap-10" data-aos="fade-up">
      <!-- 營業額 chart -->
      <div class="growth-box">
        <h3 class="text-2xl font-semibold text-center mb-2">Trend of Historical Revenue Growth</h3>
        <canvas ref="chartCanvas" width="854" height="427"></canvas>
        <p class="text-right text-gray-400 mt-2">(Unit：NTD Ten thousand)</p>
      </div>

      <!-- 團隊人數 chart -->
      <div class="growth-box">
        <h3 class="text-2xl font-semibold text-center mb-2">
          Trend of Historical Headcount Growth
        </h3>
        <canvas ref="lineChart" width="854" height="427"></canvas>
        <p class="text-right text-gray-400 mt-2">(Unit：person)</p>
      </div>
    </div>
  </div>
</template>

<style></style>
