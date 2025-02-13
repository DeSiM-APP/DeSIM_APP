<template>
  <svg :width="computedWidth" :height="computedHeight" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75781 17.0046L16.2438 8.51855M16.2438 17.0046L7.75781 8.51855" :stroke="color" stroke-width="1.5"
      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'black'
  }
})

// 如果传入的是数字，则自动添加 px 单位，否则直接使用传入的字符串
const computedWidth = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})

// 默认 viewBox 为 24:25 的比例，若传入数字则自动按比例计算高度，否则直接使用传入值
const computedHeight = computed(() => {
  return typeof props.size === 'number' ? `${props.size * (25 / 24)}px` : props.size
})
</script>