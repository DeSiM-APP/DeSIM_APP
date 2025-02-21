<template>
  <svg :width="computedWidth" :height="computedHeight" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.5 16C32.5 17.1046 31.6046 18 30.5 18H20.5C19.3954 18 18.5 18.8954 18.5 20V30C18.5 31.1046 17.6046 32 16.5 32C15.3954 32 14.5 31.1046 14.5 30V20C14.5 18.8954 13.6046 18 12.5 18H2.5C1.39543 18 0.5 17.1046 0.5 16C0.5 14.8954 1.39543 14 2.5 14H12.5C13.6046 14 14.5 13.1046 14.5 12V2C14.5 0.89543 15.3954 0 16.5 0C17.6046 0 18.5 0.895431 18.5 2V12C18.5 13.1046 19.3954 14 20.5 14H30.5C31.6046 14 32.5 14.8954 32.5 16Z"
      :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 32
  },
  color: {
    type: String,
    default: 'black'
  }
})

const computedWidth = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})

const computedHeight = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>