<script setup>
import { ref } from 'vue' // 引入 Vue ref 功能
import ConfirmDialog from '../../components/ConfirmDialog.vue'

const feedbackData = ref([
  // 表單回饋的資料
  {
    feedback_no: 1,
    feedback_name: '小王子',
    feedback_phone: '077229777#413',
    feedback_company: '誠諾工程技術股份有限公司',
    feedback_email: 'cnetcsales@mx.cnetc.tw',
    feedback_txt: '服務諮詢',
    feedback_find: 1,
    feedback_state: '0',
    feedback_datetime: '112/01/02 13:22:51',
    feedback_handle_datetime: '113/10/10 13:22:51',
    staff_no: '吳書婷'
  },
  {
    feedback_no: 2,
    feedback_name: '小公舉',
    feedback_phone: '0975498993',
    feedback_company: '台灣積體電路製造股份有限公司',
    feedback_email: 'tina@mx.cnetc.tw',
    feedback_txt: '合作廠商',
    feedback_find: 2,
    feedback_state: '0',
    feedback_datetime: '112/01/02 13:22:51',
    feedback_handle_datetime: '113/10/10 13:22:51',
    staff_no: '抓抓'
  },
  {
    feedback_no: 3,
    feedback_name: '大王子',
    feedback_phone: '02-22198765',
    feedback_company: '所以有限公司',
    feedback_email: 'so@mx.cnetc.tw',
    feedback_txt: '諮詢技術',
    feedback_find: 3,
    feedback_state: '0',
    feedback_datetime: '112/01/02 13:22:51',
    feedback_handle_datetime: '113/10/10 13:22:51',
    staff_no: '五餅二魚'
  }
])

const selectedFeedback = ref(null) // 選中的查看表單

const editFeedback = (feedbackData) => {
  selectedFeedback.value = { ...feedbackData }
}

const saveEdit = () => {
  if (selectedFeedback.value && selectedFeedback.value.feedback_no !== undefined) {
    const index = feedbackData.value.findIndex(
      (feedback) => feedback.feedback_no === selectedFeedback.value.feedback_no
    )
    if (index !== -1) {
      selectedFeedback.value.feedback_datetime = getCurrentDateTime()
      const updatedFeedback = { ...feedbackData.value[index], ...selectedFeedback.value }
      feedbackData.value[index] = updatedFeedback
      console.log('表單資料已儲存: ', feedbackData.value[index])
    }
  } else {
    console.error('沒有選定的表單來保存')
    return
  }
  selectedFeedback.value = null
}

const getCurrentDateTime = () => {
  const now = new Date()
  const year = now.getFullYear() - 1911
  const month = now.getMonth() + 1
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

const showConfirm = ref(false)
const confirmMessage = ref('')
const feedbackToDelete = ref(null)

const attemptDeleteFeedback = (feedback) => {
  confirmMessage.value = `確定要刪除『 ${feedback.feedback_name} 』的表單回饋嗎？`
  feedbackToDelete.value = feedback
  showConfirm.value = true
}

const handleConfirm = () => {
  if (feedbackToDelete.value && feedbackToDelete.value.feedback_no !== undefined) {
    const index = feedbackData.value.findIndex(
      (feedback) => feedback.feedback_no === feedbackToDelete.value.feedback_no
    )
    if (index !== -1) {
      feedbackData.value.splice(index, 1)
      console.log('刪除表單:', feedbackToDelete.value)
    }
  } else {
    console.error('沒有選定的表單來刪除')
  }
  feedbackToDelete.value = null
  showConfirm.value = false
}

const handleCancel = () => {
  showConfirm.value = false
}
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">
      <div class="">表單回饋</div>
      <div class="container">
        <div
          class="section"
          :class="{
            unfinished: activeSection === 'unfinished',
            active: activeSection === 'unfinished'
          }"
          @click="toggleSection('unfinished')"
        >
          未完成
        </div>
        <div
          class="section"
          :class="{ finished: activeSection === 'finished', active: activeSection === 'finished' }"
          @click="toggleSection('finished')"
        >
          已完成
        </div>
      </div>
    </div>
    <div class="rounded-md shadow overflow-hidden">
      <!-- {{ feedbackData }} -->

      <!-- * 未完成查看表單 -->
      <div v-if="activeSection === 'unfinished'">
        <!-- * table header -->
        <div class="backend-table-header">
          <label class="backend-table-header-label col-span-3">廠商名稱 </label>
          <label class="backend-table-header-label col-span-3">姓名 </label>
          <label class="backend-table-header-label col-span-2">聯絡電話 </label>
          <label class="backend-table-header-label col-span-2">功能 </label>
        </div>

        <!-- * table body -->
        <div class="backend-table-body" v-for="item in feedbackData" :key="item.feedback_no">
          <div class="backend-table-body-label col-span-3">{{ item.feedback_company }}</div>
          <div class="backend-table-body-label col-span-3">{{ item.feedback_name }}</div>
          <div class="backend-table-body-label col-span-2">{{ item.feedback_phone }}</div>

          <div class="backend-table-body-label col-span-2 flex justify-center gap-2">
            <!-- 編輯按鈕 -->
            <button @click="editFeedback(item)">
              <svg
                class="icon-blue-hover-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.3045 4.30255C17.2418 3.36529 18.7614 3.36529 19.6986 4.30255C20.6359 5.23981 20.6359 6.75941 19.6986 7.69666L18.7471 8.64814L15.353 5.25403L16.3045 4.30255Z"
                  fill="#6B7280"
                />
                <path
                  d="M13.656 6.95108L3.60156 17.0055V20.3996H6.99567L17.0501 10.3452L13.656 6.95108Z"
                  fill="#6B7280"
                />
              </svg>
            </button>

            <!-- 垃圾桶按鈕 -->
            <button @click="attemptDeleteFeedback(item)">
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
        </div>

        <div v-if="selectedFeedback" class="backend-edit-overlay">
          <div class="backend-edit-modal">
            <!-- content -->
            <div class="backend-edit-modal-content backend-block-flex">
              <div class="backend-page-title">表單回饋</div>
              <div class="pop-title">
                廠商名稱
                <div class="pop-txt">{{ selectedFeedback.feedback_company }}</div>
              </div>
              <div class="pop-title">
                姓名
                <div class="pop-txt">{{ selectedFeedback.feedback_name }}</div>
              </div>
              <div class="pop-title">
                聯絡電話
                <div class="pop-txt">{{ selectedFeedback.feedback_phone }}</div>
              </div>
              <div class="pop-title">
                聯絡信箱
                <div class="pop-txt">{{ selectedFeedback.feedback_email }}</div>
              </div>
              <div class="pop-title">
                問題留言
                <div class="pop-txt">{{ selectedFeedback.feedback_txt }}</div>
              </div>
              <div class="pop-title">
                從何得知本網站
                <div class="pop-txt">{{ getFeedbackFindText(selectedFeedback.feedback_find) }}</div>
              </div>

              <!-- 區塊分隔線 -->
              <hr class="backend-block-hr" />

              <div class="pop-title">
                完成進度
                <div class="flex gap-4">
                  <label class="pop-txt">
                    <input
                      type="radio"
                      class="pop-radio"
                      value="0"
                      v-model="selectedFeedback.feedback_state"
                    />
                    未完成
                  </label>
                  <label class="pop-txt">
                    <input
                      type="radio"
                      class="pop-radio"
                      value="1"
                      v-model="selectedFeedback.feedback_state"
                    />
                    已完成
                  </label>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="backend-edit-modal-footer">
              <button @click="saveEdit" class="btn-blue-s">確定</button>
            </div>
          </div>
        </div>
      </div>

      <!-- * 已完成查看表單 -->
      <div v-if="activeSection === 'finished'">
        <!-- * table header -->
        <div class="backend-table-header">
          <label class="backend-table-header-label col-span-3">廠商名稱 </label>
          <label class="backend-table-header-label col-span-2">姓名 </label>
          <label class="backend-table-header-label col-span-2">聯絡電話 </label>
          <label class="backend-table-header-label col-span-2">處理人員 </label>
          <label class="backend-table-header-label col-span-1">功能 </label>
        </div>

        <!-- * table body -->
        <div class="backend-table-body" v-for="item in feedbackData" :key="item.feedback_no">
          <div class="backend-table-body-label col-span-3">{{ item.feedback_company }}</div>
          <div class="backend-table-body-label col-span-2">{{ item.feedback_name }}</div>
          <div class="backend-table-body-label col-span-2">{{ item.feedback_phone }}</div>
          <div class="backend-table-body-label col-span-2">{{ item.staff_no }}</div>

          <div class="backend-table-body-label col-span-1 flex justify-center gap-2">
            <!-- 編輯按鈕 -->
            <button @click="editFeedback(item)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                class="icon-red-hover"
              >
                <path
                  d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z"
                  fill="#6B7280"
                />
              </svg>
            </button>

            <!-- 垃圾桶按鈕 -->
            <button @click="attemptDeleteFeedback(item)">
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
        </div>

        <div v-if="selectedFeedback" class="backend-edit-overlay">
          <div class="backend-edit-modal">
            <!-- content -->
            <div class="backend-edit-modal-content backend-block-flex">
              <div class="backend-page-title">表單回饋</div>
              <div class="pop-title">
                廠商名稱
                <div class="pop-txt">{{ selectedFeedback.feedback_company }}</div>
              </div>
              <div class="pop-title">
                姓名
                <div class="pop-txt">{{ selectedFeedback.feedback_name }}</div>
              </div>
              <div class="pop-title">
                聯絡電話
                <div class="pop-txt">{{ selectedFeedback.feedback_phone }}</div>
              </div>
              <div class="pop-title">
                聯絡信箱
                <div class="pop-txt">{{ selectedFeedback.feedback_email }}</div>
              </div>
              <div class="pop-title">
                問題留言
                <div class="pop-txt">{{ selectedFeedback.feedback_txt }}</div>
              </div>
              <div class="pop-title">
                從何得知本網站
                <div class="pop-txt">{{ getFeedbackFindText(selectedFeedback.feedback_find) }}</div>
              </div>

              <!-- 區塊分隔線 -->
              <hr class="backend-block-hr" />

              <div class="pop-title">
                完成進度
                <div class="flex gap-4">
                  <label class="pop-txt">
                    <input
                      type="radio"
                      class="pop-radio"
                      value="0"
                      v-model="selectedFeedback.feedback_state"
                    />
                    未完成
                  </label>
                  <label class="pop-txt">
                    <input
                      type="radio"
                      class="pop-radio"
                      value="1"
                      v-model="selectedFeedback.feedback_state"
                    />
                    已完成
                  </label>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="backend-edit-modal-footer">
              <button @click="saveEdit" class="btn-blue-s">確定</button>
            </div>
          </div>
        </div>
      </div>

      <!-- * 確認視窗 -->
      <ConfirmDialog
        v-if="showConfirm"
        :message="confirmMessage"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'unfinished'
    }
  },
  methods: {
    toggleSection(section) {
      this.activeSection = section
    },
    editFeedback(item) {
      // 您現有的editFeedback邏輯
    },
    getFeedbackFindText(feedbackFind) {
      switch (feedbackFind) {
        case 1:
          return '網路搜尋'
        case 2:
          return '朋友推薦'
        case 3:
          return '其他'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @apply rounded-xl w-[148px] h-[36px] flex text-sm;
  background-color: rgba(204, 204, 204, 0.4);

  .section {
    @apply rounded-lg my-1 mx-1 justify-center flex drop-shadow-md;
    flex: 1;
    align-items: center;
    cursor: pointer;
  }
}

.finished {
  background-color: red;
}

.active {
  @apply bg-white font-extrabold;
}

.backend-table-header {
  @apply grid grid-cols-10 text-center border-b;

  .backend-table-header-label {
    @apply text-gray-500 text-sm px-3 py-2.5 bg-gray-50;
  }
}

.backend-table-body {
  @apply grid grid-cols-10 text-center border-b;

  .backend-table-body-label {
    @apply text-gray-700 text-sm px-3 py-2.5;
  }
}

.backend-edit-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-20;
}

.backend-edit-modal {
  @apply fixed w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md overflow-hidden;

  .backend-edit-modal-content {
    @apply p-6;
  }

  .backend-edit-modal-footer {
    @apply bg-gray-50 px-6 py-3 flex justify-end gap-4;
  }
}

.pop-title {
  @apply font-bold mb-1;
  .pop-txt {
    @apply mt-0;
  }
  .pop-radio {
    @apply w-[16px] h-[16px] border-8 border-gray-300 rounded-[50%];
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;

    &:checked {
      border-color: var(--color-blue);
    }
  }
}
</style>
