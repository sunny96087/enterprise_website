<!-- BackendCompanyData.vue -->
<script setup>
import { computed, reactive } from 'vue'

// company table data
const companyDataOld = [
  {
    company_no: 1,
    company_name_tw: '誠諾工程技術股份有限公司',
    company_name_en: 'CHENG-NUO ENGINEERING TECHNOLOGY CO., LTD.',
    company_tel: '07-7223777',
    company_fax: '07-7229777',
    company_add: '高雄市鳳山區武林路51號',
    company_add_en: 'No. 51, Wulin Rd., Fengshan Dist., Kaohsiung City , Taiwan (R.O.C.)',
    company_email: 'cnetcsales@mx.cnetc.tw',
    company_joblink: 'https://www.1111.com.tw/corp/51350659/#c4',
    company_logo_pic: '/img/CompanyData/logo.svg',
    company_footer_pic: '/img/CompanyData/company_footer_pic.svg',
    company_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

const companyData = reactive({ ...companyDataOld[0] })

// footer 儲存按鈕
const saveData = () => {
  // 更新 homeData 的時間戳
  companyData.company_datetime = getCurrentDateTime()

  // 打印數據到控制台
  console.log(companyData)

  // 這裡需要添加您的代碼來處理數據發送
}

// footer 取消按鈕
const resetData = () => {
  Object.assign(companyData, companyDataOld[0])
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
const companyNameTwLength = computed(() => companyData.company_name_tw.length)
const companyNameEnLength = computed(() => companyData.company_name_en.length)

const companyTelLength = computed(() => companyData.company_tel.length)
const companyFaxLength = computed(() => companyData.company_fax.length)

const companyAddLength = computed(() => companyData.company_add.length)
const companyAddEnLength = computed(() => companyData.company_add_en.length)

const companyEmailLength = computed(() => companyData.company_email.length)

const companyJoblinkLength = computed(() => companyData.company_joblink.length)

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
</script>

<template>
  <div class="backend-block-flex">
    <!-- 首頁大標題 -->
    <div class="backend-page-title">公司資料</div>

    <!-- * 內容區域 -->
    <div class="backend-block-flex">
      <label
        >公司名稱_中
        <span class="label-note">* 最多 50 字 ({{ companyNameTwLength }} / 50)</span>
        <input
          type="text"
          maxlength="50"
          v-model="companyData.company_name_tw"
          class="input-backend"
          placeholder="公司名稱_中"
        />
      </label>

      <label
        >公司名稱_英
        <span class="label-note">* 最多 255 字 ({{ companyNameEnLength }} / 255)</span>
        <input
          type="text"
          maxlength="255"
          v-model="companyData.company_name_en"
          class="input-backend"
          placeholder="公司名稱_英"
        />
      </label>

      <label
        >公司電話
        <span class="label-note">* 最多 20 字 ({{ companyTelLength }} / 20)</span>
        <input
          type="text"
          maxlength="20"
          v-model="companyData.company_tel"
          class="input-backend"
          placeholder="公司電話"
        />
      </label>

      <label
        >公司傳真
        <span class="label-note">* 最多 20 字 ({{ companyFaxLength }} / 20)</span>
        <input
          type="text"
          maxlength="20"
          v-model="companyData.company_fax"
          class="input-backend"
          placeholder="公司傳真"
        />
      </label>

      <label
        >公司地址
        <span class="label-note">* 最多 50 字 ({{ companyAddLength }} / 50)</span>
        <input
          type="text"
          maxlength="50"
          v-model="companyData.company_add"
          class="input-backend"
          placeholder="公司地址"
        />
      </label>

      <label
        >公司地址_英
        <span class="label-note">* 最多 255 字 ({{ companyAddEnLength }} / 255)</span>
        <input
          type="text"
          maxlength="255"
          v-model="companyData.company_add_en"
          class="input-backend"
          placeholder="公司地址_英"
        />
      </label>
      <label
        >公司email
        <span class="label-note">* 最多 50 字 ({{ companyEmailLength }} / 50)</span>
        <input
          type="text"
          maxlength="50"
          v-model="companyData.company_email"
          class="input-backend"
          placeholder="公司email"
        />
      </label>
      <label
        >招募連結
        <span class="label-note">* 最多 255 字 ({{ companyJoblinkLength }} / 255)</span>
        <input
          type="text"
          maxlength="255"
          v-model="companyData.company_joblink"
          class="input-backend"
          placeholder="招募連結"
        />
      </label>

      <!-- * 圖片 -->
      <div class="input-backend-pic-flex">
        <label>
          導航選單 LOGO
          <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
        </label>

        <div>
          <input
            type="file"
            @change="(event) => handleFileUpload(event, null, companyData, 'company_logo_pic')"
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-1/2 cursor-pointer">
          <img
            :src="companyData.company_logo_pic"
            alt="image Preview"
            class="pic"
            @click="() => openImageInNewWindow(companyData.company_logo_pic)"
          />
        </div>
      </div>

      <div class="input-backend-pic-flex">
        <label>
          頁尾 LOGO
          <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳；灰底為背景以方便識別圖片</span>
        </label>

        <div>
          <input
            type="file"
            @change="(event) => handleFileUpload(event, null, companyData, 'company_footer_pic')"
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-1/2 cursor-pointer bg-gray-300">
          <img
            :src="companyData.company_footer_pic"
            alt="image Preview"
            class="pic"
            @click="() => openImageInNewWindow(companyData.company_footer_pic)"
          />
        </div>
      </div>
    </div>

    <!-- ? footer -->
    <div class="backend-footer">
      <div class="flex gap-2">
        最後更新 :
        <div v-text="companyData.company_datetime"></div>
        <div v-text="companyData.staff_no"></div>
      </div>
      <div class="flex gap-3">
        <button @click="resetData" class="btn-white">取消</button>
        <button @click="saveData" class="btn-blue">儲存</button>
      </div>
    </div>
  </div>
</template>

<style></style>
