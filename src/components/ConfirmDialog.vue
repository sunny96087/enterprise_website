<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  message: String
})

const emit = defineEmits(['confirm', 'cancel'])

const onConfirm = () => {
  emit('confirm')
}

const onCancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog">
      <div class="flex items-center gap-4 pt-6 pb-4 px-6">
        <div class="min-w-12 min-h-12">
          <img class="pic" src="/img/Icon/error.svg" alt="error" />
        </div>
        <div>
          <p class="text-gray-900 text-lg">{{ message }}</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="py-3 px-6 bg-gray-50 flex justify-end gap-4">
        <button @click="onCancel" class="btn-white-s">取消</button>
        <button @click="onConfirm" class="btn-red-s">確定</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 添加您的自定義樣式 */
.dialog-overlay {
  @apply w-full h-screen bg-black bg-opacity-20 absolute inset-0;
}

.dialog {
  @apply bg-white rounded-lg overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col;
}
</style>
