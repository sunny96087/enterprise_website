<script setup>
import { reactive } from 'vue'

const newsInfo = [
  {
    news_no: 1,
    news_title: '最新消息',
    news_title_pic: '/img/NewsView/banner.png'
  }
]

const news = reactive([
  {
    article_no: 1,
    article_title: '【媒體報導】榮獲第3屆「促進中高齡者及高齡者就業績優獎」',
    article_pic: '/img/NewsView/news1.png',
    article_txt:
      '依中高齡員工需求，自主開發圖資系統及e化工具，透過青銀協學輔助中高齡員工查找資料及運用，並輔導其考取專業證照，提供系統化升遷路徑。',
    article_date: '2023/01/01',
    article_link: 'https://money.udn.com/money/story/11799/7378286'
  },
  {
    article_no: 2,
    article_title: '【媒體報導】勞動部長許銘春參訪誠諾',
    article_pic: '/img/NewsView/news2.png',
    article_txt:
      '誠諾在2022年「促進中高齡及高齡者就業暨世代合作績優獎選拔活動」中脫穎而出，贏得「促進中高齡者及高齡者就業績優獎」，部長於今年8月16日南下參訪誠諾，親自體驗中高齡員工的工作場域，關心壯世代勞工朋友的工作情形。',
    article_date: '2023/12/31',
    article_link: 'https://money.udn.com/money/story/11799/7378286'
  }
])

//開啟新視窗
const redirectToArticle = (link) => {
  window.open(link, '_blank')
}
</script>

<template>
  <!-- banner -->
  <div class="banner">
    <div
      class="bg-pic"
      :style="{ backgroundImage: 'url(' + newsInfo[0].news_title_pic + ')' }"
    ></div>
    <div class="banner-overlay"></div>
    <div class="banner-title first-letter-underline">{{ newsInfo[0].news_title }}</div>
  </div>

  <!-- 最新消息 title + animate -->
  <div class="page-title animate__animated animate__flipInX">
    <span class="page-title-txt">{{ newsInfo[0].news_title }}</span>
  </div>

  <!-- 新聞區塊  -->
  <div class="page-content">
    <!-- animate -->
    <div class="news-block" v-for="article in news" :key="article.article_no" data-aos="fade-up">
      <!-- 新聞圖片  -->
      <div class="news-img">
        <img class="pic" :src="article.article_pic" />
      </div>
      <!-- 新聞文字  -->
      <div class="news-container">
        <div class="news-block-txt">
          <div class="news-title">{{ article.article_title }}</div>
          <div class="news-date">{{ article.article_date }}</div>
          <div class="news-txt">{{ article.article_txt }}</div>
        </div>
        <!-- 按紐  -->
        <div class="my-4 flex justify-end md:mt-auto">
          <button class="btn-more" @click="redirectToArticle(article.article_link)">
            <span class="btn-more-icon">MORE</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.news-block {
  @apply w-full flex flex-col border-b border-gray-200 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-7;
  margin-bottom: 1rem;

  .news-img {
    @apply rounded-xl overflow-hidden h-[25vh] md:h-[212px] md:col-span-2 md:mb-4;
  }

  .news-container {
    @apply md:col-span-3 flex flex-col h-full lg:col-span-5;

    .news-block-txt {
      @apply pt-3;

      .news-title {
        @apply text-base font-medium mb-1 md:text-2xl;
      }

      .news-date {
        @apply text-xs font-light mb-2 md:text-sm text-gray-500;
      }

      .news-txt {
        @apply text-sm leading-4 md:text-base md:pb-2 text-gray-700;
      }
    }
  }
}
</style>
