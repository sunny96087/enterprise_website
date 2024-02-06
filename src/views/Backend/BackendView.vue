<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <!-- 後台整體框架 -->
  <div class="flex py-5 gap-5 app-back-container relative">
    <!-- 切頁選單 -->
    <div class="list">
      <div class="text-center py-3 text-gray-400">頁面維護選單</div>

      <RouterLink to="/backendView/backendHome" class="list-item"> 首頁 </RouterLink>
      <RouterLink to="/backendView/backendServices" class="list-item"> 服務項目 </RouterLink>
      <RouterLink to="/backendView/backendAbout" class="list-item"> 關於誠諾 </RouterLink>
      <RouterLink to="/backendView/backendLicense" class="list-item"> 專業證照 </RouterLink>
      <RouterLink to="/backendView/backendOrganize" class="list-item"> 組織架構 </RouterLink>
      <RouterLink to="/backendView/backendBusiness" class="list-item"> 營業實績 </RouterLink>
      <RouterLink to="/backendView/backendNews" class="list-item"> 最新消息 </RouterLink>
      <RouterLink to="/backendView/backendArticle" class="list-item"> 新聞文章 </RouterLink>
      <RouterLink to="/backendView/backendContact" class="list-item"> 聯絡我們 </RouterLink>
      <RouterLink to="/backendView/backendFeedback" class="list-item"> 表單回饋 </RouterLink>
      <RouterLink to="/backendView/backendCompanyData" class="list-item"> 公司資料 </RouterLink>
      <RouterLink to="/backendView/backendStaff" class="list-item"> 管理人員 </RouterLink>
      <RouterLink to="/backendView/backendTest" class="list-item"> 測試頁 </RouterLink>
    </div>

    <!-- 頁面 -->
    <main class="shadow border bg-white rounded-md py-4 px-3 grow self-start">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.list {
  @apply flex flex-col shadow border  bg-white rounded-md self-start sticky top-[84px];
  min-width: 180px;
}
.list-item {
  @apply py-2;
  padding-left: 21%;
  border-left: 4px solid transparent;

  &:hover {
    @apply bg-gray-200;
    border-left-color: var(--color-blue);
    background: rgba(0, 132, 199, 0.08);
  }
}

.router-link-active {
  @apply font-bold;
  border-left-color: var(--color-blue);
  background: rgba(0, 132, 199, 0.08);
}
</style>
