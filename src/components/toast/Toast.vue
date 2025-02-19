<!-- Toast.vue -->
<template>
  <teleport to="body">
    <transition-group name="toast">
      <div
        v-for="toast in state.toasts"
        :key="toast.id"
        class="toast-item"
        :class="toast.type"
      >
        {{ toast.message }}
      </div>
    </transition-group>
  </teleport>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const state = reactive({
  toasts: [] as ToastItem[],
});

let toastId = 0;

const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  const id = toastId++;
  state.toasts.push({ id, message, type });
  setTimeout(() => {
    const index = state.toasts.findIndex(t => t.id === id);
    if (index > -1) state.toasts.splice(index, 1);
  }, 3000);
};

defineExpose({
  addToast,
});
</script>

<style scoped>
.toast-item {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 24px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  background-color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.toast-item.success {
  background-color: #67c23a;
}

.toast-item.error {
  background-color: #f56c6c;
}

.toast-item.info {
  background-color: #909399;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-active {
  position: absolute;
}
</style>