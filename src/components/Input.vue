<template>
   <input
    class="input-component"
    :value="modelValue"
    @input="onInput"
    :placeholder="placeholder"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

function onInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped lang="scss">
.input-component {
  width: 350px;
  height: 46px;
  padding: 5% 3%;
  border-radius: 10px;
  border: 1px solid var(--Stroke, #EDF1F3);
  box-shadow: 0px 1px 2px 0px #E4E5E73D;
  background: #FFFFFF;
  gap: 10px;
  
  &::placeholder {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: -1%;
    color: var(--Grey, #6C7278);
  }

  &:hover {
    border-color: var(--ThemeColor, #F4D42D);
  }
  
  &:active,
  &:focus {
    border-color: var(--ThemeColor, #F4D42D);
  }
}
</style>
