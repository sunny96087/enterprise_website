import { reactive } from 'vue';
<script setup>
const aboutInfo = [
  {
    about_no: 1,
    about_title_en: 'About Us',
    about_title_pic: '/img/AboutView/banner.png',
    about_block1_pic: '/img/AboutView/about_pic1.jpeg',
    about_block1_txt1:
      "Welcome to Meow Meow Café, our little haven established in 2006. It's not just a café, but a paradise for cats within the city. We're dedicated to providing a relaxing and comfortable space for cat lovers to enjoy our carefully crafted coffee and homemade treats.",
    about_block1_txt2:
      "Our feline friends are cared for by a professional team, ensuring their health and happiness. We also value our customers' experience, offering various interactive activities to build a special connection with the cats. Here, every corner is filled with the pitter-patter and laughter of cats.",
    about_block2_pic: '/img/AboutView/about_pic2.jpeg',
    about_block2_txt1:
      "Our team believes that Meow Meow Café is more than just a commercial space; it's a place that brings happiness to people. We encourage our staff to show their passion for cats and coffee and to pass on this enthusiasm to every customer.",
    about_block2_txt2:
      'Meow Meow Café is like a big family. We care not only for the professional growth of our employees but also for their personal well-being. We organize regular meals and trips, allowing our staff and their families to feel the warmth and care of our team.'
  }
]

// 組織資訊數據
const organizeInfo = [
  {
    organize_no: 1,
    trend_txt:
      "Our cat café operates on a philosophy of genuine hospitality and keeping promises. We regard our customers and partners as precious allies of the café. Our commitment to quality and service is the driving force behind our continuous growth, and over the past three years, we have seen a significant increase in our turnover. This reflects the high esteem we have earned within the community of cat enthusiasts and demonstrates the market's recognition of our promise to provide a unique coffee experience and enjoyable interactions with cats."
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
      <div class="banner-title first-letter-underline">{{ aboutInfo[0].about_title_en }}</div>
    </div>

    <!-- title + animate -->

    <div class="page-title animate__animated animate__flipInX">
      <span class="page-title-txt">{{ aboutInfo[0].about_title_en }}</span>
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

          <!-- animate -->
          <div class="logo-pic" data-aos="fade-right" data-aos-delay="500">
            <img src="/img/CompanyData/logo.svg" alt="logo" class="pic" />
          </div>
        </div>

        <!-- txt + animate -->
        <div class="block-txt block2-txt" data-aos="fade-left">
          <div class="txt1">{{ aboutInfo[0].about_block2_txt1 }}</div>
          <div class="txt1">{{ aboutInfo[0].about_block2_txt2 }}</div>
        </div>
      </div>

      <!-- 成長趨勢 title + animate -->
      <div class="page-title" data-aos="fade-up">
        <span class="page-title-txt">Organization Chart</span>
      </div>

      <!-- 成長趨勢 內容 + animate -->
      <div class="lg:px-20 mb-5 lg:mb-10 md:text-lg" data-aos="fade-up">
        {{ organizeInfo[0].trend_txt }}
      </div>

      <!-- animate -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-10" data-aos="fade-up">
        <!-- chart 1 -->
        <div class="growth-box">
          <h3 class="text-2xl font-semibold text-center mb-2">Cat growth trends</h3>
          <canvas ref="chartCanvas" width="854" height="427"></canvas>
          <p class="text-right text-gray-400 mt-2">(unit: cat)</p>
        </div>

        <!-- chart 2 -->
        <div class="growth-box">
          <h3 class="text-2xl font-semibold text-center mb-2">
            Trend of Historical Revenue Growth
          </h3>
          <canvas ref="lineChart" width="854" height="427"></canvas>
          <p class="text-right text-gray-400 mt-2">(Unit：NTD Ten thousand)</p>
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
