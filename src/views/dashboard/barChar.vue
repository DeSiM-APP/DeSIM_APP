<template>
  <!-- <div class="bar-char"></div> -->
  <div ref="chartRef" :style="{ width: '297px', height: '206px' }"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const chartRef = ref(null)

onMounted(() => {
const chartDom = chartRef.value
const myChart = echarts.init(chartDom)
const option = {
// ECharts 配置项
backgroundColor: '#fff',
tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label:{
            },
            shadowStyle: {
              color: 'rgba(250,162,22,.1)',
            },
        },
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
        type: 'category',
        color: '#59588D',
        data: ['2/19', '2/20', '2/21', '2/22'],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
          show: false // 隐藏X轴轴线
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}%',
            color: '#999',
            textStyle: {
                fontSize: 12
            },
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            },
            show: false
        }
    }],
    series: [{
        type: 'bar',
        data: [40, 90, 50, 80],
        barWidth: '25px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(244,212,45,.5)' // 0% 处的颜色     
                }, {
                    offset: 1,
                    color: 'rgba(250,162,22,.5)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 8, 8],
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(244,212,45,.9)' // 0% 处的颜色     
                }, {
                    offset: 1,
                    color: 'rgba(250,162,22,.9)' // 100% 处的颜色
                }], false),
            }
        },
        label: {
            show: false,
            fontSize: 12,
            fontWeight: 'bold',
            position: 'top',
            padding: [-5, -5, -5, -5],
            color: 'Ef9C11',
            formatter: (params) => {
                return params.value + 'GB'
            },
            rich: {
                a: {
                    color: 'rgba(239,156,17,1)'
                }
            }
        },
        
    },
    
  ]
    
}

myChart.setOption(option)

myChart.on('mouseover', (params) => {
    // Update the option to show label for the hovered bar
    option.series[0].data = option.series[0].data.map((item, index) => {
        const value = typeof item === 'object' ? item.value : item
        return {
            value: value,
            label: {
                show: index === params.dataIndex
            }
        }
    })
    myChart.setOption(option)
})

// 监听窗口大小变化
window.addEventListener('resize', () => {
myChart.resize()
})
})

</script>


<style scoped lang="scss"> 
.bar-char {
  width: 297px;
  height: 206px;
  ::v-deep .tooltip-custom {
    background-color: rgba(250,162,22,.1) !important;
    border-radius: 10px !important;
    padding: 8px 12px !important;
    border: none !important;
    color: #666 !important;
}
}

</style>
