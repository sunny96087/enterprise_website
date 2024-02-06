<script setup>
import { ref, computed, watch } from 'vue'

// 欄位是否被點擊
const nameFieldTouched = ref(false)
const phoneFieldTouched = ref(false)
const emailFieldTouched = ref(false)
const companyFieldTouched = ref(false)
const txtFieldTouched = ref(false)

const showPopup = ref(false)

// 聯絡我們
const contactInfo = ref({
  contact_no: 1,
  contact_title: '聯絡我們',
  contact_title_pic: '/img/ContactView/banner.png',
  contact_txt: '若有任何需要協助的地方，歡迎透過表單留下您的聯絡資訊，我們將盡速與您聯繫，謝謝。',
  contact_maplink:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.061418876145!2d120.33262997554037!3d22.614181531444594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04aed348af67%3A0x495995d68d25d984!2z6Kqg6Ku-5bel56iL5oqA6KGT6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1702365377524!5m2!1szh-TW!2stw',
  contact_pop_title: '已成功送出表單，我們將會在24小時內致電與您聯繫！',
  contact_pop_txt: '如有急件，請撥打07-7223777'
})

// 表單回饋
const feedbackInfo = ref({
  feedback_no: 1,
  feedback_name: '',
  feedback_phone: '',
  feedback_company: '',
  feedback_email: '',
  feedback_txt: '',
  feedback_find: '',
  feedback_state: 0,
  feedback_datetime: ''
})

// 公司資料
const companyInfo = [
  {
    company_no: 1,
    company_tel: '07-7223777',
    company_fax: '07-7229777',
    company_email: 'cnetcsales@mx.cnetc.tw'
  }
]

// 錯誤訊息
const errorMessages = ref({
  name: { required: '', minLength: '' },
  phone: { required: '', pattern: '' },
  email: { required: '', pattern: '' },
  company: { required: '', pattern: '' },
  txt: { required: '' }
})

// 送出時，表單驗證
const isFormValid = computed(() => {
  const { feedback_name, feedback_phone, feedback_company, feedback_email, feedback_txt } =
    feedbackInfo.value

  errorMessages.value = {
    name: { required: '', minLength: feedback_name.length < 2 ? '姓名至少需要2個字。' : '' },
    phone: { required: '', minLength: feedback_phone.length < 6 ? '請填入有效的電話。' : '' },
    company: {
      required: '',
      minLength: feedback_company.length < 2 ? '公司至少需要2個字。' : ''
    },
    email: {
      required: '',
      pattern: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(feedback_email)
        ? '請填入有效的電子信箱。'
        : ''
    },
    txt: { required: feedback_txt.length === 0 ? '此欄位為必填。' : '' }
  }

  return Object.values(errorMessages.value).every((errors) =>
    Object.values(errors).every((error) => !error)
  )
})

// 監視表單資料變動
watch(() => [
  feedbackInfo.value.feedback_name,
  feedbackInfo.value.feedback_phone,
  feedbackInfo.value.feedback_company,
  feedbackInfo.value.feedback_email,
  feedbackInfo.value.feedback_txt
])

// input監視 驗證必填、長短
// 驗證姓名
const validateName = () => {
  const nameValue = feedbackInfo.value.feedback_name
  errorMessages.value.name.required = !nameValue ? '此欄位為必填。' : ''
  errorMessages.value.name.minLength = nameValue.length >= 2 ? '' : '姓名至少需要2個字。'

  // 這裡判斷是否有 `required` 錯誤，如果有則清除 `minLength` 錯誤
  if (errorMessages.value.name.required) {
    errorMessages.value.name.minLength = ''
  }
}

// 驗證電話
const validatePhone = () => {
  const phoneValue = feedbackInfo.value.feedback_phone

  errorMessages.value.phone.required = !phoneValue ? '此欄位為必填。' : ''
  errorMessages.value.phone.minLength = phoneValue.length < 6 ? '請輸入有效的電話。' : ''
  if (errorMessages.value.phone.required) {
    errorMessages.value.phone.minLength = ''
  }
}

// 驗證公司
const validateCompany = () => {
  errorMessages.value.company.required = !feedbackInfo.value.feedback_company
    ? '此欄位為必填。'
    : ''
  errorMessages.value.company.minLength =
    feedbackInfo.value.feedback_company.length >= 2 ? '' : '公司至少需要2個字。'

  if (errorMessages.value.company.required) {
    errorMessages.value.company.minLength = ''
  }
}

// 驗證信箱
const validateEmail = () => {
  errorMessages.value.email.required = !feedbackInfo.value.feedback_email ? '此欄位為必填。' : ''
  errorMessages.value.email.pattern = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    feedbackInfo.value.feedback_email
  )
    ? '請填入有效的電子信箱。'
    : ''

  // 如果 `required` 錯誤存在，清除 `pattern` 錯誤
  if (errorMessages.value.email.required) {
    errorMessages.value.email.pattern = ''
  }
}

// 驗證留言
const validateTxt = () => {
  errorMessages.value.txt.required = !feedbackInfo.value.feedback_txt ? '此欄位為必填。' : ''
}

// 送出後，清空表單
const resetForm = () => {
  feedbackInfo.value = {
    feedback_no: '',
    feedback_name: '',
    feedback_phone: '',
    feedback_company: '',
    feedback_email: '',
    feedback_txt: '',
    feedback_find: '',
    feedback_state: '',
    feedback_datetime: ''
  }

  // 重置點擊裝態
  nameFieldTouched.value = false
  phoneFieldTouched.value = false
  emailFieldTouched.value = false
  companyFieldTouched.value = false
  txtFieldTouched.value = false
}

// 提交表單
const submitForm = () => {
  if (isFormValid.value) {
    console.log('表單提交了！')
    console.log('表單數據:', feedbackInfo.value)
    resetForm()

    // 弹出成功送出的弹窗
    showPopup.value = true
  }
}
</script>

<template>
  <!-- banner -->
  <div class="banner">
    <div
      class="bg-pic"
      :style="{ backgroundImage: 'url(' + contactInfo.contact_title_pic + ')' }"
    ></div>
    <div class="banner-overlay"></div>
    <div class="banner-title first-letter-underline">{{ contactInfo.contact_title }}</div>
  </div>

  <!-- title -->
  <div class="page-title">
    <span class="page-title-txt">{{ contactInfo.contact_title }}</span>
  </div>

  <div class="page-content lg:mx-[8%] lg:px-0">
    <div class="lg:grid lg:grid-cols-5 gap-[52px]">
      <!-- 左側 -->
      <div class="content-block mb-6 lg:col-span-3 lg:mb-0">
        <div class="contact-txt">{{ contactInfo.contact_txt }}</div>

        <!-- 表單範圍 -->
        <div class="form">
          <div>
            <div class="lg:flex gap-4">
              <div class="w-full">
                <input
                  v-model="feedbackInfo.feedback_name"
                  placeholder="*姓名"
                  class="input-txt"
                  type="text"
                  @blur="validateName"
                />
                <span v-if="errorMessages.name.required" class="error-message">{{
                  errorMessages.name.required
                }}</span>
                <span v-if="errorMessages.name.minLength" class="error-message">{{
                  errorMessages.name.minLength
                }}</span>
              </div>

              <div class="w-full">
                <input
                  v-model="feedbackInfo.feedback_phone"
                  placeholder="*聯絡電話"
                  class="input-txt"
                  type="text"
                  @blur="validatePhone"
                />
                <span v-if="errorMessages.phone.required" class="error-message">{{
                  errorMessages.phone.required
                }}</span>
                <span v-if="errorMessages.phone.minLength" class="error-message">{{
                  errorMessages.phone.minLength
                }}</span>
              </div>
            </div>

            <input
              v-model="feedbackInfo.feedback_company"
              placeholder="*公司名稱"
              class="input-txt"
              type="text"
              @blur="validateCompany"
            />
            <span v-if="errorMessages.company.required" class="error-message">{{
              errorMessages.company.required
            }}</span>
            <span v-if="errorMessages.company.minLength" class="error-message">{{
              errorMessages.company.minLength
            }}</span>

            <input
              v-model="feedbackInfo.feedback_email"
              placeholder="*電子信箱"
              class="input-txt"
              type="text"
              @blur="validateEmail"
            />
            <span v-if="errorMessages.email.required" class="error-message">{{
              errorMessages.email.required
            }}</span>
            <span v-if="errorMessages.email.pattern" class="error-message">{{
              errorMessages.email.pattern
            }}</span>

            <textarea
              v-autogrow
              v-model="feedbackInfo.feedback_txt"
              placeholder="*請輸入您的留言，將有專人為您服務"
              class="textarea-txt"
              @blur="validateTxt"
            ></textarea>
            <span v-if="errorMessages.txt.required" class="error-message">{{
              errorMessages.txt.required
            }}</span>
          </div>

          <!-- radio單選框 -->
          <div class="lg:flex lg:gap-6 mt-4">
            <label class="text-sm font-medium">從何得知本網站</label>
            <div class="radio mt-2 lg:mt-0">
              <div class="flex items-center">
                <input
                  v-model="feedbackInfo.feedback_find"
                  id="google"
                  name="find"
                  class="radio-button"
                  type="radio"
                  value="1"
                />
                <label for="google" class="radio-txt">網路搜尋</label>
              </div>
              <div class="flex items-center">
                <input
                  v-model="feedbackInfo.feedback_find"
                  id="friend"
                  name="find"
                  class="radio-button"
                  type="radio"
                  value="2"
                />
                <label for="friend" class="radio-txt">朋友推薦</label>
              </div>
              <div class="flex items-center">
                <input
                  v-model="feedbackInfo.feedback_find"
                  id="yahoo"
                  name="find"
                  class="radio-button"
                  type="radio"
                  value="3"
                />
                <label for="yahoo" class="radio-txt">其他</label>
              </div>
            </div>
          </div>
        </div>

        <!-- 送出按鈕 -->
        <button @click="submitForm" class="button">確認送出</button>

        <!-- 送出後弹窗 -->
        <div v-if="showPopup" class="dialog-overlay">
          <div class="edit-modal">
            <div class="edit-modal-content grid place-items-center">
              <div class="pb-6">
                <div class="text-lg pb-2 font-medium">{{ contactInfo.contact_pop_title }}</div>
                <div class="text-sm text-gray-400">{{ contactInfo.contact_pop_txt }}</div>
              </div>
              <button @click="showPopup = false" class="dialog-button">確認</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側 -->
      <div class="lg:col-span-2">
        <div>
          <iframe
            class="w-full h-[250px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :src="contactInfo.contact_maplink"
          ></iframe>
        </div>

        <!-- 公司資訊 -->
        <div class="mt-4">
          <!-- 電話 -->
          <div class="company">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path
                d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a :href="'tel:' + companyInfo[0].company_tel">{{ companyInfo[0].company_tel }}</a>
          </div>

          <!-- 傳真 -->
          <div class="company">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path
                d="M17 17H19C20.1046 17 21 16.1046 21 15V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V15C3 16.1046 3.89543 17 5 17H7M9 21H15C16.1046 21 17 20.1046 17 19V15C17 13.8954 16.1046 13 15 13H9C7.89543 13 7 13.8954 7 15V19C7 20.1046 7.89543 21 9 21ZM17 9V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V9H17Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a :href="'tel:' + companyInfo[0].company_fax">{{ companyInfo[0].company_fax }}</a>
          </div>

          <!-- 信箱 -->
          <div class="company">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path
                d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a :href="'mailto:' + companyInfo[0].company_email">{{
              companyInfo[0].company_email
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-block {
  .contact-txt {
    @apply text-base  pb-3;
    border-bottom: 1px solid var(--color-blueLight);
  }

  .form {
    .input-txt {
      @apply text-sm w-full h-[44px] rounded-md mt-4 pl-2 border border-gray-300 relative;
      background-color: transparent;

      &:focus {
        border-color: var(--color-blue);
        outline: none; // 去除預設的樣式
      }
    }
    .textarea-txt {
      @apply text-sm w-full min-h-[133px] rounded-md mt-4 pl-2 py-3 border border-gray-300 bg-transparent relative;
      resize: none;

      &:focus {
        border-color: var(--color-blue);
        outline: none; // 去除預設的樣式
      }
    }
  }
}
.button {
  @apply w-full h-[40px] bg-transparent rounded-[20px] border-2 text-base font-semibold mt-4 tracking-widest lg:w-auto lg:h-auto lg:px-9 lg:py-2;
  border-color: var(--color-blue);
  color: var(--color-blue);

  &:hover {
    background-color: var(--color-blue);
    color: white;
  }

  &:active {
    background-color: var(--color-blueDark);
    border-color: var(--color-blueDark);
    color: white;
  }
}
.company {
  @apply flex gap-2 mb-2;
  align-items: center;
}
.error-message {
  @apply text-xs text-red-500 font-medium;
  position: relative;
}

.dialog-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-20;

  .edit-modal {
    @apply fixed w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-hidden md:w-auto;
    .edit-modal-content {
      @apply px-6 pt-8 py-5;
      .dialog-button {
        @apply w-auto h-auto px-6 py-2 rounded-[20px]  text-xs font-semibold  tracking-widest;
        color: #fff;
        background-color: var(--color-blue);
      }
    }
  }
}
</style>
