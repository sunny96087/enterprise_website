<!-- FullPageTw.vue -->

<script setup>
import { onMounted, onBeforeUnmount, ref, reactive, nextTick } from 'vue'

// * FullPage.js
import fullpage from 'fullpage.js'
import Footer from './FooterView.vue'

// 用於存儲 fullpage.js 實例的 ref
const fullpageApi = ref(null)

// 初始化 fullpage.js
function initFullpage() {
  if (fullpageApi.value) {
    destroyFullpage()
  }
  
  fullpageApi.value = new fullpage('#fullpage', {
    autoScrolling: true,
    scrollOverflow: true,
    sectionSelector: '.my-section',
    navigation: true,
    // 确保所有区块都能正确加载
    afterRender: function() {
      // 强制重新计算高度
      fullpageApi.value.reBuild()
    },
    // 添加过渡效果
    css3: true,
    // 确保区块能完整显示
    fitToSection: true,
    // 设置合理的滚动速度
    scrollingSpeed: 700,
    anchors: [
      'my-section1',
      'my-section2',
      'my-section3',
      'my-section4',
      'my-section5',
      'my-section6'
    ]
  })
}

// 銷毀 fullpage.js 實例
function destroyFullpage() {
  if (fullpageApi.value) {
    fullpageApi.value.destroy('all')
    fullpageApi.value = null
  }
}

// 檢查並根據螢幕寬度初始化或銷毀 fullpage.js
function checkFullpageInit() {
  const screenWidth = window.innerWidth
  if (screenWidth > 768) {
    // 添加延时确保 DOM 完全加载
    setTimeout(() => {
      if (!fullpageApi.value) {
        initFullpage()
      } else {
        // 重新构建以适应可能的内容变化
        fullpageApi.value.reBuild()
      }
    }, 100)
  } else {
    destroyFullpage()
  }
}

// 當組件掛載時初始化 fullpage.js 或添加事件監聽器
onMounted(() => {
  // 确保 DOM 完全加载后再初始化
  nextTick(() => {
    checkFullpageInit()
    window.addEventListener('resize', checkFullpageInit)
  })
})

// 在組件卸載前銷毀 fullpage.js 並移除事件監聽器
onBeforeUnmount(() => {
  destroyFullpage()
  window.removeEventListener('resize', checkFullpageInit)
})

// * banner 輪播圖

import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Home data
const HomeInfo = [
  {
    home_no: 1,
    home_title: '在喵的陪伴下，享受生活的每一杯咖啡',
    home_title_en: "Savor every cup of life's coffee in the company of meows.",
    home_txt:
      '我們提供一個舒適、溫馨的環境為理念，專注於給予貓愛好者與他們的毛茸茸朋友們一個完美的相遇場所。我們以顧客和貓咪的需求為目標，秉持專業、親切的服務，積極實現每位訪客的美好體驗！',
    home_txt_en:
      'We are dedicated to providing a comfortable and warm environment, focusing on creating the perfect meeting place for cat lovers and their furry friends. Aiming to meet the needs of both customers and cats, we uphold professional and friendly service, actively working to ensure a delightful experience for every visitor!'
  }
]

const settingsBanner = reactive({
  itemsToShow: 1,
  snapAlign: 'center'
})

// const settingsClient = reactive({
//   itemsToShow: 1,
//   snapAlign: 'center',
//   breakpoints: {
//     // 700px and up
//     414: {
//       itemsToShow: 3,
//       snapAlign: 'center'
//     },
//     // 1024 and up
//     1024: {
//       itemsToShow: 5,
//       snapAlign: 'center'
//     }
//   }
// })

const slides = ref([
  '/img/HomeView/banner1.png',
  '/img/HomeView/banner2.png',
  '/img/HomeView/banner3.png',
  '/img/HomeView/banner4.png'
])

// const clientSlides = ref([
//   '/img/Client/Client_1.png',
//   '/img/Client/Client_2.png',
//   '/img/Client/Client_3.png',
//   '/img/Client/Client_4.png',
//   '/img/Client/Client_5.png',
//   '/img/Client/Client_6.png',
//   '/img/Client/Client_7.png',
//   '/img/Client/Client_8.png',
//   '/img/Client/Client_9.png',
//   '/img/Client/Client_10.png',
//   '/img/Client/Client_11.png',
//   '/img/Client/Client_12.png'
// ])

// 服務項目

import { ServeInfo } from '../js/serveInfo.js'

const splitServeTxt = (txt) => txt.split(',')

// 路由
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDetail = (serveNo) => {
  // 英文的就改成 name: 'serviceEn'
  router.push({ name: 'service', params: { id: serveNo } })
}
</script>

<template>
  <!-- * banner 輪播圖 -->
  <carousel v-bind="settingsBanner" :wrap-around="true" :autoplay="5000" class="carousel-banner">
    <Slide v-for="(slide, index) in slides" :key="index" class="slide">
      <div
        class="carousel__item banner-pic"
        :style="{ backgroundImage: 'url(' + slide + ')' }"
      ></div>
    </Slide>

    <template #addons>
      <div class="overlay absolute inset-0 bg-black opacity-50"></div>
      <div class="txt">
        <h1 class="text-2xl sm:text-4xl font-bold">{{ HomeInfo[0].home_title }}</h1>
        <p class="text-sm sm:text-xl text-left max-w-md sm:max-w-2xl break-words">
          {{ HomeInfo[0].home_txt }}
        </p>
      </div>

      <!-- 右下小動畫 -->
      <div class="banner-animate-line">
        <div class="box">
          <!-- 動畫 -->
          <div class="box-line"></div>
        </div>
        <!-- 文字 -->
        <div class="text-blueLight">． Meow Planet Paradise</div>
      </div>

      <Pagination />
      <Navigation />
    </template>
  </carousel>

  <!-- * screen > 768px -->
  <div id="fullpage" class="hidden md:block">
    <!-- <div class="section">第一節</div> -->

    <!-- * 第 2 節 -->
    <div class="my-section my-section-p">
      <!-- title -->
      <div class="page-title" style="margin-top: 40px">
        <span class="page-title-txt">店長貓貓們</span>
      </div>

      <!-- sec 1 -->
      <div class="my-section-block -translate-x-10">
        <div class="block-pic">
          <img :src="ServeInfo[0].serve_block1_pic" alt="" class="pic" />
        </div>

        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[0].serve_title }}</h3>
          <ul class="block-txt">
            <li v-for="(item, index) in splitServeTxt(ServeInfo[0].serve_txt)" :key="index">
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[0].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>

      <!-- sec 2 -->
      <div class="my-section-block -mt-10">
        <div class="block-pic">
          <img :src="ServeInfo[1].serve_block1_pic" alt="" class="pic" />
        </div>

        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[1].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[1].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[1].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>

      <!-- 使用 RouterLink 並帶動態參數 -->
      <!-- <button @click="navigateToDetail(ServeInfo[1].serve_no)">More</button> -->
    </div>

    <!-- * 第 3 節 -->
    <div class="my-section my-section-p">
      <!-- sec 1 -->
      <div class="my-section-block-reverse -translate-x-10">
        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[2].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[2].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[2].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
        <div class="block-pic">
          <img :src="ServeInfo[2].serve_block1_pic" alt="" class="pic" />
        </div>
      </div>

      <!-- sec 2 -->
      <div class="my-section-block-reverse -mt-10">
        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[3].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[3].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[3].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
        <div class="block-pic">
          <img :src="ServeInfo[3].serve_block1_pic" alt="" class="pic" />
        </div>
      </div>
    </div>

    <!-- * 第 4 節 -->
    <div class="my-section my-section-p">
      <!-- title -->
      <!-- <div class="page-title" style="margin-top: 40px">
        <span class="page-title-txt">服務項目</span>
      </div> -->

      <!-- sec 1 -->
      <div class="my-section-block -translate-x-10">
        <div class="block-pic">
          <img :src="ServeInfo[4].serve_block1_pic" alt="" class="pic" />
        </div>

        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[4].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[4].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[4].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>

      <!-- sec 2 -->
      <div class="my-section-block -mt-10">
        <div class="block-pic">
          <img :src="ServeInfo[5].serve_block1_pic" alt="" class="pic" />
        </div>

        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[5].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[5].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[5].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>
    </div>

    <!-- * 第 5 節 -->
    <div class="my-section my-section-p">
      <div class="my-section-block-reverse -translate-x-10">
        <div class="block-content">
          <h3 class="block-title">{{ ServeInfo[6].serve_title }}</h3>
          <ul class="block-txt">
            <li
              v-for="(item, index) in splitServeTxt(ServeInfo[6].serve_txt)"
              :key="index"
              class=""
            >
              {{ item }}
            </li>
          </ul>
          <!-- 使用 RouterLink 並帶動態參數 -->
          <button class="btn-more" @click="navigateToDetail(ServeInfo[6].serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
        <div class="block-pic" style="height: 46vh">
          <img :src="ServeInfo[6].serve_block1_pic" alt="" class="pic" />
        </div>
      </div>
    </div>

    <!-- <div class="my-section my-section-p bg-gray-400">第 6 節</div> -->

    <!-- ? 不知道為什麼要多一節才能吃到第六節 = = -->
    <div class="my-section">🫠</div>
  </div>

  <!-- screen < 768px -->
  <div class="mb:hidden">
    <!-- 服務項目 title + animate -->
    <div class="page-title animate__animated animate__flipInX">
      <span class="page-title-txt">服務項目</span>
    </div>
    <!-- * 服務項目 -->
    <div class="serve-block flex flex-col gap-8 px-5 sm:px-10">
      <div class="serve-block-item" v-for="(item, index) in ServeInfo" :key="index">
        <!-- {{ item.serve_title }} -->

        <!-- image -->
        <div class="h-[280px] rounded-xl overflow-hidden">
          <img :src="item.serve_block1_pic" alt="誠諾服務項目圖片" class="pic" />
        </div>

        <!-- title -->
        <h3 class="text-lg sm:text-xl font-medium mt-2 sm:mt-4 text-blue">
          {{ item.serve_title }}
        </h3>
        <!-- txt -->
        <ul class="ml-5 my-2 flex flex-col gap-2 text-base">
          <li
            v-for="(item, index) in splitServeTxt(ServeInfo[0].serve_txt)"
            :key="index"
            class="list-item list-disc pl-1"
          >
            {{ item }}
          </li>
        </ul>
        <!-- btn -->
        <div class="flex justify-end">
          <button class="btn-more" @click="navigateToDetail(item.serve_no)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>
    </div>

    <!-- * 代表客戶 -->
    <!-- title -->
    <!-- <div class="page-title">
      <span class="page-title-txt">代表客戶</span>
    </div> -->

    <!-- * client 輪播圖 -->
    <!-- <carousel
      v-bind="settingsClient"
      :wrap-around="true"
      :autoplay="3000"
      :draggable="true"
      class="carousel-client"
    >
      <slide v-for="(clientSlide, index) in clientSlides" :key="index" class="slide">
       <div
        class="carousel__item bg-pic"
        :style="{ backgroundImage: 'url(' + clientSlide + ')' }"
      ></div> 
        <div class="carousel__item">
          <img :src="clientSlide" alt="" class="w-full h-full" />
        </div>
      </slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </carousel> -->
  </div>
</template>

<style lang="scss" scoped>
::v-deep .fp-overflow {
  overflow-y: visible !important;
}

// 影藏預設浮水印
.fp-watermark {
  display: none;
}

// 桌機版 服務項目
.my-section {
  min-height: 100vh;
  background: var(--color-background);

  .my-section-block {
    @apply grid w-full items-center;
    grid-template-columns: 60% 40%;

    .block-pic {
      @apply w-full h-[32vh] lg:h-[36vh] xl:h-[40vh] rounded-xl overflow-hidden;
      box-shadow: 4px 4px 2px 0px rgba(21, 67, 95, 0.4);
      backdrop-filter: blur(1px);
    }

    .block-content {
      @apply w-full pl-10 lg:pl-[60px];

      .block-title {
        @apply text-[28px] font-medium;
        color: var(--color-blue);
      }

      .block-txt {
        @apply ml-5 my-4 flex flex-col gap-2;
        li {
          @apply list-item list-disc pl-1;
        }
      }
    }
  }

  .my-section-block-reverse {
    @apply grid w-full items-center;
    grid-template-columns: 40% 60%;

    .block-pic {
      @apply w-full h-[32vh] lg:h-[36vh] xl:h-[40vh] rounded-xl overflow-hidden;
      box-shadow: 4px 4px 2px 0px rgba(21, 67, 95, 0.4);
      backdrop-filter: blur(1px);
    }

    .block-content {
      @apply w-full pl-10 lg:pl-[60px];

      .block-title {
        @apply text-[28px] font-medium;
        color: var(--color-blue);
      }

      .block-txt {
        @apply ml-5 my-4 flex flex-col gap-2;
        li {
          @apply list-item list-disc pl-1;
        }
      }
    }
  }
}

.my-section.my-section-p {
  @apply pl-20 pr-10 lg:pr-[80px] lg:pl-[120px];
}

// banner 輪播圖
.carousel-banner {
  @apply relative;
  width: 100%;
  height: 100vh;
  .slide {
    width: 100%;
    height: 100vh;

    .carousel__item {
      @apply flex flex-col justify-end sm:justify-center items-start pb-24 sm:pb-0  w-full h-full;
    }
  }

  .txt {
    @apply flex flex-col items-start absolute w-full  text-white gap-4 sm:gap-6  px-6 sm:px-20;
    bottom: 200px;
    // left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
  }

  .carousel__viewport {
    height: 100vh;
  }

  .banner-pic {
    // background-image: url('/img/home-banner1.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    // padding-top: 25%;
  }

  ::v-deep .fp-slides {
    width: 100%;
    height: 100vh;

    .fp-overflow {
      @apply h-full w-full;
    }
  }

  /* 調整底部頁籤樣式 */

  .carousel__pagination {
    @apply justify-start pl-6 absolute gap-2;
    bottom: 40px;
    right: 10%;
  }
  ::v-deep .carousel__pagination-button {
    width: 100%;
    height: 4px;
    padding: 0;
  }

  ::v-deep .carousel__pagination-button::after {
    width: 112px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
  }
  ::v-deep .carousel__pagination-button--active {
    background-color: #fff;
    padding: 0;
    position: relative;
    animation: slide-bar 5s linear; /* 動畫 */
  }

  @keyframes slide-bar {
    0% {
      background-color: #fff;
      width: 0;
    }
    100% {
      background-color: #fff;
      width: 100%;
    }
  }

  // 調整箭頭樣式
  ::v-deep .carousel__next {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 130px;
    top: 93%;
    color: #fff;

    &:hover {
      color: var(--color-blue);
    }

    .carousel__icon {
      width: 100%; /* SVG 寬度佔滿按鈕 */
      height: 100%;
    }
  }
  ::v-deep .carousel__prev {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 56px;
    top: 93%;
    color: #fff;

    &:hover {
      color: var(--color-blue);
    }

    .carousel__icon {
      width: 100%;
      height: 100%;
    }
  }

  // 右下小動畫
  .banner-animate-line {
    @apply hidden md:flex items-center gap-2 absolute -right-[8%] xl:-right-[5%] bottom-[13.5%] -rotate-90;

    .box {
      @apply w-16 h-1 relative overflow-hidden;
      background: rgba(255, 255, 255, 0.2);
    }

    .box-line {
      @apply w-5 h-1 absolute;
      background: var(--color-blueLight);
      animation: box-line-move 3s linear infinite; /* 動畫 */
    }

    @keyframes box-line-move {
      // 左邊100% => 右邊0%

      0% {
        right: 68%;
      }
      50% {
        right: 0;
      }
      100% {
        right: 68%;
      }
    }
  }
}

// NOTE 以下開始是手機版

// carousel < 768px 樣式
@media screen and (max-width: 768px) {
  // banner 輪播圖
  .carousel-banner {
    .carousel__pagination {
      @apply justify-start pl-6 absolute gap-2;
      bottom: 24px;
      // right: 10%;
      right: 50%;
      transform: translateX(48%);
    }

    ::v-deep .carousel__pagination-button::after {
      width: 24px;
    }

    ::v-deep .carousel__prev {
      display: none;
    }

    ::v-deep .carousel__next {
      display: none;
    }

    .carousel .txt {
      bottom: 80px;
      text-align: left;
    }
  }
}

// 服務項目

// client 輪播圖
.carousel-client {
  @apply w-full min-h-[1px] mb-5 sm:mb-10;

  .slide {
    @apply w-full h-auto;

    .carousel__item {
      @apply w-full inline-flex;
    }
  }

  .carousel__slide {
    @apply py-2 px-4 sm:px-8;
    // padding: 24px;
  }

  .carousel__viewport {
    height: 100vh;
  }
}

// @media screen and (max-width: 512) {
//   .carousel__slide {
//     @apply px-12;
//   }
// }
</style>
