<template>
  <svg :width="computedWidth" :height="computedHeight" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.75 12.6992L5.75 12.6992M19.75 12.6992L15.75 8.69922M19.75 12.6992L15.75 16.6992" 
      :stroke="color" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"/>
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
    default: 'white'
  }
})

const computedWidth = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})

const computedHeight = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>