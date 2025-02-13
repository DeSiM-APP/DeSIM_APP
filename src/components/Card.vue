<template>
  <div class="card" :style="{ backgroundColor: bgColor, color: textColor }" >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: '#000 '
  },
  textColor: {
    type: String,
    default: '#fff'
  }
})

</script>

<style scoped>
.card {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
}
</style>
