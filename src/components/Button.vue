<template>
  <button 
    :class="[
      'custom-button',
      { 
        'is-loading': isLoading, 
        'is-disabled': disabled,
        'icon-only': iconOnly 
      }
    ]"
    @click="handleClick" 
    :disabled="disabled || isLoading"
  >
    <Loading color="#000" v-if="isLoading" size="19px"/>
    <slot></slot>
  </button>
</template>

<script setup>
import { Loading } from 'vant'
const emit = defineEmits(['click'])
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  iconOnly: {
    type: Boolean,
    default: false
  },
})

function handleClick() {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style scoped>
.custom-button {
  box-shadow: 0px 0px 12px 0px #0000001A, 0px 1px 2px 0px #F4D42D, 0px 0px 12px 0px #B1C9C833;
  border-width: 1px;
  padding: 10px 24px;
  border-radius: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--ThemeColor, #F4D42D);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
}

.custom-button:not(:disabled):active {
  background-color: var(--ThemeColor-dark, #e6c729);
  box-shadow: 0px 0px 8px 0px #0000001A, 0px 1px 1px 0px #e6c729, 0px 0px 8px 0px #B1C9C833;
}

.custom-button.is-disabled:not(.is-loading) {
  background-color: #cccccc;
  cursor: not-allowed;
  box-shadow: none;
}

.custom-button.is-loading {
  background-color: var(--ThemeColor, #F4D42D);
  cursor: wait;
  opacity: 0.8;
}

.icon-only {
  padding: 8px!important;
  width: fit-content!important;
}
</style>
