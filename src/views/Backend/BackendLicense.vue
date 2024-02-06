<!-- BackendLicense.vue -->
<script setup>
import { ref, computed, reactive, watch } from 'vue'

// license_page table data
const licensePageDataOld = [
  {
    license_page_no: 1,
    license_page_title: '專業技術證照',
    license_page_title_en: 'Professional Technical Certifications',
    license_page_title_pic: '/img/LicenseView/banner.png',
    license_page_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

const licensePageData = reactive({ ...licensePageDataOld[0] })

// license table data
const licenseDataOld = [
  {
    license_no: 1,
    license_order: 1,
    license_name: '勞安衛生管理員',
    license_name_en: 'Occupational Safety and Health Management Personnel',
    license_num: 2
  },
  {
    license_no: 2,
    license_order: 2,
    license_name: '施工架組配作業主管',
    license_name_en: 'Construction Scaffold Assembly Supervisor',
    license_num: 6
  },
  {
    license_no: 3,
    license_order: 3,
    license_name: '營造業甲種職業安全衛生業務主管',
    license_name_en:
      'Class A Occupational Safety and Health Supervisor Education and Training - Construction Industry',
    license_num: 34
  },
  {
    license_no: 4,
    license_order: 4,
    license_name: '甲種職業安全衛生業務主管',
    license_name_en: 'Class A Occupational Safety and Health Supervisor',
    license_num: '11'
  },
  {
    license_no: 5,
    license_order: 5,
    license_name: '職業安全衛生管理乙級',
    license_name_en: 'Occupational Safety and Health Management - Level B',
    license_num: '9'
  },
  {
    license_no: 6,
    license_order: 6,
    license_name: '變電設備裝修丙級',
    license_name_en: 'Substation Facility Installation and Maintenance - Level C',
    license_num: '56'
  },
  {
    license_no: 7,
    license_order: 7,
    license_name: '變電設備裝修乙級',
    license_name_en: 'Substation Facility Installation and Maintenance - Level B',
    license_num: '24'
  },
  {
    license_no: 8,
    license_order: 8,
    license_name: '配電電纜裝修丙級',
    license_name_en: 'Underground Cable - Level C',
    license_num: '4'
  },
  {
    license_no: 9,
    license_order: 9,
    license_name: '配電電纜裝修乙級',
    license_name_en: 'Underground Cable - Level B',
    license_num: '9'
  },
  {
    license_no: 10,
    license_order: 10,
    license_name: '工業配線丙級',
    license_name_en: 'Industrial Wiring - Level C',
    license_num: '14'
  },
  {
    license_no: 11,
    license_order: 11,
    license_name: '工業配線乙級',
    license_name_en: 'Industrial Wiring - Level B',
    license_num: '9'
  },
  {
    license_no: 12,
    license_order: 12,
    license_name: '室內配線丙級',
    license_name_en: 'Commercial Wiring – Level C',
    license_num: '14'
  },
  {
    license_no: 13,
    license_order: 13,
    license_name: '室內配線乙級',
    license_name_en: 'Commercial Wiring – Level B',
    license_num: '9'
  },
  {
    license_no: 14,
    license_order: 14,
    license_name: '品管人員機電',
    license_name_en: 'Quality Control Personnel - Mechanical and Electrical',
    license_num: '24'
  },
  {
    license_no: 15,
    license_order: 15,
    license_name: '自來水管配管丙級',
    license_name_en: 'Water Supply Piping- Level C',
    license_num: '8'
  },
  {
    license_no: 16,
    license_order: 16,
    license_name: '固定式起重機操作-架空式-機上操作',
    license_name_en: 'Fixed Crane Operation - Overhead - Onboard Operation',
    license_num: '9'
  },
  {
    license_no: 17,
    license_order: 17,
    license_name: '露天開挖作業主管',
    license_name_en: 'Outdoor Excavation Operation Supervisor',
    license_num: '8'
  },
  {
    license_no: 18,
    license_order: 18,
    license_name: '起重吊掛作業',
    license_name_en: 'Crane Lifting and Hoisting Operation',
    license_num: '3'
  },
  {
    license_no: 19,
    license_order: 19,
    license_name: '缺氧作業主管',
    license_name_en: 'Anoxic Work Supervisor',
    license_num: '13'
  },
  {
    license_no: 20,
    license_order: 20,
    license_name: '擋土支撐作業主管',
    license_name_en: 'Soil Retaining Support Supervisor',
    license_num: '11'
  },
  {
    license_no: 21,
    license_order: 21,
    license_name: '急救人員',
    license_name_en: 'First Aid Personnel',
    license_num: '10'
  }
]

const licenseData = ref([...licenseDataOld])

// footer 儲存按鈕
const saveData = () => {
  // 檢查每個項目的必要欄位是否為空
  for (let item of licenseData.value) {
    if (!item.license_name || !item.license_name_en || !item.license_num) {
      alert('請確實填寫所有欄位，不需要的空欄位請刪除再儲存！')
      return // 停止執行函數
    }
  }

  // 更新 license_order
  licenseData.value.forEach((item, index) => {
    item.license_order = index + 1
  })

  // 更新 licensePageData 的時間戳
  licensePageData.license_page_datetime = getCurrentDateTime()

  // 打印數據到控制台
  console.log(licensePageData)
  console.log(licenseData)

  // 添加您的數據發送邏輯
  // ...
}

// footer 取消按鈕
const resetData = () => {
  Object.assign(licensePageData, { ...licensePageDataOld[0] })
  licenseData.value = JSON.parse(JSON.stringify(licenseDataOld))

  // forceUpdate() // 強制重新渲染組件
  console.log(licenseData)
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
const titleLength = computed(() => licensePageData.license_page_title.length)
const titleEnLength = computed(() => licensePageData.license_page_title_en.length)

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

// 打開新視窗顯示圖片
const openImageInNewWindow = (imageUrl) => {
  window.open(imageUrl, '_blank')
}

// banner 圖片預覽 變量
const showBanner = ref(false)

// 新增一筆證照資料
const addNewLicense = () => {
  const newLicense = {
    license_no: licenseData.value?.length + 1 || 1,
    license_order: licenseData.value?.length + 1 || 1,
    license_name: '',
    license_name_en: '',
    license_num: 1
  }
  licenseData.value?.push(newLicense)
}

// 刪除一筆證照資料
const deleteLicense = (licenseNo) => {
  // 刪除指定的項目
  licenseData.value = licenseData.value.filter((item) => item.license_no !== licenseNo)
}

// 檢查 license_num 不得為負數
watch(
  licenseData,
  (newVal) => {
    newVal.forEach((item) => {
      if (item.license_num < 0) {
        item.license_num = 0 // 或其他您希望的最小值
      }
    })
  },
  { deep: true }
)
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">{{ licensePageData.license_page_title }}</div>

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
        <span class="label-note">* 最多 20 字 ({{ titleLength }} / 20)</span>
        <input
          type="text"
          maxlength="20"
          v-model="licensePageData.license_page_title"
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
          v-model="licensePageData.license_page_title_en"
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
            @change="
              (event) => handleFileUpload(event, null, licensePageData, 'license_page_title_pic')
            "
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-full cursor-pointer" v-show="showBanner">
          <img
            :src="licensePageData.license_page_title_pic"
            alt="image Preview"
            class="pic"
            @click="() => openImageInNewWindow(licensePageData.license_page_title_pic)"
          />
        </div>
      </div>
    </div>

    <!-- 區塊分隔線 -->
    <hr class="backend-block-hr" />

    <!-- * 專業技術證照 區塊標題 -->
    <div class="backend-block-title">{{ licensePageData.license_page_title }}</div>

    <!-- * 專業技術證照 內容區域 -->
    <div>
      <!-- * table header -->
      <div class="grid grid-cols-10 gap-2">
        <label class="text-gray-700 col-span-1"
          >項次
          <!-- <span class="label-note">* 自動帶入</span> -->
        </label>
        <label class="text-gray-700 col-span-3"
          >證照名稱
          <span class="label-note">* 最多 20 字</span>
        </label>
        <label class="text-gray-700 col-span-4"
          >證照名稱_英文
          <span class="label-note">* 最多 255 字</span>
        </label>
        <label class="text-gray-700 col-span-1"
          >張數
          <span class="label-note">(張)</span>
        </label>
      </div>

      <!-- * table body -->
      <div class="grid grid-cols-10 gap-2" v-for="item in licenseData" :key="item.license_no">
        <input
          type="number"
          v-model="item.license_order"
          class="input-backend col-span-1 my-[6px] text-center bg-gray-100"
          placeholder="項次"
          readonly
          disabled
        />
        <input
          type="text"
          v-model="item.license_name"
          class="input-backend col-span-3 my-[6px]"
          :class="{
            'input-null-error': !item.license_name
          }"
          placeholder="證照名稱"
        />
        <input
          type="text"
          v-model="item.license_name_en"
          class="input-backend col-span-4 my-[6px]"
          :class="{
            'input-null-error': !item.license_name_en
          }"
          placeholder="證照名稱_英文"
        />
        <input
          type="number"
          v-model="item.license_num"
          class="input-backend col-span-1 my-[6px]"
          :class="{
            'input-null-error': !item.license_num
          }"
          placeholder="證照張數"
          min="0"
        />
        <!-- 刪除按鈕 -->
        <button @click="deleteLicense(item.license_no)" class="flex justify-center items-center">
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

      <!-- * 新增按鈕 -->
      <button @click="addNewLicense" class="btn-blue-border mt-1">新增一筆資料</button>
    </div>

    <!-- ? footer -->
    <div class="backend-footer">
      <div class="flex gap-2">
        最後更新 :
        <div v-text="licensePageData.license_page_datetime"></div>
        <div v-text="licensePageData.staff_no"></div>
      </div>
      <div class="flex gap-3">
        <button @click="resetData" class="btn-white">取消</button>
        <button @click="saveData" class="btn-blue">儲存</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-backend.input-null-error {
  border-color: var(--color-red);
}
</style>
