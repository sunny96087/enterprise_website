<script setup>
import { reactive } from 'vue'

const newsInfo = [
  {
    news_no: 1,
    news_title_en: 'News & Events',
    news_title_pic: '/img/NewsView/banner.png'
  }
]

const news = reactive([
  {
    article_no: 1,
    article_title_en:
      '【Gastronomy Feature】Meow Meow Café: Savoring Coffee in the World of Whiskers',
    article_pic: '/img/NewsView/news1.png',
    article_txt_en:
      "Meow Meow Café stood out in this year's 'International Cuisine and Flavors Exhibition', clinching the 'Award for Best Creative Gastronomy'. This unique café has captivated the hearts of judges by merging two passions of cat enthusiasts: coffee and felines. The café was praised for not only offering top-tier coffee but also for creating a harmonious space where customers can enjoy the company of cats while indulging in delectable treats.",
    article_date: 'January 1, 2024',
    article_link: ' '
  },
  {
    article_no: 2,
    article_title_en: '【Community Spotlight】Meow Meow Café: A Haven for Stray Cats',
    article_pic: '/img/NewsView/news2.png',
    article_txt_en:
      "Meow Meow Café is more than a spot for quality coffee and pastries; it is a warm home showing deep care for the community's stray cats. This year, the café launched a 'Stray Cat Sanctuary Program', providing a safe haven for these four-legged friends and partnering with local animal welfare organizations to find them permanent homes. Meow Meow Café's initiative has received wide acclaim across the community, setting a benchmark for the industry.",
    article_date: 'December 31, 2023',
    article_link: 'https://money.udn.com/money/story/11799/7378286'
  }
])

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
    <div class="banner-title first-letter-underline">{{ newsInfo[0].news_title_en }}</div>
  </div>

  <!-- 最新消息 title + animate -->
  <div class="page-title animate__animated animate__flipInX">
    <span class="page-title-txt">{{ newsInfo[0].news_title_en }}</span>
  </div>

  <div class="page-content">
    <!-- animate -->
    <div class="news-block" v-for="article in news" :key="article.article_no" data-aos="fade-up">
      <div class="news-img">
        <img class="pic" :src="article.article_pic" />
      </div>
      <div class="news-container">
        <div class="news-block-txt">
          <div class="news-title">{{ article.article_title_en }}</div>
          <div class="news-date">{{ article.article_date }}</div>
          <div class="news-txt">{{ article.article_txt_en }}</div>
        </div>
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
  @apply w-full flex flex-col md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-7;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 1rem;

  .news-img {
    @apply rounded-xl overflow-hidden h-[25vh] md:h-[90%] md:col-span-2 md:mb-4;
  }

  .news-container {
    @apply md:col-span-3 flex flex-col h-full lg:col-span-5;

    .news-block-txt {
      @apply pt-3;

      .news-title {
        @apply text-base font-medium mb-1 md:text-2xl;
      }

      .news-date {
        @apply text-xs font-light mb-2 md:text-sm;
        color: #6b6b6b;
      }

      .news-txt {
        @apply text-sm leading-4 md:text-base;
        color: #565656;
      }
    }
  }
}
</style>
