<template>
  <button class="custom-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<style scoped>
.custom-button {
  box-shadow: 0px 0px 12px 0px #0000001A, 0px 1px 2px 0px #F4D42D, 0px 0px 12px 0px #B1C9C833;
  border-width: 1px;
  padding: 2% 5%;
  border-radius: 100px;
  width: 100%;
  background-color: var(--ThemeColor, #F4D42D);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
}


.custom-button:active {
  transform: scale(0.99);
}
</style>
