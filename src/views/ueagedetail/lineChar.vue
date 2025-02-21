<template>
  <!-- <div class="bar-char"></div> -->
  <div ref="chartRef" :style="{ width: '112%', height: '300px' }"></div>
</template>
<script setup>
import { onBeforeUpdate, onMounted, ref, watch, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import lineButton from '@/assets/line-button.png'
const chartRef = ref(null)
const props = defineProps({
  xData: {
    type: Array,
    default: () => [],
  },
  yData: {
    type: Array,
    default: () => [],
  },
})
let myChart = null
const option = ref({
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255,255,255,0)',
    formatter: (params) => {
      return ``;
    }
  },
  grid: {
    top: '5%',
    right: '0%',
    left: '0%',
    bottom: '22%'
  },
  xAxis: [{
    type: "category",
    data: props.xData,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#E2E2E2",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        type: "dashed",
      },
    },
    axisTick: {
      show: false, //隐藏X轴刻度
    },
    axisLabel: {
      fontSize: 12,
      color: "rgba(84,84,84,1)"
    },
  }, ],
  yAxis: [{
    type: "value",
    name: "单位:",
    nameTextStyle: {
      color: "#252525",
      fontSize: 12,
      padding: [0, 0, 0, -35],
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#E2E2E2",
      },
    },
    axisLabel: {
      formatter: "{value}",
      color: "#737373",
      fontSize: 12,
    },
  }, ],
  dataZoom: [
    {
      xAxisIndex: 0, //这里是从X轴的0刻度开始
      show: false, //是否显示滑动条，不影响使用
      type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      startValue: 0, // 从头开始。
      endValue: 4 // 一次性展示6个。
    },
    {
      // 没有下面这块的话，只能拖动滚动条，
      // 鼠标滚轮在区域内不能控制外部滚动条
      type: 'inside',
      // 滚轮是否触发缩放
      zoomOnMouseWheel: false,
      // 鼠标滚轮触发滚动
      moveOnMouseMove: true,
      moveOnMouseWheel: true
    }
  ],
  series: [{
    data: props.yData,
    type: "line",
    smooth: false, //平滑曲线显示
    showAllSymbol: false,
    symbol: 'circle',
    symbolSize: 22,
    smooth: true,
    lineStyle: {
      normal: {
        width: 3,
        color: {
          type: 'linear',
          colorStops: [{
            offset: 0,
            color: '#F4D42D' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#F4D42D' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },
      }
    },
    itemStyle: {
      color: "#FABB16",
      borderColor: "#fff",
      borderWidth: 4,
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowBlur: 0,
      shadowOffsetY: 2,
      shadowOffsetX: 2,
    },
    areaStyle: {
      normal: {
        type: "default",
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [{
            offset: 0,
            color: "rgba(244,212,45,.9)",
          },
          {
            offset: 0.3,
            color: "rgba(244,212,45,.3)",
          },
          {
            offset: 1,
            color: "rgba(244,212,45,0)",
          },
        ],
        false
      ),
    },
    },
    label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold',
          position: 'top',
          padding: [-5, -5, -5, -5],
          color: '#Ef9C11',
          shadowOffsetX: 5,
          shadowOffsetY: 10,
          formatter: (params) => {
            return params.value + 'GB'
          },
          rich: {
            a: {
              color: 'rgba(239,156,17,1)',
              fontSize: 14,
            }
          }
        },
}],
})

onMounted(() => {
  const chartDom = chartRef.value
  myChart = echarts.init(chartDom)
  myChart.setOption(option.value)
  window.addEventListener('resize', () => {
    myChart?.resize()
  })
})

// Remove onBeforeUpdate and add watch
watch(
  () => [props.xData, props.yData],
  ([newXData, newYData]) => {
    if (myChart) {
      option.value.xAxis[0].data = newXData
      option.value.series[0].data = newYData
      myChart.setOption(option.value)
    }
  },
  { deep: true }
)

// Cleanup on component unmount
onUnmounted(() => {
  if (myChart) {
    myChart.dispose()
    myChart = null
  }
  window.removeEventListener('resize', () => {
    myChart?.resize()
  })
})
</script>


<style scoped lang="scss"> 

</style>
