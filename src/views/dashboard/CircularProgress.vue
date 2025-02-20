<template>
  <div class="circular-progress">
    <svg viewBox="0 0 100 100">
      <!-- 背景圆环 -->
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#FABB16"
        stroke-width="10"
      />
      <!-- 进度圆环 -->
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#7AD3FF"
        stroke-width="10"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        transform="rotate(-90 50 50)"
      />
      <!-- 中心文字 -->
      <text
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="16"
        font-weight="bold"
      >
        {{ used }}/{{ total }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  used: {
    type: String,
    default: '3G'
  },
  total: {
    type: String,
    default: '3G'
  },
  percentage: {
    type: Number,
    default: 0
  }
});

const circumference = computed(() => 2 * Math.PI * 45);
const strokeDashoffset = computed(() => {
  return circumference.value * (1 - props.percentage / 100);
});
</script>

<style scoped>
.circular-progress {
  width: 150px;
  height: 150px;
}

svg {
  width: 100%;
  height: 100%;
}

circle {
  transition: stroke-dashoffset 0.3s;
}
</style> 