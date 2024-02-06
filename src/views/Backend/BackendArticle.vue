<script setup>
import { ref, computed } from 'vue'
import ConfirmDialog from '../../components/ConfirmDialog.vue'

// article table data
const articleData = ref([
  {
    article_no: 1,
    article_title: '【媒體報導】勞動部長許銘春參訪誠諾',
    article_title_en: '(Press Report) Minister of Labor, Ming-Chun Hsu, Visits CNETC',
    article_pic: '/img/NewsView/news1.png',
    article_txt:
      '誠諾在2022年「促進中高齡及高齡者就業暨世代合作績優獎選拔活動」中脫穎而出，贏得「促進中高齡者及高齡者就業績優獎」，部長於今年8月16日南下參訪誠諾，親自體驗中高齡文章的工作場域，關心壯世代勞工朋友的工作情形。',
    article_txt_en:
      ' CNETC stood out in the Selection of Outstanding Achievements in Promoting Employment of Middle-aged and Elderly Workers and Generational Cooperation in 2022, winning the Outstanding Achievement Award for Promoting Employment of Middle-aged and Elderly Workers. On August 16 of this year, the Minister visited CNETC, personally experiencing the working environment of middle-aged and elderly employees, and showing concern for the work conditions of workers from the silver generation.',
    article_date: '2023/08/18',
    article_link: 'https://money.udn.com/money/story/11799/7378286',
    article_datetime: '112/01/02 13:22:51',
    staff_no: 1
  },

  {
    article_no: 2,
    article_title: '【媒體報導】榮獲第3屆「促進中高齡者及高齡者就業績優獎」',
    article_title_en:
      '(Press Report) CNETC Received the 3rd ""Outstanding Achievement Award for Promoting Employment of Middle-aged and Elderly Workers',
    article_pic: '/img/NewsView/news2.png',
    article_txt:
      '依中高齡文章需求，自主開發圖資系統及e化工具，透過青銀協學輔助中高齡文章查找資料及運用，並輔導其考取專業證照，提供系統化升遷路徑。',
    article_txt_en:
      ' "In response to the needs of middle-aged and elderly employees, independent development of mapping systems and digital tools has been undertaken. These tools assist middle-aged and elderly workers in finding and utilizing information through a Young-Silver Generation Mutual Learning Program. Additionally, guidance is provided for them to obtain professional certifications, offering a systematic career advancement path."',
    article_date: '2023/11/30',
    article_link: 'https://money.udn.com/money/story/11799/7378286',
    article_datetime: '112/12/31 13:22:51',
    staff_no: 2
  }
])

// 計算文字 & 標題的當前字數
const titleLength = computed(() => selectedArticle.value.article_title.length)
const titleEnLength = computed(() => selectedArticle.value.article_title_en.length)

const txtLength = computed(() => selectedArticle.value.article_txt.length)
const txtEnLength = computed(() => selectedArticle.value.article_txt_en.length)

const newtitleLength = computed(() => newArticle.value.article_title.length)
const newtitleEnLength = computed(() => newArticle.value.article_title_en.length)

const newtxtLength = computed(() => newArticle.value.article_txt.length)
const newtxtEnLength = computed(() => newArticle.value.article_txt_en.length)

// 編輯 圖片預覽 變量
const showImage = ref(false)

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

// 選中得編輯文章
const selectedArticle = ref(null)

// 編輯 按鈕
const editArticle = (articleData) => {
  selectedArticle.value = { ...articleData }
}

// 編輯文章表單 儲存編輯
const saveEdit = () => {
  if (selectedArticle.value && selectedArticle.value.article_no !== undefined) {
    const index = articleData.value.findIndex(
      (article) => article.article_no === selectedArticle.value.article_no
    )
    if (index !== -1) {
      // 更新時間戳
      selectedArticle.value.article_date = getCurrentDateTime()

      // 創建更新的文章對象
      const updatedArticle = { ...articleData.value[index], ...selectedArticle.value }

      // 更新文章資料
      articleData.value[index] = updatedArticle
      console.log('文章資料已儲存: ', articleData.value[index])
    }
  } else {
    console.error('沒有選定的文章來保存')
    return
  }

  selectedArticle.value = null // 清除選定的文章，關閉表單
}

// 編輯文章表單 取消編輯
const cancelEdit = () => {
  selectedArticle.value = null // 清除選定的文章，關閉表單
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

// 刪除管理員 變量
const showConfirm = ref(false)
const confirmMessage = ref('')
const articleToDelete = ref(null)

// 再次確認刪除視窗
const attemptDeleteArticle = (article) => {
  confirmMessage.value = `確定要刪除管理員 『 ${article.article_title} 』 嗎？`
  articleToDelete.value = article
  showConfirm.value = true
}

// 再次確認刪除視窗 => 確認刪除
const handleConfirm = () => {
  if (articleToDelete.value && articleToDelete.value.article_no !== undefined) {
    const index = articleData.value.findIndex(
      (article) => article.article_no === articleToDelete.value.article_no
    )
    if (index !== -1) {
      articleData.value.splice(index, 1) // 刪除指定索引的文章
      console.log('刪除文章:', articleToDelete.value)
    }
  } else {
    console.error('沒有選定的文章來刪除')
  }

  articleToDelete.value = null // 清除選定的文章
  showConfirm.value = false // 關閉確認視窗
}

// 再次確認刪除視窗 => 取消刪除
const handleCancel = () => {
  showConfirm.value = false
}

// 新增文章 數據結構
const newArticle = ref({
  article_no: (() => findNextArticleNo())(), // 立即执行函数，确保每次都重新计算
  article_title: '',
  article_title_en: '',
  article_pic: '',
  article_txt: '',
  article_txt_en: '',
  article_date: '',
  article_link: ''
})

// 提取獲取下一個文章編號的邏輯到單獨的函數中
function findNextArticleNo() {
  // 如果 articleData 為空，返回 1
  if (articleData.value.length === 0) {
    return 1
  }

  // 找到目前最大的編號
  const maxNo = Math.max(...articleData.value.map((article) => article.article_no))

  // 返回下一個編號
  return maxNo + 1
}

// 新增文章 輸入框檢查狀態
const touched = ref({
  article_no: false,
  article_title: false,
  article_title_en: false,
  article_pic: false,
  article_txt: false,
  article_txt_en: false,
  article_date: false,
  article_link: false
})

// 新增 computed 用來驗證標題格式
const isArticleTitleValid = computed(() => {
  return !(!newArticle.value.article_title || newArticle.value.article_title.length > 50)
})

// 新增 computed 用來驗證文字格式
const isArticleTextValid = computed(() => {
  return !(!newArticle.value.article_txt || newArticle.value.article_txt.length > 200)
})

// 新增 computed 用來驗證日期格式
const isDateValid = computed(() => {
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/
  return dateRegex.test(newArticle.value.article_date)
})

// 新增 computed 用來驗證新聞網址格式
const isLinkValid = computed(() => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
  return !!newArticle.value.article_link && urlPattern.test(newArticle.value.article_link)
})

// 新增 computed 用來驗證英文版標題格式
const isArticleTitleEnValid = computed(() => {
  return !(!newArticle.value.article_title_en || newArticle.value.article_title_en.length > 200)
})

// 新增 computed 用來驗證英文版文字格式
const isArticleTextEnValid = computed(() => {
  return !(!newArticle.value.article_txt_en || newArticle.value.article_txt_en.length > 600)
})

// 新增文章 處理 blur 事件的函數
const handleBlur = (field) => {
  touched.value[field] = true
}

// 控制新增文章表單的顯示
const showAddArticleForm = ref(false)

// 當點擊新增文章按鈕時，更新編號
const handleShowAddArticleForm = () => {
  // 更新編號
  newArticle.value.article_no = findNextArticleNo()

  // 顯示新增文章表單
  showAddArticleForm.value = true
}

const saveNewArticle = () => {
  // 逐項檢查每格是否為空
  if (!newArticle.value.article_title) {
    alert('標題是必填項目！')
    return
  }

  if (!newArticle.value.article_txt) {
    alert('文字是必填項目！')
    return
  }

  if (!newArticle.value.article_date) {
    alert('日期是必填項目！')
    return
  }

  if (!newArticle.value.article_link) {
    alert('連結是必填項目！')
    return
  }

  if (!newArticle.value.article_title_en) {
    alert('標題_英文是必填項目！')
    return
  }

  if (!newArticle.value.article_txt_en) {
    alert('文字_英文是必填項目！')
    return
  }

  // 處理新增文章的邏輯
  const newArticleData = {
    article_no: findNextArticleNo(), // 更新編號
    article_title: newArticle.value.article_title,
    article_title_en: newArticle.value.article_title_en,
    article_pic: newArticle.value.article_pic,
    article_txt: newArticle.value.article_txt,
    article_txt_en: newArticle.value.article_txt_en,
    article_date: newArticle.value.article_date,
    article_link: newArticle.value.article_link
  }

  articleData.value.push(newArticleData) // 新增到列表中

  // 如果所有檢查都通過，則處理新增文章的邏輯
  console.log(newArticle.value)

  // 重置 newArticle 和隱藏表單
  newArticle.value = {
    article_no: '',
    article_title: '',
    article_title_en: '',
    article_pic: '',
    article_txt: '',
    article_txt_en: '',
    article_date: '',
    article_link: ''
  }
  showAddArticleForm.value = false

  // 重置 touched 輸入框檢查狀態
  touched.value = {
    article_title: false,
    article_title_en: false,
    article_pic: false,
    article_txt: false,
    article_txt_en: false,
    article_date: false,
    article_link: false
  }
}

// 取消新增文章
const cancelAddArticle = () => {
  // 取消新增文章操作，重置數據並隱藏表單
  newArticle.value = {
    article_no: '',
    article_title: '',
    article_title_en: '',
    article_pic: '',
    article_txt: '',
    article_txt_en: '',
    article_date: '',
    article_link: ''
  }

  // 重置 touched 輸入框檢查狀態
  touched.value = {
    article_title: false,
    article_title_en: false,
    article_pic: false,
    article_txt: false,
    article_txt_en: false,
    article_date: false,
    article_link: false
  }

  showAddArticleForm.value = false
}
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">
      <div class="">新聞文章</div>
      <!-- 新增文章按鈕 -->
      <button @click="showAddArticleForm = true" class="btn-blue-s">+ &nbsp; 新增</button>
    </div>

    <div class="rounded-md shadow overflow-hidden">
      <!-- {{ articleData }} -->

      <!-- * table header -->
      <div class="backend-table-header">
        <!-- <label class="backend-table-header-label col-span-1">編號 </label> -->
        <label class="backend-table-header-label col-span-3">新聞標題 </label>
        <label class="backend-table-header-label col-span-3">新聞標題_英文 </label>

        <label class="backend-table-header-label col-span-1">發布時間 </label>

        <label class="backend-table-header-label col-span-1">功能 </label>
      </div>

      <!-- * table body -->
      <div class="backend-table-body" v-for="item in articleData" :key="item.article_no">
        <!-- <div class="backend-table-body-label col-span-1">{{ item.article_no }}</div> -->
        <div class="backend-table-body-label col-span-3">{{ item.article_title }}</div>
        <div class="backend-table-body-label col-span-3">{{ item.article_title_en }}</div>
        <div class="backend-table-body-label col-span-1">{{ item.article_date }}</div>
        <div class="backend-table-body-label col-span-1 flex justify-center gap-2">
          <!-- 編輯按鈕 -->
          <button @click="editArticle(item)">
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
          <!-- 刪除按鈕 -->
          <button @click="attemptDeleteArticle(item)" class="flex justify-center items-center">
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

      <!-- * 編輯文章表單 -->
      <div v-if="selectedArticle" class="backend-edit-overlay">
        <div class="backend-edit-modal">
          <!-- content -->
          <div class="backend-edit-modal-content backend-block-flex">
            <div class="backend-page-title">
              最新消息
              <button
                class="backend-look-pic-btn"
                :class="{ 'backend-look-pic-btn-focus': showImage }"
                @click="showImage = !showImage"
              >
                <img src="/img/Icon/eyes.svg" alt="eyes" />
                圖片
              </button>
            </div>

            <!-- 編號 -->
            <label
              >編號
              <!-- <span class="label-note"></span> -->
              <input
                type="text"
                maxlength="20"
                v-model="selectedArticle.article_no"
                class="input-backend"
                placeholder="編號"
                disabled
                readonly
              />
            </label>

            <!-- 新聞圖片 -->
            <div class="input-backend-pic-flex">
              <label>
                新聞圖片
                <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
              </label>

              <div>
                <input
                  type="file"
                  @change="(event) => handleFileUpload(event, null, selectedArticle, 'article_pic')"
                  class="input-backend"
                />
              </div>

              <!-- 預覽圖片 -->
              <div class="w-1/2 cursor-pointer" v-show="showImage">
                <img
                  :src="selectedArticle.article_pic"
                  alt="image Preview"
                  class="pic"
                  @click="() => openImageInNewWindow(selectedArticle.article_pic)"
                />
              </div>
            </div>

            <div class="flex gap-4">
              <!-- 標題 -->
              <div class="w-full">
                <label
                  >標題
                  <span class="label-note">* 最多 50 字 ({{ titleLength }} / 50)</span>
                  <textarea
                    type="text"
                    maxlength="50"
                    v-model="selectedArticle.article_title"
                    class="input-backend min-h-[120px]"
                    placeholder="標題"
                  />
                </label>
              </div>

              <!-- 文字 -->
              <div class="w-full">
                <label
                  >文字
                  <span class="label-note">* 最多 200 字 ({{ txtLength }} / 200)</span>
                  <textarea
                    type="text"
                    maxlength="200"
                    v-model="selectedArticle.article_txt"
                    class="input-backend min-h-[120px]"
                    placeholder="文字"
                  />
                </label>
              </div>
            </div>

            <div class="flex gap-4">
              <!-- 日期 -->
              <div class="w-full">
                <label
                  >日期
                  <span class="label-note">* 格式為 yyyy/mm/dd</span>
                  <input
                    type="text"
                    maxlength="20"
                    v-model="selectedArticle.article_date"
                    class="input-backend"
                    placeholder="日期"
                  />
                </label>
              </div>

              <!-- 新聞網址 -->
              <div class="w-full">
                <label
                  >新聞連結
                  <span class="label-note">* 最多255字</span>
                  <input
                    type="text"
                    maxlength="200"
                    v-model="selectedArticle.article_link"
                    class="input-backend"
                    placeholder="新聞連結"
                  />
                </label>
              </div>
            </div>
            <hr class="backend-block-hr" />

            <!-- * 英文版 -->
            <div class="backend-block-title">英文版</div>

            <div class="flex gap-4">
              <!-- 標題 -->
              <div class="w-full">
                <label
                  >標題_英文
                  <span class="label-note">* 最多 200 字 ({{ titleEnLength }} / 200)</span>
                  <textarea
                    type="text"
                    maxlength="200"
                    v-model="selectedArticle.article_title_en"
                    class="input-backend min-h-[200px]"
                    placeholder="標題_英文"
                  />
                </label>
              </div>

              <!-- 文字 -->
              <div class="w-full">
                <label
                  >文字_英文
                  <span class="label-note">* 最多 600 字 ({{ txtEnLength }} / 600)</span>
                  <textarea
                    type="text"
                    maxlength="600"
                    v-model="selectedArticle.article_txt_en"
                    class="input-backend min-h-[200px]"
                    placeholder="文字_英文"
                  />
                </label>
              </div>
            </div>
          </div>

          <!-- Footer -->

          <div class="backend-edit-modal-footer">
            <button @click="cancelEdit" class="btn-white-s">取消</button>
            <button @click="saveEdit" class="btn-blue-s">儲存</button>
          </div>
        </div>
      </div>

      <!-- * 新增文章表單 -->
      <div v-if="showAddArticleForm" class="backend-edit-overlay">
        <div class="backend-edit-modal">
          <!-- content -->
          <div class="backend-edit-modal-content backend-block-flex">
            <div class="backend-page-title">
              新增文章
              <button
                class="backend-look-pic-btn"
                :class="{ 'backend-look-pic-btn-focus': showImage }"
                @click="showImage = !showImage"
              >
                <img src="/img/Icon/eyes.svg" alt="eyes" />
                圖片
              </button>
            </div>

            <!-- <label
              >編號
              <input
                type="text"
                maxlength="20"
                v-model="newArticle.article_no"
                class="input-backend"
                placeholder="編號"
                readonly
                disabled
              />
            </label> -->

            <!-- 新聞圖片 -->
            <div class="input-backend-pic-flex">
              <label>
                新聞圖片
                <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
              </label>

              <div>
                <input
                  type="file"
                  @change="(event) => handleFileUpload(event, null, newArticle, 'article_pic')"
                  class="input-backend"
                />
              </div>

              <!-- 預覽圖片 -->
              <div class="w-1/2 cursor-pointer" v-show="showImage">
                <img
                  :src="newArticle.article_pic"
                  alt="image Preview"
                  class="pic"
                  @click="() => openImageInNewWindow(newArticle.article_pic)"
                />
              </div>
            </div>

            <div class="flex gap-4">
              <!-- 標題 -->
              <div class="w-full">
                <label
                  >標題
                  <span class="label-note">* 最多 50 字 ({{ newtitleLength }} / 50) </span>
                  <textarea
                    type="text"
                    maxlength="50"
                    v-model="newArticle.article_title"
                    @blur="handleBlur('article_title')"
                    :class="{ 'invalid-input': touched.article_title && !newArticle.article_title }"
                    class="input-backend min-h-[120px]"
                    placeholder="標題"
                  />
                </label>
              </div>

              <!-- 文字 -->
              <div class="w-full">
                <label
                  >文字
                  <span class="label-note">* 最多 200 字 ({{ newtxtLength }} / 200) </span>
                  <textarea
                    type="text"
                    maxlength="50"
                    v-model="newArticle.article_txt"
                    @blur="handleBlur('article_txt')"
                    :class="{ 'invalid-input': touched.article_txt && !newArticle.article_txt }"
                    class="input-backend min-h-[120px]"
                    placeholder="文字"
                  />
                </label>
              </div>
            </div>

            <div class="flex gap-4">
              <!-- 日期 -->
              <div class="w-full">
                <label
                  >日期
                  <span class="label-note">* 格式為 yyyy/mm/dd</span>
                  <input
                    type="text"
                    maxlength="20"
                    v-model="newArticle.article_date"
                    @blur="handleBlur('article_date')"
                    :class="{ 'invalid-input': touched.article_date && !isDateValid }"
                    class="input-backend"
                    placeholder="日期"
                  />
                </label>
              </div>

              <!-- 新聞網址 -->
              <div class="w-full">
                <label
                  >新聞連結
                  <span class="label-note">* 最多255字 </span>
                  <input
                    type="text"
                    maxlength="200"
                    v-model="newArticle.article_link"
                    @blur="handleBlur('article_link')"
                    :class="{ 'invalid-input': touched.article_link && !isLinkValid }"
                    class="input-backend"
                    placeholder="新聞網址"
                  />
                </label>
              </div>
            </div>

            <hr class="backend-block-hr" />

            <!-- * 英文版 -->
            <div class="backend-block-title">英文版</div>

            <div class="flex gap-4">
              <!-- 標題 -->
              <div class="w-full">
                <label
                  >標題_英文
                  <span class="label-note">* 最多 200 字 ({{ newtitleEnLength }} / 200)</span>
                  <textarea
                    type="text"
                    maxlength="200"
                    v-model="newArticle.article_title_en"
                    @blur="handleBlur('article_title_en')"
                    :class="{
                      'invalid-input': touched.article_title_en && !newArticle.article_title_en
                    }"
                    class="input-backend min-h-[200px]"
                    placeholder="標題_英文"
                  />
                </label>
              </div>

              <!-- 文字 -->
              <div class="w-full">
                <label
                  >文字_英文
                  <span class="label-note">* 最多 600 字 ({{ newtxtEnLength }} / 600) </span>
                  <textarea
                    type="text"
                    maxlength="600"
                    v-model="newArticle.article_txt_en"
                    @blur="handleBlur('article_txt_en')"
                    :class="{
                      'invalid-input': touched.article_txt_en && !newArticle.article_txt_en
                    }"
                    class="input-backend min-h-[200px]"
                    placeholder="文字_英文"
                  />
                </label>
              </div>
            </div>
          </div>

          <!-- Footer -->

          <div class="backend-edit-modal-footer">
            <button @click="cancelAddArticle" class="btn-white-s">取消</button>
            <button @click="saveNewArticle" class="btn-blue-s">儲存</button>
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

<style lang="scss" scoped>
.backend-table-header {
  @apply grid grid-cols-8 text-center border-b;

  .backend-table-header-label {
    @apply text-gray-500 text-sm px-3 py-2.5 bg-gray-50;
  }
}

.backend-table-body {
  @apply grid grid-cols-8 text-center border-b items-center;

  .backend-table-body-label {
    @apply text-gray-700 text-sm px-3 py-2.5;
  }
}

.backend-edit-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-20;
}
.backend-edit-modal {
  @apply fixed w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md overflow-auto;

  .backend-edit-modal-content {
    @apply p-6;
  }

  .backend-edit-modal-footer {
    @apply bg-gray-50 px-6 py-3 flex justify-end gap-4;
  }
}

.label-note {
  @apply cursor-help relative inline-block;
}

.label-note .tooltip-text {
  @apply absolute bg-white rounded border border-zinc-200 text-gray-700 text-left left-0  bottom-[120%] z-[5] min-w-[320px] p-2 shadow;
  visibility: hidden;
}

.label-note:hover .tooltip-text {
  visibility: visible;
}

.invalid-input {
  border-color: red;
}
</style>
