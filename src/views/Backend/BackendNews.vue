<script setup>
import { ref, computed, reactive } from 'vue'

// news table data
const newsDataOld = [
  {
    news_no: 1,
    news_title: '最新消息',
    news_title_en: 'News & Events',
    news_title_pic: '/img/NewsView/banner.png',
    news_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

const newsData = reactive({ ...newsDataOld[0] })

// footer 儲存按鈕
const saveData = () => {
  // 更新 homeData 的時間戳
  newsData.news_datetime = getCurrentDateTime()

  // 打印數據到控制台
  console.log(newsData)

  // 這裡需要添加您的代碼來處理數據發送
}

// footer 取消按鈕
const resetData = () => {
  Object.assign(newsData, newsDataOld[0])
}

// 獲取當前時間並格式化為所需格式
function getCurrentDateTime() {
  const now = new Date()
  const year = now.getFullYear() - 1911 // 轉換為民國年
  const month = now.getMonth() + 1 // 月份是從 0 開始的
  const day = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')} ${hours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
}

// 計算文字 & 標題的當前字數
const titleLength = computed(() => newsData.news_title.length)
const titleEnLength = computed(() => newsData.news_title_en.length)

// 處理檔案上傳
const handleFileUpload = (event, index, data, key) => {
  const file = event.target.files[0]
  if (file) {
    const uploadedUrl = URL.createObjectURL(file)

    // 判斷 data 是否為陣列或物件
    if (Array.isArray(data)) {
      // 如果是陣列，則更新指定索引的項目
      data[index] = uploadedUrl
    } else if (typeof data === 'object') {
      // 如果是物件，則更新指定鍵的值
      data[key] = uploadedUrl
    }
  }
}

// 調用方法 handleFileUpload(event, null, aboutData, 'about_block1_pic');

// 打開新視窗顯示圖片
const openImageInNewWindow = (imageUrl) => {
  window.open(imageUrl, '_blank')
}

// banner 圖片預覽 變量
const showBanner = ref(false)
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">最新消息</div>

    <!-- * banner 區塊標題 & 看圖片按鈕 -->
    <div class="backend-block-title">
      banner
      <button
        class="backend-look-pic-btn"
        :class="{ 'backend-look-pic-btn-focus': showBanner }"
        @click="showBanner = !showBanner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.3376 16.6418C2.92666 16.6418 0.967285 13.6621 0.967285 9.99961C0.967285 6.33711 2.92822 3.35742 5.3376 3.35742C7.74697 3.35742 9.70791 6.33711 9.70791 9.99961C9.70791 13.6621 7.74697 16.6418 5.3376 16.6418Z"
            fill="#FAFAFA"
          />
          <path
            d="M5.3376 3.66992C6.37354 3.66992 7.36572 4.29492 8.12979 5.43086C8.94541 6.6418 9.39541 8.26523 9.39541 9.99961C9.39541 11.734 8.94541 13.3574 8.12979 14.5684C7.36572 15.7043 6.37354 16.3293 5.3376 16.3293C4.30166 16.3293 3.30947 15.7043 2.54541 14.5684C1.72822 13.3574 1.27979 11.734 1.27979 9.99961C1.27979 8.26523 1.72979 6.6418 2.54541 5.43086C3.30947 4.29492 4.3001 3.66992 5.3376 3.66992ZM5.3376 3.04492C2.75166 3.04492 0.654785 6.15898 0.654785 9.99961C0.654785 13.8402 2.75166 16.9543 5.3376 16.9543C7.92353 16.9543 10.0204 13.8402 10.0204 9.99961C10.0204 6.15898 7.92353 3.04492 5.3376 3.04492Z"
            fill="#B0BEC5"
          />
          <path
            d="M4.00459 9.34922C3.58271 8.95234 3.67646 8.16484 4.21709 7.58984C4.24521 7.56016 4.27334 7.53203 4.30303 7.50547C4.0624 7.36953 3.79834 7.29297 3.52021 7.29297C2.39678 7.29297 1.48584 8.53203 1.48584 10.0586C1.48584 11.5852 2.39678 12.8242 3.52021 12.8242C4.64365 12.8242 5.55459 11.5852 5.55459 10.0586C5.55459 9.78516 5.5249 9.51953 5.47021 9.26953C4.96396 9.63359 4.35928 9.68203 4.00459 9.34922Z"
            fill="url(#paint0_linear_70_3180)"
          />
          <path
            d="M14.6623 16.9543C17.2485 16.9543 19.3451 13.8406 19.3451 9.99961C19.3451 6.15864 17.2485 3.04492 14.6623 3.04492C12.0761 3.04492 9.97949 6.15864 9.97949 9.99961C9.97949 13.8406 12.0761 16.9543 14.6623 16.9543Z"
            fill="#EEEEEE"
          />
          <path
            d="M14.6623 16.6418C12.2529 16.6418 10.292 13.6621 10.292 9.99961C10.292 6.33711 12.2529 3.35742 14.6623 3.35742C17.0717 3.35742 19.0326 6.33711 19.0326 9.99961C19.0326 13.6621 17.0732 16.6418 14.6623 16.6418Z"
            fill="#FAFAFA"
          />
          <path
            d="M14.6623 3.66992C15.6982 3.66992 16.6904 4.29492 17.4545 5.43086C18.2701 6.6418 18.7201 8.26523 18.7201 9.99961C18.7201 11.734 18.2701 13.3574 17.4545 14.5684C16.6904 15.7043 15.6982 16.3293 14.6623 16.3293C13.6264 16.3293 12.6342 15.7043 11.8701 14.5684C11.0545 13.3574 10.6045 11.734 10.6045 9.99961C10.6045 8.26523 11.0545 6.6418 11.8701 5.43086C12.6342 4.29492 13.6264 3.66992 14.6623 3.66992ZM14.6623 3.04492C12.0764 3.04492 9.97949 6.15898 9.97949 9.99961C9.97949 13.8402 12.0764 16.9543 14.6623 16.9543C17.2482 16.9543 19.3451 13.8402 19.3451 9.99961C19.3451 6.15898 17.2482 3.04492 14.6623 3.04492Z"
            fill="#B0BEC5"
          />
          <path
            d="M13.3298 9.34922C12.9079 8.95234 13.0017 8.16484 13.5423 7.58984C13.5704 7.56016 13.5985 7.53203 13.6282 7.50547C13.3876 7.36953 13.1235 7.29297 12.8454 7.29297C11.722 7.29297 10.811 8.53203 10.811 10.0586C10.811 11.5852 11.722 12.8242 12.8454 12.8242C13.9688 12.8242 14.8798 11.5852 14.8798 10.0586C14.8798 9.78516 14.8501 9.51953 14.7954 9.26953C14.2907 9.63359 13.6845 9.68203 13.3298 9.34922Z"
            fill="url(#paint1_linear_70_3180)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_70_3180"
              x1="3.51912"
              y1="7.29234"
              x2="3.51912"
              y2="12.8247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#424242" />
              <stop offset="1" stop-color="#212121" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_70_3180"
              x1="12.8453"
              y1="7.29234"
              x2="12.8453"
              y2="12.8247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#424242" />
              <stop offset="1" stop-color="#212121" />
            </linearGradient>
          </defs>
        </svg>
        圖片
      </button>
    </div>

    <!-- * banner 內容區域 -->
    <div class="backend-block-flex">
      <label
        >標題
        <span class="label-note">* 最多 10 字 ({{ titleLength }} / 10)</span>
        <input
          type="text"
          maxlength="10"
          v-model="newsData.news_title"
          class="input-backend"
          placeholder="標題"
        />
      </label>

      <label
        >標題_英文
        <span class="label-note">* 最多 255 字 ({{ titleEnLength }} / 255)</span>
        <input
          type="text"
          maxlength="255"
          v-model="newsData.news_title_en"
          class="input-backend"
          placeholder="標題_英文"
        />
      </label>

      <div class="input-backend-pic-flex">
        <label>
          圖片
          <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
        </label>

        <div>
          <input
            type="file"
            @change="(event) => handleFileUpload(event, null, newsData, 'news_title_pic')"
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-full cursor-pointer" v-show="showBanner">
          <img
            :src="newsData.news_title_pic"
            alt="image Preview"
            class="pic"
            @click="() => openImageInNewWindow(newsData.news_title_pic)"
          />
        </div>
      </div>
    </div>

    <!-- ? footer -->
    <div class="backend-footer">
      <div class="flex gap-2">
        最後更新 :
        <div v-text="newsData.news_datetime"></div>
        <div v-text="newsData.staff_no"></div>
      </div>
      <div class="flex gap-3">
        <button @click="resetData" class="btn-white">取消</button>
        <button @click="saveData" class="btn-blue">儲存</button>
      </div>
    </div>
  </div>
</template>

<style></style>
