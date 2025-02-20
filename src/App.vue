<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { showErrorToast } from '@/utils/utils';
onMounted(() => {
  showErrorToast({
  message: '操作失败',
  type: 'error',
  duration: 3000,
  onClick: () => console.log('clicked')
});
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
