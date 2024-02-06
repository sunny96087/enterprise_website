<script setup>
import { ServeInfo } from '../../js/serveInfo.js'
import { ref, computed } from 'vue'

// {
//   serve_no: 服務項目編號,
//   serve_title: 服務項目標題,
//   serve_title_en: 服務項目標題_英文,
//   serve_txt: 服務項目內容,
//   serve_txt_en: 服務項目內容_英文,
//   serve_title_pic: 內頁標題背景圖,
//   serve_block1_title: 區塊1標題,
//   serve_block1_title_en: 區塊1標題_英文,
//   serve_block1_pic: 區塊1圖片,
//   serve_block1_txt: 區塊1文字,
//   serve_block1_txt_en: 區塊1文字_英文,
//   serve_block2_title: 區塊2標題,
//   serve_block2_title_en: 區塊2標題_英文,
//   serve_block2_pic: 區塊2圖片,
//   serve_block2_txt: 區塊2文字
//   serve_block2_txt_en: 區塊2文字_英文
// },

const selectedItem = ref(null)

// 編輯按鈕
const editItem = (item) => {
  selectedItem.value = JSON.parse(JSON.stringify(item))
}

// 儲存編輯
const saveEdit = () => {
  if (selectedItem.value && selectedItem.value.serve_no !== undefined) {
    const index = ServeInfo.value.findIndex((item) => item.serve_no === selectedItem.value.serve_no)
    if (index !== -1) {
      ServeInfo.value[index] = JSON.parse(JSON.stringify(selectedItem.value)) // 更新數據
      console.log('項目資料已儲存: ', ServeInfo.value[index])
    }
  } else {
    console.error('沒有選定的項目來保存')
    return
  }

  selectedItem.value = null // 清除選定的項目
}

// 取消編輯
const cancelEdit = () => {
  selectedItem.value = null // 清除選定的項目
}

// 編輯 圖片預覽 變量
const showImage = ref(false)

// 計算文字 & 標題的當前字數
const titleLength = computed(() => selectedItem.value.serve_title.length)
const titleEnLength = computed(() => selectedItem.value.serve_title_en.length)

const txtLength = computed(() => selectedItem.value.serve_txt.length)
const txtEnLength = computed(() => selectedItem.value.serve_txt_en.length)

const block1TitleLength = computed(() => selectedItem.value.serve_block1_title.length)
const block1TitleEnLength = computed(() => selectedItem.value.serve_block1_title_en.length)

const block1TxtLength = computed(() => selectedItem.value.serve_block1_txt.length)
const block1TxtEnLength = computed(() => selectedItem.value.serve_block1_txt_en.length)

const block2TitleLength = computed(() => selectedItem.value.serve_block2_title.length)
const block2TitleEnLength = computed(() => selectedItem.value.serve_block2_title_en.length)

const block2TxtLength = computed(() => selectedItem.value.serve_block2_txt.length)
const block2TxtEnLength = computed(() => selectedItem.value.serve_block2_txt_en.length)

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
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">服務項目</div>
    <div class="rounded-md shadow overflow-hidden">
      <!-- {{ ServeInfo }} -->

      <!-- * table header -->
      <div class="backend-table-header">
        <label class="backend-table-header-label col-span-1">編號 </label>

        <label class="backend-table-header-label col-span-3">標題 </label>

        <label class="backend-table-header-label col-span-3">標題_英文 </label>

        <label class="backend-table-header-label col-span-1">功能 </label>
      </div>

      <!-- * table body -->
      <div class="backend-table-body" v-for="item in ServeInfo" :key="item.serve_no">
        <div class="backend-table-body-label col-span-1">{{ item.serve_no }}</div>

        <div class="backend-table-body-label col-span-3">{{ item.serve_title }}</div>

        <div class="backend-table-body-label col-span-3">{{ item.serve_title_en }}</div>

        <div class="backend-table-body-label col-span-1 flex justify-center gap-2">
          <button @click="editItem(item)">
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
        </div>
      </div>

      <!-- * 編輯員工表單 -->
      <div v-if="selectedItem" class="backend-edit-overlay">
        <div class="backend-edit-modal">
          <!-- content -->
          <div class="backend-edit-modal-content backend-block-flex">
            <div class="backend-page-title">編輯服務項目</div>

            <!-- 編號 -->
            <label
              >編號
              <!-- <span class="label-note"></span> -->
              <input
                type="number"
                v-model="selectedItem.serve_no"
                class="input-backend"
                placeholder="編號"
                readonly
                disabled
              />
            </label>

            <!-- 標題 -->
            <label
              >標題
              <span class="label-note">* 最多 100 字 ({{ titleLength }} / 100)</span>
              <input
                type="text"
                maxlength="100"
                v-model="selectedItem.serve_title"
                class="input-backend"
                placeholder="標題"
              />
            </label>

            <!-- 標題_英文 -->
            <label
              >標題_英文
              <span class="label-note">* 最多 255 字 ({{ titleEnLength }} / 255)</span>
              <input
                type="text"
                maxlength="255"
                v-model="selectedItem.serve_title_en"
                class="input-backend"
                placeholder="標題_英文"
              />
            </label>

            <!-- 內容 -->
            <label
              >內容
              <span class="label-note">* 最多 500 字 ({{ txtLength }} / 500)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="500"
                v-model="selectedItem.serve_txt"
                class="input-backend"
                placeholder="內容"
              ></textarea>
            </label>

            <!-- 內容_英文 -->
            <label
              >內容_英文
              <span class="label-note">* 最多 1000 字 ({{ txtEnLength }} / 1000)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="1000"
                v-model="selectedItem.serve_txt_en"
                class="input-backend"
                placeholder="內容_英文"
              ></textarea>
            </label>

            <hr class="backend-block-hr" />

            <!-- * 分頁內容 -->
            <div class="backend-block-title">
              分頁內容
              <button
                class="backend-look-pic-btn"
                :class="{ 'backend-look-pic-btn-focus': showImage }"
                @click="showImage = !showImage"
              >
                <img src="/img/Icon/eyes.svg" alt="eyes" />
                圖片
              </button>
            </div>

            <!-- 內頁標題背景圖 -->
            <div class="input-backend-pic-flex">
              <label>
                內頁標題背景圖
                <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
              </label>

              <div>
                <input
                  type="file"
                  @change="
                    (event) => handleFileUpload(event, null, selectedItem, 'serve_title_pic')
                  "
                  class="input-backend"
                />
              </div>

              <!-- 預覽圖片 -->
              <div class="w-1/2 cursor-pointer" v-show="showImage">
                <img
                  :src="selectedItem.serve_title_pic"
                  alt="image Preview"
                  class="pic"
                  @click="() => openImageInNewWindow(selectedItem.serve_title_pic)"
                />
              </div>
            </div>

            <hr class="backend-block-hr" />

            <!-- 區塊1標題 -->
            <label
              >區塊1標題
              <span class="label-note">* 最多 100 字 ({{ block1TitleLength }} / 100)</span>
              <input
                type="text"
                maxlength="100"
                v-model="selectedItem.serve_block1_title"
                class="input-backend"
                placeholder="區塊1標題"
              />
            </label>

            <!-- 區塊1標題_英文 -->
            <label
              >區塊1標題_英文
              <span class="label-note">* 最多 255 字 ({{ block1TitleEnLength }} / 255)</span>
              <input
                type="text"
                maxlength="255"
                v-model="selectedItem.serve_block1_title_en"
                class="input-backend"
                placeholder="區塊1標題_英文"
              />
            </label>

            <!-- 區塊1文字 -->
            <label
              >區塊1文字
              <span class="label-note">* 最多 1000 字 ({{ block1TxtLength }} / 1000)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="1000"
                v-model="selectedItem.serve_block1_txt"
                class="input-backend"
                placeholder="區塊1文字"
              ></textarea>
            </label>

            <!-- 區塊1文字_英文 -->
            <label
              >區塊1文字_英文
              <span class="label-note">* 最多 5000 字 ({{ block1TxtEnLength }} / 5000)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="5000"
                v-model="selectedItem.serve_block1_txt_en"
                class="input-backend"
                placeholder="區塊1文字_英文"
              ></textarea>
            </label>

            <!-- 區塊1圖片 -->
            <div class="input-backend-pic-flex">
              <label>
                區塊1圖片
                <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
              </label>

              <div>
                <input
                  type="file"
                  @change="
                    (event) => handleFileUpload(event, null, selectedItem, 'serve_block1_pic')
                  "
                  class="input-backend"
                />
              </div>

              <!-- 預覽圖片 -->
              <div class="w-1/2 cursor-pointer" v-show="showImage">
                <img
                  :src="selectedItem.serve_block1_pic"
                  alt="image Preview"
                  class="pic"
                  @click="() => openImageInNewWindow(selectedItem.serve_block1_pic)"
                />
              </div>
            </div>

            <hr class="backend-block-hr" />

            <!-- 區塊2標題 -->
            <label
              >區塊2標題
              <span class="label-note">* 最多 100 字 ({{ block2TitleLength }} / 100)</span>
              <input
                type="text"
                maxlength="100"
                v-model="selectedItem.serve_block2_title"
                class="input-backend"
                placeholder="區塊2標題"
              />
            </label>

            <!-- 區塊2標題_英文 -->
            <label
              >區塊2標題_英文
              <span class="label-note">* 最多 255 字 ({{ block2TitleEnLength }} / 255)</span>
              <input
                type="text"
                maxlength="255"
                v-model="selectedItem.serve_block2_title_en"
                class="input-backend"
                placeholder="區塊2標題_英文"
              />
            </label>

            <!-- 區塊2文字 -->
            <label
              >區塊2文字
              <span class="label-note">* 最多 1000 字 ({{ block2TxtLength }} / 1000)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="1000"
                v-model="selectedItem.serve_block2_txt"
                class="input-backend"
                placeholder="區塊2文字"
              ></textarea>
            </label>

            <!-- 區塊2文字_英文 -->
            <label
              >區塊2文字_英文
              <span class="label-note">* 最多 5000 字 ({{ block2TxtEnLength }} / 5000)</span>
              <textarea
                v-autogrow
                type="text"
                maxlength="5000"
                v-model="selectedItem.serve_block2_txt_en"
                class="input-backend"
                placeholder="區塊2文字_英文"
              ></textarea>
            </label>

            <!-- 區塊2圖片 -->
            <div class="input-backend-pic-flex">
              <label>
                區塊2圖片
                <span class="label-note">* 畫質要清晰，圖片先壓縮再上傳</span>
              </label>

              <div>
                <input
                  type="file"
                  @change="
                    (event) => handleFileUpload(event, null, selectedItem, 'serve_block2_pic')
                  "
                  class="input-backend"
                />
              </div>

              <!-- 預覽圖片 -->
              <div class="w-1/2 cursor-pointer" v-show="showImage">
                <img
                  :src="selectedItem.serve_block2_pic"
                  alt="image Preview"
                  class="pic"
                  @click="() => openImageInNewWindow(selectedItem.serve_block2_pic)"
                />
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
  // width: 120px;
  // color: white;
  // text-align: center;
  // border-radius: 6px;
  // padding: 5px 0;

  /* Position the tooltip */
  // position: absolute;
  // z-index: 5;
  // bottom: 120%;
  // left: 50%;
  // margin-left: -60px;
}

.label-note:hover .tooltip-text {
  visibility: visible;
}

.invalid-input {
  border-color: red;
}
</style>
