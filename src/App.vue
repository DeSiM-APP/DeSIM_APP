<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance();

onMounted(() => {
  proxy.$toast.success('操作成功!');
  // toast.error('操作成功!')
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>