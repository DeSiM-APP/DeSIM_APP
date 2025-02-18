<template>
  <div class="step">
    <div :class="['step-header', { active: isActive }]">
      <div class="circle"></div>
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="slot-content">
      <div class="step-line"></div>
      <div class="step-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
  title: String
});
</script>

<style scoped lang="scss">
.step {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .step-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;

  }

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #FFB61D;
    margin-bottom: 10px;
  }

  .title {
    font-size: 14px;
    margin-bottom: 12px;
    font-family: Open Sans;
    font-weight: 400;
    line-height: 18px;

  }

  .step-header.active {
    .circle {
      background-color: #FFB61D;
    }

    .title {
      font-weight: 600;
    }
  }
}

.slot-content {
  font-size: 14px;
  width: 100%;
  position: relative;

  .step-line {
    height: calc(100% + 30px);
    position: absolute;
    left: 8px;
    top: -12px;
    border-right: 1px dashed gray;
  }

  .step-content {
    margin-left: 26px;
  }
}
</style>
