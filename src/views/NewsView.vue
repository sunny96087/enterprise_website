<script setup>
import { reactive, computed, watch } from 'vue'

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const articles = computed(() => [
  {
    article_no: t('NewsView.news1.article_no'),
    article_title: t('NewsView.news1.article_title'),
    article_pic: t('NewsView.news1.article_pic'),
    article_txt: t('NewsView.news1.article_txt'),
    article_date: t('NewsView.news1.article_date'),
    article_link: t('NewsView.news1.article_link')
  },
  {
    article_no: t('NewsView.news2.article_no'),
    article_title: t('NewsView.news2.article_title'),
    article_pic: t('NewsView.news2.article_pic'),
    article_txt: t('NewsView.news2.article_txt'),
    article_date: t('NewsView.news2.article_date'),
    article_link: t('NewsView.news2.article_link')
  }
])
console.log(articles.value)

// 變換語言時，更新 articles
watch(locale, (newLocale) => {
  articles.value = computed(() => [
    t('NewsView.news1'),
    t('NewsView.news2')
  ])
  console.log(articles.value)
})

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
    article_title: '【美食報導】貓貓咖啡廳：在喵的世界中品味咖啡',
    article_pic: '/img/NewsView/news1.png',
    article_txt:
      '貓貓咖啡廳在今年的「國際美食與風味展」中擄獲了評審的心，榮獲「最佳創意美食獎」。這家獨特的咖啡廳結合了愛貓人士的兩大熱情：咖啡與貓咪。評審讚賞咖啡廳不僅提供頂級的咖啡，更創造了一個與貓咪和諧共處的空間，顧客可以在享受美食的同時，感受到來自喵星人的陪伴。',
    article_date: '2024/01/01',
    article_link: ' '
  },
  {
    article_no: 2,
    article_title: '【社會關懷】貓貓咖啡廳：一個浪貓的避風港',
    article_pic: '/img/NewsView/news2.png',
    article_txt:
      '貓貓咖啡廳不僅是一個提供優質咖啡和甜點的場所，它還是一個對社區流浪貓咪展現出深切關懷的溫暖家園。今年，咖啡廳推出了「流浪貓咪收容計劃」，不僅為這些四腳朋友提供了一個安全的庇護所，還與當地動物保護組織合作，為它們尋找永久的家。貓貓咖啡廳的這項舉措獲得了社會各界的廣泛讚譽，被視為業界的典範。',
    article_date: '2023/12/31',
    article_link: ' '
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
    <div class="banner-title first-letter-underline">{{ t('NewsView.news_title') }}</div>
  </div>

  <!-- 最新消息 title + animate -->
  <div class="page-title animate__animated animate__flipInX">
    <span class="page-title-txt">{{ t('NewsView.news_title') }}</span>
  </div>

  <!-- 新聞區塊  -->
  <div class="page-content">
    <!-- animate -->
    <div class="news-block" v-for="article in articles" :key="article.article_no" data-aos="fade-up">
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
