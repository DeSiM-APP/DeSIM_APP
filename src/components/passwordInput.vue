<template>
  <div class="password-input-wrapper">
    <input
      class="input-component"
      :type="showPassword ? 'text' : 'password'"
      v-model="inputValue"
      @input="handleInput"
      placeholder=""
      autocomplete="new-password"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div class="eye-icon" @click="togglePassword">
      <img src="@/assets/eye-off.png" alt="eye-off" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "focus", "blur", "change"]);

const showPassword = ref(false);
const inputValue = ref(props.modelValue);

function handleInput(event) {
  const value = event.target.value;
  // 限制输入长度
  if (value.length > props.maxLength) {
    inputValue.value = value.slice(0, props.maxLength);
  } else {
    inputValue.value = value;
  }
  emit("update:modelValue", inputValue.value);
  emit("change", inputValue.value);
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}

function handleFocus(event) {
  emit("focus", event);
}

function handleBlur(event) {
  emit("blur", event);
}
</script>

<style scoped lang="scss">
.password-input-wrapper {
  position: relative;
  .input-component {
    width: 100%;
    height: 46px;
    padding: 12.5px 14px;
    border-radius: 10px;
    border: 1px solid var(--Stroke, #edf1f3);
    box-shadow: 0px 1px 2px 0px #e4e5e73d;
    background: #ffffff;
    gap: 10px;

    &::placeholder {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 19.6px;
      letter-spacing: -1%;
      color: var(--Grey, #6c7278);
    }

    &:hover {
      border-color: var(--ThemeColor, #f4d42d);
    }

    &:active,
    &:focus {
      border-color: var(--ThemeColor, #f4d42d);
    }
  }
  .eye-icon {
    position: absolute;
    right: 3%;
    top: 36%;
  }
}
</style>
