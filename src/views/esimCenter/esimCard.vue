<template>
  <div class="esimCard" >
    <div class="one">
      <div class="one-img1">
        <img src="@/assets/use-cover.png" alt="" v-if="item.imgState === 'isUse'">
        <img src="@/assets/cover.png" alt="" v-else-if="item.imgState === 'isQrCode'">
        <img src="@/assets/USB.png" alt="" v-else>
      </div>
      <div class="one-img2">
        <img src="@/assets/USA-eSIM-1day.png" alt="">
      </div>
      <div class="one-img3">
        <Arrow color="#000000" @click="handleArrowClick" />
      </div>
    </div>
    <div class="two-text">
      <p class="two-text-left">{{ $t('esimCenter.status') }}</p>
      <p class="two-text-right">{{ $t('esimCenter.statusText') }}</p>
    </div>
    <div class="two-text">
      <p class="two-text-left">{{ $t('esimCenter.generationDate') }}</p>
      <p class="two-text-right">{{ $t('esimCenter.generationDateText') }}</p>
    </div>
    <div class="two-text">
      <p class="two-text-left">{{ $t('esimCenter.orderID') }}</p>
      <p class="two-text-right">{{ $t('esimCenter.orderIDText') }}</p>
    </div>
    <div class="two-text">
      <p class="two-text-left">{{ $t('esimCenter.coverage') }}</p>
      <p class="two-text-right">{{ $t('esimCenter.coverageText') }}</p>
    </div>
    <div class="two-text">
      <p class="two-text-left">{{ $t('esimCenter.remainingData') }}</p>
      <p class="two-text-right">{{ $t('esimCenter.remainingDataText') }}</p>
    </div>
    <div class="three-btn">
      <button class="share-btn" @click="shareButtonIn" v-if="item.isShare === 'isShare'" :style="{color: item.isDisable === true ? '#000000' : '#7B8086' }" >
        {{ $t('esimCenter.share') }}
      </button>
      <button class="share-btn" v-if="item.isInstall  === 'isInstall'" :style="{color: item.isDisable === true ? '#000000' : '#7B8086' }" >
        {{ $t('esimCenter.install') }}</button>
      <button class="share-btn" v-if="item.isPending === 'isPending'" :style="{color: item.isDisable === true ? '#000000' : '#7B8086' }" >
        {{ $t('esimCenter.pending') }}</button>
      <button class="ulsya-btn" v-if="item.isUlsysa === 'isUlsysa'" :style="{color: item.isDisable === true ? '#000000' : '#7B8086' }" >
        <img src="@/assets/User-04c.png" alt="">
        {{ $t('esimCenter.ulsysa') }}
      </button>
    </div>
    <!-- <slot></slot> -->
  </div>
</template>

<script setup>
import Arrow from '@/components/icons/Arrow.vue'
import { useToast } from '@/utils/utils'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

// 更新 defineEmits 以包含新的事件
const emits = defineEmits(['shareButtonNow', 'arrowClicked'])

const shareButtonIn = () => {
  useToast({
    message: 'Share failed. Please try again.',
    type: 'error',
    duration: 2000,
  })
}

// 定义处理 Arrow 点击事件的方法
const handleArrowClick = () => {
  emits('arrowClicked', props.item.key)
}
</script>

<style scoped lang="scss">
.esimCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  padding: 16px;
  background-color: #F7F9FC;
  .one {
    width: 100%;
    height: 48px;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    .one-img1 {
      width: 48px;
      height: 48px;
    }
    .one-img2 {
      width: 100%;
      height: 48px;
      line-height: 52px;
      margin-left: 1%;
    }
    
}
.two-text {
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .two-text-left {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.07px;
    color: #6C7278;
  }
  .two-text-right {
    font-family: Open Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;
    color: #6C7278;
  }
}
.three-btn {
  width: 100%;
  height: 38px;
  gap: 12px;
  // margin-top: 3%;
  display: flex;
  align-content: center;
  justify-content: end;
  .share-btn {
    background-color: #E0E6E9;
    border-radius: 20px;
    padding-top: 10px;
    padding-right: 16px;
    padding-bottom: 10px;
    padding-left: 16px;
    gap: 4px;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: -3%;

  }
  .ulsya-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E0E6E9;
    border-radius: 20px;
    padding-top: 10px;
    padding-right: 16px;
    padding-bottom: 10px;
    padding-left: 16px;
    gap: 4px;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: -3%;

  }
}
}


</style>
