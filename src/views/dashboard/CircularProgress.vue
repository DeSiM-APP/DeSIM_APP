<template>
  <div class="circular-progress">
    <svg viewBox="0 0 300 300">
      <defs>
        <!-- 定义蓝色渐变 -->
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: #4FBAF0; stop-opacity: 0.1" />
          <stop offset="100%" style="stop-color: #7AD3FF; stop-opacity: 0.1" />
        </linearGradient>

        <!-- 定义黄色渐变 -->
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: #F4D42D; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #FABB16; stop-opacity: 1" />
        </linearGradient>
      </defs>

      <!-- 蓝色圆环 -->
      <circle class="blue-circle" cx="150" cy="150" :r="r" fill="none" stroke="url(#blueGradient)"
        :stroke-width="circleWidth" stroke-linecap="round" :stroke-dasharray="isAnimationStarted ? getGap() : `0, ${C * 2}`"
        :stroke-dashoffset="isAnimationStarted ? getStrokeDashoffset() : -90" />
      <!-- 黄色圆环-->
      <circle class="yellow-circle" cx="150" cy="150" :r="r" fill="none" stroke="url(#yellowGradient)"
        :stroke-width="circleWidth" stroke-linecap="round"
        :stroke-dasharray="isAnimationStarted ? getYellowGap() : `0, ${C * 2}`"
        :stroke-dashoffset="isAnimationStarted ? getStrokeDashoffset() : -90" />
      <!-- 圆环内小圆点 -->
      <circle :class="[
        'small-circle',
        { 'show-small-circle': isAnimationStarted }
      ]" :cx="getSmallCirclePosition().x" :cy="getSmallCirclePosition().y" r="2.3" fill="#fff" />
      <!-- 圆环内侧小蓝点 -->
      <circle class="blue-dot" cx="150" cy="150" :r="innerR" fill="none" stroke="#7AD3FF" stroke-width="1"
        stroke-linecap="round" stroke-dasharray="1, 8" />

      <!-- 中心文字 -->
      <text class="used-text" x="150" y="157" text-anchor="middle">
        {{ used }}GB
      </text>
      <text class="total-text" x="150" y="185" text-anchor="middle">
        /{{ total }}GB
      </text>
    </svg>
  </div>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
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

const progress = computed(() => {
  return props.used / props.total;
});

const circleWidth = 23.09 // 圆环宽度
const gapRatio = 0.2 // 底部圆环占圆环宽度的比例
const r = 100 // 圆环半径
const C = 2 * Math.PI * r; // 圆环周长
const innerCircleGap = 6 // 中心圆距离外边圆环的距离

const innerR = r - circleWidth / 2 - innerCircleGap; // 中心圆半径

const getGap = () => {
  return `${C * (1 - gapRatio)} ${C * gapRatio}`;
}

const getStrokeDashoffset = () => {
  const gap = gapRatio * C;
  return (3 / 4) * C - (1 / 2) * gap;
};

const getYellowGap = () => {
  const usedRatio = (progress.value) * (1 - gapRatio);
  const yellowLength = C * usedRatio;

  return `${yellowLength} ${C - yellowLength}`;
};

const getSmallCirclePosition = () => {
  const gapDeg = 180 * gapRatio;
  const startDeg = -gapDeg;
  const endDeg = -(360 - gapDeg)
  const deg = startDeg + (progress.value * (endDeg - startDeg));
  // 将角度转换为弧度
  const rad = (deg * Math.PI) / 180;
  const x = 150 + r * Math.sin(rad);
  const y = 150 + r * Math.cos(rad);

  return { x, y };
};


const isAnimationStarted = ref(false);

// 当组件挂载后，延时启动动画
onMounted(() => {
  setTimeout(() => {
    isAnimationStarted.value = true;
  }, 500); // 0.5秒后开始动画
});

</script>

<style scoped lang="scss">
.circular-progress {
  width: 100%;
  height: 300px;

  svg {
    width: 100%;
    height: 100%;

    circle {
      transition: stroke-dasharray .3s ease, stroke-dashoffset .3s ease;
    }

    .yellow-circle {
      filter: drop-shadow(0px 3.3px 9.9px rgba(129, 212, 254, 0.25));
      transition: stroke-dasharray 1.2s ease, stroke-dashoffset .6s ease;
    }

    .small-circle {
      transition: opacity 0.3s ease;
      transition-delay: 1.2s;
      opacity: 0;
    }

    .show-small-circle {
      opacity: 1;
    }

    .used-text {
      font-weight: 700;
      font-size: 38.27px;
      line-height: 52.12px;
    }

    .total-text {
      font-weight: 300;
      font-size: 13.2px;
      line-height: 17.97px;

    }

  }
}
</style>
