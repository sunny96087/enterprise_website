<script setup>
const aboutInfo = [
  {
    about_no: 1,
    about_title: '關於誠諾',
    about_title_pic: '/img/AboutView/banner.png',
    about_block1_pic: '/img/AboutView/about_pic1.png',
    about_block1_txt1:
      '「以誠為本，以諾為策」為公司宗旨，以永續經營為理念，成立於2006年1月，目前資本額9000萬元，員工65人，為一家電機工程公司並具甲級電器承裝及甲級水管承裝業資格，主要業務範圍為保護電驛相關設備之設計、安裝、測試；發電機機組保護電驛安裝施工；特高壓及高壓GIS安裝維護；電力監控系統規畫施工；CP設計組裝；特高壓及高壓開關配線、施工安裝組裝、測試、到維護皆可以己力完成。',
    about_block1_txt2:
      '本公司自成立以來承攬全國各大企業工程 涵蓋全國500多件，各項工程皆以高品質服務，達到品質至上、客戶滿意為目標，秉持專業的設計、優良的施工，主動積極完成客戶所託，頗受客戶之好評。 另外，公司也相當注重員工工作環境及安全，並專注培養員工技能及相關技術，提升公司員工專業技術能力，在每個工程均能以最高品質及嚴格遵守勞工安全衛生規則要求下完成。',
    about_block2_pic: '/img/AboutView/about_pic2_tw.png',
    about_block2_txt1:
      '誠諾秉持著「以誠為本，以諾為策」的理念經營。 對於加入公司的員工，誠諾希望每一位夥伴都在工作中獲得成就感並實現自我價值，相比學歷和經歷，誠諾更重視員工的工作態度與積極度。本公司員工總數65人，中高齡員工佔26%，不分年齡、經驗、是否為本學科生，都全額補助輔導考取相關專業證照，並讓公司內部有經驗的在職員工舉辦教育訓練，與新進員工一起努力教學相長，使全體員工在職場上都更具有競爭力。',
    about_block2_txt2:
      '同時誠諾也非常注重「家庭」的功能與價值，我們相信，一個人的成功，需要家庭的支持，因此，公司聚餐、員工旅遊等福利，公司皆歡迎員工家屬一同參與。'
  }
]
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
        <div class="block2-pic">
          <!-- animate -->
          <div
            class="bg-pic2"
            data-aos="zoom-out-right"
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
    @apply w-full lg:w-3/5;
  }
}
.block2-pic {
  @apply relative w-full sm:w-[60%] lg:w-2/5 rounded-full object-cover;

  .logo-pic {
    @apply w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  }
}

.bg-pic2 {
  @apply w-full h-0 bg-cover bg-center;
  padding-top: 100%;
}
</style>
