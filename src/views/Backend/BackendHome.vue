<script setup>
import { ref, computed, reactive } from 'vue'

// home table data
const homeDataOld = [
  {
    home_no: 1,
    home_title: '以誠為本，以諾為策',
    home_title_en: 'Founded on Honesty. Promise Strong Policy',
    home_txt:
      '以永續經營為理念，承攬各大企業電力系統相關工程，以客戶需求為目標，秉持專業、優良的服務，積極完成客戶所託！',
    home_txt_en:
      "With the concept of sustainable operation, we undertake various electrical system-related projects for large enterprises. Our goal is to meet customer demands and uphold professionalism and excellent service to deliver on our clients' entrusted projects actively.",
    home_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

const homeData = reactive({ ...homeDataOld[0] })

// carousel table data
const carouselDataOld = ref([
  {
    carousel_no: 1,
    carousel_pic: '/img/HomeView/banner1.png'
  },
  {
    carousel_no: 2,
    carousel_pic: '/img/HomeView/banner2.png'
  },
  {
    carousel_no: 3,
    carousel_pic: '/img/HomeView/banner3.png'
  },
  {
    carousel_no: 4,
    carousel_pic: '/img/HomeView/banner4.png'
  }
])

// 初始化 carouselData
const carouselData = ref([...carouselDataOld.value])

const clientDataOld = ref([
  {
    client_no: 1,
    client_pic: '/img/Client/Client_1.png'
  },
  {
    client_no: 2,
    client_pic: '/img/Client/Client_2.png'
  },
  {
    client_no: 3,
    client_pic: '/img/Client/Client_3.png'
  },
  {
    client_no: 4,
    client_pic: '/img/Client/Client_4.png'
  },
  {
    client_no: 5,
    client_pic: '/img/Client/Client_5.png'
  },
  {
    client_no: 6,
    client_pic: '/img/Client/Client_6.png'
  },
  {
    client_no: 7,
    client_pic: '/img/Client/Client_7.png'
  },
  {
    client_no: 8,
    client_pic: '/img/Client/Client_8.png'
  },
  {
    client_no: 9,
    client_pic: '/img/Client/Client_9.png'
  },
  {
    client_no: 10,
    client_pic: '/img/Client/Client_10.png'
  },
  {
    client_no: 11,
    client_pic: '/img/Client/Client_11.png'
  },
  {
    client_no: 12,
    client_pic: '/img/Client/Client_12.png'
  }
])

// 初始化 clientData
const clientData = ref([...clientDataOld.value])

// footer 儲存按鈕
const saveData = () => {
  // 过滤掉 clientData 中 client_pic 为空的项
  clientData.value = clientData.value.filter(
    (item) => item.client_pic && item.client_pic.trim() !== ''
  )

  // 更新每个客户的 client_no 为其索引值 + 1
  clientData.value.forEach((item, index) => {
    item.client_no = index + 1
  })

  // 更新 homeData 的时间戳
  homeData.home_datetime = getCurrentDateTime()

  // 打印数据到控制台
  console.log(homeData)
  console.log(carouselData.value)
  console.log(clientData.value) // 现在打印的是更新后的 clientData

  // 发送更新后的 clientData 到后端
  // 这里需要添加您的代码来处理数据发送
}

// footer 取消按鈕
const resetData = () => {
  Object.assign(homeData, homeDataOld[0])
  carouselData.value = [...carouselDataOld.value]
  clientData.value = [...clientDataOld.value]
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
const titleLength = computed(() => homeData.home_title.length)
const titleEnLength = computed(() => homeData.home_title_en.length)
const textLength = computed(() => homeData.home_txt.length)
const textEnLength = computed(() => homeData.home_txt_en.length)

// 處理 carousel 檔案上傳
// const handleFileUpload = (event, index) => {
//   const file = event.target.files[0]
//   if (file) {
//     // 假設要將檔案的 URL 存儲到 carouselData 中
//     // 這裡需要處理檔案上傳並獲取 URL
//     // 以下是一個示例 URL，您需要替換為實際的 URL
//     const uploadedUrl = URL.createObjectURL(file)
//     carouselData.value[index] = uploadedUrl
//   }
// }
const handleFileUpload = (event, index) => {
  const file = event.target.files[0]
  if (file) {
    const uploadedUrl = URL.createObjectURL(file)
    // 只更新 client_pic 属性
    carouselData.value[index].carousel_pic = uploadedUrl
  }
}

// 處理 client 檔案上傳
const handleClientFileUpload = (event, index) => {
  const file = event.target.files[0]
  if (file) {
    const uploadedUrl = URL.createObjectURL(file)
    // 只更新 client_pic 属性
    clientData.value[index].client_pic = uploadedUrl
  }
}

// 打開新視窗顯示圖片
const openImageInNewWindow = (imageUrl) => {
  window.open(imageUrl, '_blank')
}

// carousel 圖片預覽 變量
const showCarousel = ref(false)

// client 圖片預覽 變量
const showClient = ref(false)

// 新增客戶圖片的方法
const addNewClient = () => {
  clientData.value.push({ client_no: null, client_pic: '' })
}

// 刪除客戶圖片的方法
const deleteClient = (clientNo) => {
  // 找到具有指定 client_no 的項目索引
  const index = clientData.value.findIndex((item) => item.client_no === clientNo)

  // 如果找到有效索引，則從陣列中移除該項目
  if (index !== -1) {
    clientData.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="backend-block-flex">
    <!-- ? home 首頁-->
    <!-- 首頁大標題 -->
    <div class="backend-page-title">首頁</div>

    <!-- * banner 區塊標題 & 看圖片按鈕 -->
    <div class="backend-block-title">
      banner
      <button
        class="backend-look-pic-btn"
        :class="{ 'backend-look-pic-btn-focus': showCarousel }"
        @click="showCarousel = !showCarousel"
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

    <!-- * 內容區域 -->
    <label
      >標題
      <span class="label-note">* 最多 20 字 ({{ titleLength }} / 20)</span>
      <input
        type="text"
        maxlength="20"
        v-model="homeData.home_title"
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
        v-model="homeData.home_title_en"
        class="input-backend"
        placeholder="標題_英文"
      />
    </label>

    <label
      >文字
      <span class="label-note">* 最多 100 字 </span>
      <span class="label-note">({{ textLength }} / 100)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="100"
        v-model="homeData.home_txt"
        class="input-backend"
        placeholder="文字"
      >
      </textarea>
    </label>

    <label
      >文字_英文
      <span class="label-note">* 最多 1000 字 </span>
      <span class="label-note">({{ textEnLength }} / 1000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="1000"
        v-model="homeData.home_txt_en"
        class="input-backend"
        placeholder="文字"
      >
      </textarea>
    </label>

    <!-- ? carousel 輪播圖 -->
    <div class="backend-block-flex">
      <div v-for="(item, index) in carouselData" :key="index" class="flex flex-col gap-1">
        <label>
          輪播圖片 {{ item.carousel_no }}
          <!-- 顯示目前資料庫中的檔案名稱 -->
          <!-- <span class="label-note">目前檔案：{{ item }}</span> -->
          <span class="label-note"
            >* 畫質要清晰，最佳尺寸 1280*832；圖片先壓縮再上傳，壓縮圖片點我</span
          >
        </label>

        <div>
          <input
            type="file"
            @change="(event) => handleFileUpload(event, index)"
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-1/2 cursor-pointer" v-show="showCarousel">
          <img
            :src="item.carousel_pic"
            alt="Carousel Preview"
            class="pic"
            @click="() => openImageInNewWindow(item.carousel_pic)"
          />
        </div>
      </div>
    </div>

    <!-- 區塊分隔線 -->
    <hr class="backend-block-hr" />

    <!-- ? client 代表客戶 -->
    <!-- * client 區塊標題 & 看圖片按鈕 -->
    <div class="backend-block-title">
      代表客戶
      <button
        class="backend-look-pic-btn"
        :class="{ 'backend-look-pic-btn-focus': showClient }"
        @click="showClient = !showClient"
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

    <div class="backend-block-flex">
      <div v-for="(item, index) in clientData" :key="index" class="flex flex-col gap-1">
        <label>
          代表客戶logo {{ item.client_no }}
          <span class="label-note">* 畫質要清晰；圖片先壓縮再上傳 </span>
        </label>

        <div class="flex gap-2">
          <input
            type="file"
            @change="(event) => handleClientFileUpload(event, index)"
            class="input-backend"
          />

          <!-- 刪除按鈕 -->
          <button @click="deleteClient(item.client_no)">
            <!-- * trash -->
            <svg
              class="icon-red-hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- 預覽圖片 -->
        <div class="w-1/5 cursor-pointer" v-show="showClient">
          <img
            :src="item.client_pic"
            alt="no image"
            class="pic"
            @click="() => openImageInNewWindow(item.client_pic)"
          />
        </div>
      </div>

      <!-- 新增按鈕 -->
      <button @click="addNewClient" class="btn-blue-border">新增一筆</button>
    </div>

    <!-- ? footer -->
    <div class="backend-footer">
      <div class="flex gap-2">
        最後更新 :
        <div v-text="homeData.home_datetime"></div>
        <div v-text="homeData.staff_no"></div>
      </div>
      <div class="flex gap-3">
        <button @click="resetData" class="btn-white">取消</button>
        <button @click="saveData" class="btn-blue">儲存</button>
      </div>
    </div>
  </div>
</template>

<style></style>
