<!-- ServiceView.vue -->

<script setup>
import { computed } from 'vue'
import { ServeInfo } from '../js/serveInfo.js'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const serveId = parseInt(route.params.id, 10) // 從路由參數獲取並轉換為數字
console.log(serveId);


const specificData = computed(() => ServeInfo.value.find((item) => item.serve_no === serveId))

// 返回上一頁
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div v-if="specificData">
    <!-- banner -->
    <div class="banner">
      <div
        class="bg-pic"
        :style="{ backgroundImage: 'url(' + specificData.serve_title_pic + ')' }"
      ></div>
      <div class="banner-overlay"></div>
      <div class="banner-title first-letter-underline">{{ t('CatInfo.cat' + serveId + '.name') }}</div>
    </div>

    <div class="page-content page-content-top flex flex-col gap-10">
      <!-- * sec 1 + animate -->
      <div class="serve-block flex-col-reverse animate__animated animate__fadeInUp">
        <!-- 區塊文字 -->
        <div class="serve-block-txt">
          <h3 class="serve-block-txt-title">
            {{ t('CatInfo.cat' + serveId + '.story_title') }}
          </h3>
          <p class="serve-block-txt-content">
            {{ t('CatInfo.cat' + serveId + '.story') }}
          </p>
        </div>

        <!-- 區塊圖片 -->
        <div class="serve-block-pic">
          <img :src="specificData.serve_block1_pic" alt="區塊1圖片" class="pic" />
        </div>
      </div>

      <!-- * sec 2 + animate -->
      <div class="serve-block flex-col animate__animated animate__fadeInUp">
        <!-- 區塊圖片 -->
        <div class="serve-block-pic">
          <img :src="specificData.serve_block2_pic" alt="區塊1圖片" class="pic" />
        </div>

        <!-- 區塊文字 -->
        <div class="serve-block-txt">
          <h3 class="serve-block-txt-title">
            {{ t('CatInfo.cat' + serveId + '.favorite_title') }}
          </h3>
          <p class="serve-block-txt-content">
            {{ t('CatInfo.cat' + serveId + '.favorite') }}
          </p>
        </div>
      </div>

      <!-- * 返回按钮 -->
      <div class="flex justify-center md:justify-end">
        <button
          @click="goBack"
          class="btn-back"
        >
          返回上一頁
        </button>
      </div>
    </div>
  </div>

  <!-- <div v-else>no data</div> -->
</template>

<style lang="scss" scoped>
.serve-block {
  @apply flex  items-start md:grid md:grid-cols-2 md:items-center gap-5 md:gap-[60px];

  .serve-block-txt {
    @apply flex flex-col gap-2 md:gap-5 items-start;

    .serve-block-txt-title {
      @apply text-sky-700 text-xl lg:text-[28px] font-medium tracking-[3.36px];
    }

    .serve-block-txt-content {
      @apply text-zinc-800 lg:text-xl tracking-[3.20px] text-justify;
    }
  }

  .serve-block-pic {
    @apply w-full h-[280px] md:h-[400px] rounded-xl overflow-hidden;
    box-shadow: 4px 4px 2px 0px rgba(21, 67, 95, 0.4);
    backdrop-filter: blur(1px);
  }
}

.btn-back{
  @apply  border-2 w-full sm:w-3/5 md:w-1/3 h-12 rounded-full font-semibold transform duration-300;
  color: var(--color-blue);
  border-color: var(--color-blue);

  &:hover{
    @apply text-white;
    background: var(--color-blue);
  }
}
</style>
