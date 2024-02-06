<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToHomePage() {
  router.push('/')
}
</script>

<template>
  <div class="bg flex flex-col justify-center items-center grow self-center h-full">
    <!-- 背景文字 -->
    <div class="bg-pic fixed -z-10">
      <img src="/img/backend/back-login-bg-txt.png" alt="back-login-bg-txt" class="w-full" />
      <!-- back-login-bg-txt.svg -->
    </div>
    <!-- 公司 logo + animate -->
    <div class="w-80 mb-8 animate__animated animate__bounceIn">
      <img src="/img/backend/logo_companyname_back.svg" alt="logo_companyname" />
    </div>

    <!-- 登入框 + animate -->
    <div class="login-block animate__animated animate__jackInTheBox">
      <h3 class="text-3xl font-bold text-zinc-800 mb-10">Log in</h3>
      <input type="text" placeholder="帳號" class="input-line" />
      <input type="text" placeholder="密碼" class="input-line mt-2" />

      <label class="text-gray-400 flex items-center gap-2 mt-3 check-txt cursor-pointer">
        <input type="checkbox" class="custom-checkbox" />
        <div class="checkmark"></div>
        記住帳號密碼</label
      >
      <RouterLink
        to="/backendView"
        class="mt-7 border border-blue px-4 py-2 w-36 text-center rounded-md hover:bg-sky-600 text-blue hover:text-white transform duration-300 font-bold"
        >登入
      </RouterLink>
    </div>
  </div>
  <!-- * 當 screen < 768px 送他回首頁 -->
  <div
    class="block md:hidden fixed inset-0 h-full w-full bg-black bg-opacity-40 z-10 overflow-hidden"
  >
    <div class="note-block">
      <div class="text-left">
        <div>後台管理不支援手機版呦！</div>
        <div class="text-sm text-gray-500">有問題請洽資訊部門 📞</div>
      </div>
      <div class="text-center mt-5">
        <button class="btn-blue-border" @click="goToHomePage">返回首頁</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// body {
//   overflow: hidden;
// }
.bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(294deg, #2493d2 -22.22%, #b8d7e9 73.4%, #fff 109.85%);
  z-index: -20;
}

.login-block {
  @apply bg-white p-20 flex flex-col rounded-2xl;
  background: rgba(255, 255, 255, 0.71);
  box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(5px);
}

.bg-pic {
  width: 100%;
  right: -18%;
  bottom: -64%;
}

.input-line {
  @apply w-80 py-3 px-2 bg-transparent;
  border-bottom: 1px solid rgba(97, 95, 95, 0.6);
}

:focus-visible {
  outline: 0px;
  border-bottom: 1px solid var(--color-blue);
  opacity: 0.8;
}

/*  NOTE checkbox */

/* 隐藏原本的 checkbox */
.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* 自訂義的 checkbox 樣式 */
.checkmark {
  @apply w-5 h-5 relative top-0 left-0 border border-gray-400 rounded-md;
}

/* checkbox hover 樣式 */
.check-txt {
  &:hover ~ .checkmark {
    background-color: var(--color-blueLight);
  }
}

/* checkbox focus 樣式 */
input:checked ~ .checkmark {
  background-color: rgba(86, 180, 234, 0.4);
  border: 2px solid var(--color-blue);
}

/* 建立勾勾的存在 */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* checkbox focus 顯示勾勾 */
input:checked ~ .checkmark:after {
  display: block;
}

/* checkbox focus 勾勾樣式 */
.checkmark:after {
  left: 5.5px;
  top: 3px;
  width: 5px;
  height: 9px;
  border: solid var(--color-blue);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

// 提示框
.note-block {
  @apply bg-white p-10 flex flex-col rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] items-center;
  background: rgba(255, 255, 255, 0.71);
  box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(5px);
}
</style>
