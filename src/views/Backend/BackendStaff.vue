<script setup>
import { ref, computed } from 'vue'
import ConfirmDialog from '../../components/ConfirmDialog.vue'

// staff table data
const staffData = ref([
  {
    staff_no: 1,
    staff_name: '小王子',
    staff_account: 'wst0001',
    staff_password: '123456',
    staff_permission: 1,
    staff_datetime: '112/01/02 13:22:51',
    update_staff_no: 1
  },
  {
    staff_no: 2,
    staff_name: '小公舉',
    staff_account: 'wst0002',
    staff_password: '123456',
    staff_permission: 2,
    staff_datetime: '112/01/02 13:22:51',
    update_staff_no: 1
  },
  {
    staff_no: 3,
    staff_name: '小蕃薯',
    staff_account: 'wst0003',
    staff_password: '123456',
    staff_permission: 3,
    staff_datetime: '112/01/02 13:22:51',
    update_staff_no: 1
  },
  {
    staff_no: 4,
    staff_name: '小橘子',
    staff_account: 'wst0004',
    staff_password: '123456',
    staff_permission: 3,
    staff_datetime: '112/01/02 13:22:51',
    update_staff_no: 1
  }
])

// 選中得編輯員工
const selectedStaff = ref(null)

// 編輯 按鈕
const editStaff = (staffData) => {
  selectedStaff.value = { ...staffData, staff_password: '' }
}

// 編輯員工表單 儲存編輯
const saveEdit = () => {
  if (selectedStaff.value && selectedStaff.value.staff_no !== undefined) {
    const index = staffData.value.findIndex(
      (staff) => staff.staff_no === selectedStaff.value.staff_no
    )
    if (index !== -1) {
      // 更新時間戳
      selectedStaff.value.staff_datetime = getCurrentDateTime()

      // 創建更新的員工對象
      const updatedStaff = { ...staffData.value[index], ...selectedStaff.value }

      // 如果沒有輸入新密碼，保持原有的密碼
      if (selectedStaff.value.staff_password === '') {
        updatedStaff.staff_password = staffData.value[index].staff_password
      }

      // 更新員工資料
      staffData.value[index] = updatedStaff
      console.log('員工資料已儲存: ', staffData.value[index])
    }
  } else {
    console.error('沒有選定的員工來保存')
    return
  }

  selectedStaff.value = null // 清除選定的員工，關閉表單
}

// 編輯員工表單 取消編輯
const cancelEdit = () => {
  selectedStaff.value = null // 清除選定的員工，關閉表單
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
const staffToDelete = ref(null)

// 再次確認刪除視窗
const attemptDeleteStaff = (staff) => {
  confirmMessage.value = `確定要刪除管理員 『 ${staff.staff_name} 』 嗎？`
  staffToDelete.value = staff
  showConfirm.value = true
}

// 再次確認刪除視窗 => 確認刪除
const handleConfirm = () => {
  if (staffToDelete.value && staffToDelete.value.staff_no !== undefined) {
    const index = staffData.value.findIndex(
      (staff) => staff.staff_no === staffToDelete.value.staff_no
    )
    if (index !== -1) {
      staffData.value.splice(index, 1) // 刪除指定索引的員工
      console.log('刪除員工:', staffToDelete.value)
    }
  } else {
    console.error('沒有選定的員工來刪除')
  }

  staffToDelete.value = null // 清除選定的員工
  showConfirm.value = false // 關閉確認視窗
}

// 再次確認刪除視窗 => 取消刪除
const handleCancel = () => {
  showConfirm.value = false
}

// 新增員工 數據結構
const newStaff = ref({
  staff_name: '',
  staff_account: '',
  staff_password: '',
  staff_permission: ''
})

// 新增員工 輸入框檢查狀態
const touched = ref({
  staff_account: false,
  staff_password: false
})

// 新增員工 檢查帳號是否符合要求的計算屬性
const isAccountValid = computed(() => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(newStaff.value.staff_account)
})

// 新增員工 檢查密碼是否符合要求的計算屬性
const isPasswordValid = computed(() => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(newStaff.value.staff_password)
})

// 新增員工 處理 blur 事件的函數
const handleBlur = (field) => {
  touched.value[field] = true
}

// 控制新增員工表單的顯示
const showAddStaffForm = ref(false)

// 處理新增員工的函數
const saveNewStaff = () => {
  // 檢查名稱、帳號、密碼是否為空
  if (
    !newStaff.value.staff_name ||
    !newStaff.value.staff_account ||
    !newStaff.value.staff_password
  ) {
    alert('所有欄位必填 !')
    return
  }

  // 檢查帳號和密碼是否符合要求
  const accountAndPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  if (
    !accountAndPasswordPattern.test(newStaff.value.staff_account) ||
    !accountAndPasswordPattern.test(newStaff.value.staff_password)
  ) {
    alert('帳號和密碼不得小於 6 位數且必須包含英文及數字。')
    return
  }

  // 檢查是否選擇了權限
  if (!newStaff.value.staff_permission) {
    alert('請選擇一個權限。')
    return
  }

  // 處理新增員工的邏輯
  const newStaffData = {
    staff_name: newStaff.value.staff_name,
    staff_account: newStaff.value.staff_account,
    staff_password: newStaff.value.staff_password,
    staff_permission: newStaff.value.staff_permission
  }

  staffData.value.push(newStaffData) // 新增到列表中

  // 如果所有檢查都通過，則處理新增員工的邏輯
  console.log(newStaff.value)

  // 重置 newStaff 和隱藏表單
  newStaff.value = { staff_name: '', staff_account: '', staff_password: '', staff_permission: '' }
  showAddStaffForm.value = false

  // 重置 touched 輸入框檢查狀態
  touched.value = { staff_account: false, staff_password: false }
}

// 取消新增員工
const cancelAddStaff = () => {
  // 取消新增員工操作，重置數據並隱藏表單
  newStaff.value = { staff_name: '', staff_account: '', staff_password: '', staff_permission: '' }

  // 重置 touched 輸入框檢查狀態
  touched.value = { staff_account: false, staff_password: false }

  showAddStaffForm.value = false
}
</script>

<template>
  <div class="backend-block-flex">
    <!-- 大標題 -->
    <div class="backend-page-title">
      <div class="">管理人員</div>
      <!-- 新增員工按鈕 -->
      <button @click="showAddStaffForm = true" class="btn-blue-s">+ &nbsp; 新增</button>
    </div>
    <div class="rounded-md shadow overflow-hidden">
      <!-- {{ staffData }} -->

      <!-- * table header -->
      <div class="backend-table-header">
        <label class="backend-table-header-label col-span-3">名稱 </label>
        <label class="backend-table-header-label col-span-3">帳號 </label>
        <label class="backend-table-header-label col-span-2">權限 </label>
        <label class="backend-table-header-label col-span-2">功能 </label>
      </div>

      <!-- * table body -->
      <div class="backend-table-body" v-for="item in staffData" :key="item.staff_no">
        <div class="backend-table-body-label col-span-3">{{ item.staff_name }}</div>
        <div class="backend-table-body-label col-span-3">{{ item.staff_account }}</div>
        <div class="backend-table-body-label col-span-2">{{ item.staff_permission }}</div>
        <div class="backend-table-body-label col-span-2 flex justify-center gap-2">
          <button @click="editStaff(item)">編輯</button>
          <button @click="attemptDeleteStaff(item)">刪除</button>
        </div>
      </div>

      <!-- * 編輯員工表單 -->
      <div v-if="selectedStaff" class="backend-edit-overlay">
        <div class="backend-edit-modal">
          <!-- content -->
          <div class="backend-edit-modal-content backend-block-flex">
            <div class="backend-page-title">編輯管理員</div>
            <label
              >名稱
              <!-- <span class="label-note"></span> -->
              <input
                type="text"
                maxlength="20"
                v-model="selectedStaff.staff_name"
                class="input-backend"
                placeholder="名稱"
              />
            </label>
            <label
              >帳號
              <span class="label-note">* 請使用英數組成</span>
              <input
                type="text"
                maxlength="20"
                v-model="selectedStaff.staff_account"
                class="input-backend"
                placeholder="帳號"
              />
            </label>
            <label
              >新密碼
              <span class="label-note">* 請使用英數組成，最少 6 碼</span>
              <input
                type="text"
                maxlength="20"
                v-model="selectedStaff.staff_password"
                class="input-backend"
                placeholder="若要變更密碼，請輸入新密碼"
              />
            </label>

            <div>
              <label>權限</label>
              <span class="label-note"
                >information
                <span class="tooltip-text"
                  >一級權限: 可編輯權限，可新增修改刪除管理員。 <br />
                  二級權限: 可新增修改刪除管理員。<br />
                  三級權限: 無編輯管理員權限。</span
                >
              </span>
              <div class="flex gap-4">
                <label>
                  <input type="radio" value="1" v-model="selectedStaff.staff_permission" /> 一級
                </label>
                <label>
                  <input type="radio" value="2" v-model="selectedStaff.staff_permission" /> 二級
                </label>
                <label>
                  <input type="radio" value="3" v-model="selectedStaff.staff_permission" /> 三級
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

      <!-- * 新增員工表單 -->
      <div v-if="showAddStaffForm" class="backend-edit-overlay">
        <div class="backend-edit-modal">
          <!-- content -->
          <div class="backend-edit-modal-content backend-block-flex">
            <div class="backend-page-title">新增管理員</div>
            <label
              >名稱
              <span class="label-note">* 必填</span>
              <input
                type="text"
                maxlength="20"
                v-model="newStaff.staff_name"
                class="input-backend"
                placeholder="名稱"
              />
            </label>
            <label
              >帳號
              <span class="label-note">* 請使用英數組成</span>
              <input
                type="text"
                maxlength="20"
                v-model="newStaff.staff_account"
                @blur="handleBlur('staff_account')"
                :class="{ 'invalid-input': touched.staff_account && !isAccountValid }"
                class="input-backend"
                placeholder="帳號"
              />
            </label>
            <label
              >密碼
              <span class="label-note">* 請使用英數組成，最少 6 碼</span>
              <input
                type="text"
                maxlength="20"
                v-model="newStaff.staff_password"
                @blur="handleBlur('staff_password')"
                :class="{ 'invalid-input': touched.staff_password && !isPasswordValid }"
                class="input-backend"
                placeholder="密碼"
              />
            </label>

            <div>
              <label>權限</label>
              <span class="label-note"
                >說明
                <span class="tooltip-text"
                  >一級權限: 可編輯權限，可新增修改刪除管理員。 <br />
                  二級權限: 可新增修改刪除管理員。<br />
                  三級權限: 無編輯管理員權限。</span
                >
              </span>
              <div class="flex gap-4">
                <label>
                  <input type="radio" value="1" v-model="newStaff.staff_permission" /> 一級
                </label>
                <label>
                  <input type="radio" value="2" v-model="newStaff.staff_permission" /> 二級
                </label>
                <label>
                  <input type="radio" value="3" v-model="newStaff.staff_permission" /> 三級
                </label>
              </div>
            </div>
          </div>

          <!-- Footer -->

          <div class="backend-edit-modal-footer">
            <button @click="cancelAddStaff" class="btn-white-s">取消</button>
            <button @click="saveNewStaff" class="btn-blue-s">儲存</button>
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
  @apply fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md overflow-hidden;

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
