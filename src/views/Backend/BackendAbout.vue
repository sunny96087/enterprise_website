<script setup>
import { ref, computed, reactive } from 'vue'

// about table data
const aboutDataOld = [
  {
    about_no: 1,
    about_title: '關於誠諾',
    about_title_en: 'About Us',
    about_title_pic: '/img/AboutView/banner.png',
    about_block1_pic: '/img/AboutView/about_pic1.png',
    about_block1_txt1:
      '「以誠為本，以諾為策」為公司宗旨，以永續經營為理念，成立於2006年1月，目前資本額9000萬元，員工65人，為一家電機工程公司並具甲級電器承裝及甲級水管承裝業資格，主要業務範圍為保護電驛相關設備之設計、安裝、測試；發電機機組保護電驛安裝施工；特高壓及高壓GIS安裝維護；電力監控系統規畫施工；CP設計組裝；特高壓及高壓開關配線、施工安裝組裝、測試、到維護皆可以己力完成。',

    about_block1_txt1_en:
      "Our motto is ' Founded on Honesty.Promise Strong Policy.' With a focus on sustainable operation, our company was established in January 2006, registered capital of 90 million NT dollars and a staff of 60 employees. We are a qualified electrical engineering company with Class A licenses for Electric Appliance Construction and Pipe Construction. Our main scope of business includes the design, installation, and testing of protection relay equipment, installation of generator unit protection relays, installation and maintenance of extra-high voltage and high-voltage GIS (Gas-Insulated Switchgear), planning and construction of power SCADA systems, RCP (Relay & Control Panel) design and assembly, high-voltage switchgear wiring, installation, assembly, testing, and maintenance.",
    about_block1_txt2:
      '本公司自成立以來承攬全國各大企業工程 涵蓋全國500多件，各項工程皆以高品質服務，達到品質至上、客戶滿意為目標，秉持專業的設計、優良的施工，主動積極完成客戶所託，頗受客戶之好評。 另外，公司也相當注重員工工作環境及安全，並專注培養員工技能及相關技術，提升公司員工專業技術能力，在每個工程均能以最高品質及嚴格遵守勞工安全衛生規則要求下完成。',
    about_block1_txt2_en:
      "Since our establishment, we have undertaken over 500 projectsfor major enterprises across the country. We are committed to providing high-quality services with a focus on prioritizing quality and customer satisfaction. We adhere to professional design and excellent construction practices, actively striving to meet our clients' entrusted tasks, which has earned us positive feedback from our clients. Furthermore, we places great emphasis on the working environment and safety of our employees, not only dedicating to nurturing employee skills and relevant technical knowledge but also to enhance their professional capabilities. In every project, we ensure the highest quality and strict compliance with labor safety and health regulations.",
    about_block2_pic: '/img/AboutView/about_pic2_tw.png',
    about_block2_pic_en: '/img/AboutView/about_pic2_en.png',
    about_block2_txt1:
      '誠諾秉持著「以誠為本，以諾為策」的理念經營。 對於加入公司的員工，誠諾希望每一位夥伴都在工作中獲得成就感並實現自我價值，相比學歷和經歷，誠諾更重視員工的工作態度與積極度。本公司員工總數65人，中高齡員工佔26%，不分年齡、經驗、是否為本學科生，都全額補助輔導考取相關專業證照，並讓公司內部有經驗的在職員工舉辦教育訓練，與新進員工一起努力教學相長，使全體員工在職場上都更具有競爭力。',
    about_block2_txt1_en:
      "CNETC operates with the philosophy of 'Founded on Honesty. Promise Strong Policy .' For employees who join the company, CNETC hopes that every partner can experience a sense of accomplishment and realize their self-worth in their work. Rather than emphasizing academic background and experience, CNETC places greater importance on employees' work attitudes and enthusiasm. Currently we employ a total of 65 people, with 26% being middle-aged or older. Regardless of age, experience, or whether they have a background in the relevant field, all employees receive full subsidies and guidanceto obtain relevant professional certifications. CNETC also organizes educational training led by experienced in-house staff, fostering a culture of continuous learning and growth among both new and existing employees, enhancing their competitiveness in the workplace.",
    about_block2_txt2:
      '同時誠諾也非常注重「家庭」的功能與價值，我們相信，一個人的成功，需要家庭的支持，因此，公司聚餐、員工旅遊等福利，公司皆歡迎員工家屬一同參與。',
    about_block2_txt2_en:
      "Simultaneously, CNETC places significant importance on the 'family' function and value. The company believes that an individual's success requires the support of their family. Therefore, CNETC welcomes employees' family members to participate in company gatherings, employee trips, and other benefits and activities.",
    about_datetime: '112/01/02 13:22:51',
    staff_no: 1
  }
]

const aboutData = reactive({ ...aboutDataOld[0] })

// footer 儲存按鈕
const saveData = () => {
  // 更新 homeData 的時間戳
  aboutData.about_datetime = getCurrentDateTime()

  // 打印數據到控制台
  console.log(aboutData)

  // 這裡需要添加您的代碼來處理數據發送
}

// footer 取消按鈕
const resetData = () => {
  Object.assign(aboutData, aboutDataOld[0])
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
const titleLength = computed(() => aboutData.about_title.length)
const titleEnLength = computed(() => aboutData.about_title_en.length)
const block1Txt1Length = computed(() => aboutData.about_block1_txt1.length)
const block1Txt1EnLength = computed(() => aboutData.about_block1_txt1_en.length)

const block1Txt2Length = computed(() => aboutData.about_block1_txt2.length)
const block1Txt2EnLength = computed(() => aboutData.about_block1_txt2_en.length)

const block2Txt1Length = computed(() => aboutData.about_block2_txt1.length)
const block2Txt1EnLength = computed(() => aboutData.about_block2_txt1_en.length)

const block2Txt2Length = computed(() => aboutData.about_block2_txt2.length)
const block2Txt2EnLength = computed(() => aboutData.about_block2_txt2_en.length)

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

// about 圖片預覽 變量
const showAbout = ref(false)
</script>

<template>
  <div class="backend-block-flex">
    <!-- 首頁大標題 -->
    <div class="backend-page-title">關於誠諾</div>

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
          v-model="aboutData.about_title"
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
          v-model="aboutData.about_title_en"
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
            @change="(event) => handleFileUpload(event, null, aboutData, 'about_title_pic')"
            class="input-backend"
          />
        </div>

        <!-- 預覽圖片 -->
        <div class="w-full cursor-pointer" v-show="showBanner">
          <img
            :src="aboutData.about_title_pic"
            alt="image Preview"
            class="pic"
            @click="() => openImageInNewWindow(aboutData.about_title_pic)"
          />
        </div>
      </div>
    </div>

    <!-- 區塊分隔線 -->
    <hr class="backend-block-hr" />

    <!-- * about 內容區域 -->
    <div class="backend-block-flex">
      <!-- * 標題 & 看圖片按鈕 -->
      <div class="backend-block-title">
        關於誠諾
        <button
          class="backend-look-pic-btn"
          :class="{ 'backend-look-pic-btn-focus': showAbout }"
          @click="showAbout = !showAbout"
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
    </div>

    <!-- * 區塊 1 -->
    <label
      >區塊1文字1
      <span class="label-note">* 最多 1000 字 ({{ block1Txt1Length }} / 1000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="1000"
        v-model="aboutData.about_block1_txt1"
        class="input-backend"
        placeholder="區塊1文字1"
      ></textarea>
    </label>

    <label
      >區塊1文字1_英文
      <span class="label-note">* 最多 2000 字 ({{ block1Txt1EnLength }} / 2000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="2000"
        v-model="aboutData.about_block1_txt1_en"
        class="input-backend"
        placeholder="區塊1文字1_英文"
      ></textarea>
    </label>

    <label
      >區塊1文字2
      <span class="label-note">* 最多 1000 字 ({{ block1Txt2Length }} / 1000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="1000"
        v-model="aboutData.about_block1_txt2"
        class="input-backend"
        placeholder="區塊1文字2"
      ></textarea>
    </label>

    <label
      >區塊1文字2_英文
      <span class="label-note">* 最多 2000 字 ({{ block1Txt2EnLength }} / 2000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="2000"
        v-model="aboutData.about_block1_txt2_en"
        class="input-backend"
        placeholder="區塊1文字2_英文"
      ></textarea>
    </label>

    <div class="input-backend-pic-flex">
      <label>
        區塊1圖片
        <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
      </label>

      <div>
        <input
          type="file"
          @change="(event) => handleFileUpload(event, null, aboutData, 'about_block1_pic')"
          class="input-backend"
        />
      </div>

      <!-- 預覽圖片 -->
      <div class="w-1/2 cursor-pointer" v-show="showAbout">
        <img
          :src="aboutData.about_block1_pic"
          alt="image Preview"
          class="pic"
          @click="() => openImageInNewWindow(aboutData.about_block1_pic)"
        />
      </div>
    </div>

    <!-- 區塊分隔線 -->
    <hr class="backend-block-hr" />

    <!-- * 區塊 2 -->
    <label
      >區塊2文字1
      <span class="label-note">* 最多 1000 字 ({{ block2Txt1Length }} / 1000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="1000"
        v-model="aboutData.about_block2_txt1"
        class="input-backend"
        placeholder="區塊1文字1"
      ></textarea>
    </label>

    <label
      >區塊2文字1_英文
      <span class="label-note">* 最多 2000 字 ({{ block2Txt1EnLength }} / 2000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="2000"
        v-model="aboutData.about_block2_txt1_en"
        class="input-backend"
        placeholder="區塊2文字1_英文"
      ></textarea>
    </label>

    <label
      >區塊2文字2
      <span class="label-note">* 最多 1000 字 ({{ block2Txt2Length }} / 1000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="1000"
        v-model="aboutData.about_block2_txt2"
        class="input-backend"
        placeholder="區塊2文字2"
      ></textarea>
    </label>

    <label
      >區塊2文字2_英文
      <span class="label-note">* 最多 2000 字 ({{ block2Txt2EnLength }} / 2000)</span>
      <textarea
        v-autogrow
        type="text"
        maxlength="2000"
        v-model="aboutData.about_block2_txt2_en"
        class="input-backend"
        placeholder="區塊2文字2_英文"
      ></textarea>
    </label>

    <div class="input-backend-pic-flex">
      <label>
        區塊2圖片
        <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
      </label>

      <div>
        <input
          type="file"
          @change="(event) => handleFileUpload(event, null, aboutData, 'about_block2_pic')"
          class="input-backend"
        />
      </div>

      <!-- 預覽圖片 -->
      <div class="w-1/2 cursor-pointer" v-show="showAbout">
        <img
          :src="aboutData.about_block2_pic"
          alt="image Preview"
          class="pic"
          @click="() => openImageInNewWindow(aboutData.about_block2_pic)"
        />
      </div>
    </div>

    <div class="input-backend-pic-flex">
      <label>
        區塊2圖片_英文
        <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
      </label>

      <div>
        <input
          type="file"
          @change="(event) => handleFileUpload(event, null, aboutData, 'about_block2_pic_en')"
          class="input-backend"
        />
      </div>

      <!-- 預覽圖片 -->
      <div class="w-1/2 cursor-pointer" v-show="showAbout">
        <img
          :src="aboutData.about_block2_pic_en"
          alt="image Preview"
          class="pic"
          @click="() => openImageInNewWindow(aboutData.about_block2_pic_en)"
        />
      </div>
    </div>

    <!-- ? footer -->
    <div class="backend-footer">
      <div class="flex gap-2">
        最後更新 :
        <div v-text="aboutData.about_datetime"></div>
        <div v-text="aboutData.staff_no"></div>
      </div>
      <div class="flex gap-3">
        <button @click="resetData" class="btn-white">取消</button>
        <button @click="saveData" class="btn-blue">儲存</button>
      </div>
    </div>
  </div>
</template>

<style></style>
