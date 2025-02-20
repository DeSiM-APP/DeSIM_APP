<template>
  <div class="circular-progress">
    <svg viewBox="0 0 110 110">
      <defs>
        <!-- 定义蓝色渐变 -->
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #7AD3FF; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #4FBAF0; stop-opacity: 1" />
        </linearGradient>

        <!-- 定义黄色渐变 -->
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #F4D42D; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #FABB16; stop-opacity: 1" />
        </linearGradient>
      </defs>

      <!-- 背景圆环 (蓝色渐变) -->
      <circle
        cx="55"
        cy="55"
        r="45"
        fill="none"
        stroke="url(#blueGradient)" 
        stroke-width="10"
        stroke-linecap="round" 
      />
      <!-- 进度圆环 (黄色渐变) -->
      <circle
        cx="55"
        cy="55"
        r="45"
        fill="none"
        stroke="url(#yellowGradient)" 
        stroke-width="10"
        stroke-linecap="round"  
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        transform="rotate(90 55 55)" 
      />
      
      <!-- 圆环内侧小蓝点 -->
      <circle
        v-for="(dot, index) in dots"
        :key="index"
        cx="55"
        cy="55"
        r="3"
        fill="#6BCCFE"
        :transform="`rotate(${dot.angle} 55 55)`"
        :style="{ transformOrigin: '50% 50%' }"
      />

      <!-- 中心文字 -->
      <text
        x="55"
        y="55"
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
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 100
  }
});

// 计算圆的周长
const circumference = computed(() => 2 * Math.PI * 45);

// 计算进度条的偏移量
const strokeDashoffset = computed(() => {
  const percentage = (props.used / props.total) * 100; // 使用 used 和 total 计算百分比
  return circumference.value * (1 - percentage / 100);
});

// 计算内圈小蓝点的分布
const dots = computed(() => {
  const numberOfDots = 12; // 小圆点的数量
  const angleStep = 360 / numberOfDots;
  return Array.from({ length: numberOfDots }, (_, index) => ({
    angle: index * angleStep
  }));
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
