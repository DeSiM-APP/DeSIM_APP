<template>
  <Popup v-model:show="show" position="bottom" round :style="{ height: computedHeight }">
    <div class="popup-header">
      <h2>{{ title }}</h2>
      <button @click="show = false" class="close-button"><Close /></button>
    </div>
    <slot></slot>
  </Popup>
</template>

<script setup>
import { Popup } from "vant";
import { ref, defineProps, defineEmits, watch, computed } from "vue";
import Close from "@/components/icons/Close.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Title",
  },
  height: {
    type: String,
    default: "auto",
  },
});

const emit = defineEmits(["update:modelValue"]);

const show = ref(props.modelValue);

const computedHeight = computed(() => props.height);

watch(
  () => props.modelValue,
  (newVal) => {
    show.value = newVal;
  }
);

watch(show, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>

<style scoped lang="scss">
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  h2 {
    font-weight: 600;
  }
}

.close-button {
  background: none;
  border: none;
  font-size: 16px;
  color: black;
  cursor: pointer;
}
</style>
