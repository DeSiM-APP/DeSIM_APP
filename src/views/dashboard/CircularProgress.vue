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
      <circle class="blue-circle" cx="150" cy="150" r="100" fill="none" stroke="url(#blueGradient)" stroke-width="23.09"
        stroke-linecap="round" :stroke-dasharray="getGap()" :stroke-dashoffset="getStrokeDashoffset()" />
      <!-- 黄色圆环-->
      <circle class="yellow-circle" cx="150" cy="150" r="100" fill="none" stroke="url(#yellowGradient)"
        stroke-width="23.09" stroke-linecap="round" :stroke-dasharray="getYellowGap()"
        :stroke-dashoffset="getStrokeDashoffset()" />

      <!-- 圆环内侧小蓝点 -->
      <circle class="blue-dot" cx="150" cy="150" r="80" fill="none" stroke="#7AD3FF" stroke-width="1"
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

const gapRatio = 0.2
const r = 100
const C = 2 * Math.PI * r;

const getGap = () => {
  return `${C * (1 - gapRatio)} ${C * gapRatio}`;
}

const getStrokeDashoffset = () => {
  const gap = gapRatio * C;
  return (3 / 4) * C - (1 / 2) * gap;
};

const getYellowGap = () => {
  const usedRatio = (props.used / props.total) * (1 - gapRatio);
  const yellowLength = C * usedRatio;

  return `${yellowLength} ${C - yellowLength}`;
};


</script>

<style scoped lang="scss">
.circular-progress {
  width: 100%;
  height: 300px;

  svg {
    width: 100%;
    height: 100%;

    .yellow-circle {
      filter: drop-shadow(0px 3.3px 9.9px rgba(129, 212, 254, 0.25));
    }

    .used-text {
      font-family: Open Sans;
      font-weight: 700;
      font-size: 38.27px;
      line-height: 52.12px;
    }

    .total-text {
      font-family: Open Sans;
      font-weight: 300;
      font-size: 13.2px;
      line-height: 17.97px;

    }
  }
}

circle {
  transition: stroke-dashoffset 0.3s;
}
</style>
