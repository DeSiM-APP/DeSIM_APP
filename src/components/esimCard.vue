<template>
  <div class="esimCard" >
    <div class="one">
      <div class="one-img1">
        <img src="@/assets/use-cover.png" alt="" v-if="imgState === 'isUse'">
        <img src="@/assets/cover.png" alt="" v-else-if="imgState === 'isQrCode'">
        <img src="@/assets/USB.png" alt="" v-else>
      </div>
      <div class="one-img2">
        <img src="@/assets/USA-eSIM-1day.png" alt="">
      </div>
      <div class="one-img3">
        <img src="@/assets/left-outline.png" alt="">
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
      <img class="no-share-btn" v-if="btnState.isShare === 'isShare'" src="@/assets/share-btn.png" alt="">
      <img class="no-install-btn" v-if="btnState.isInstall  === 'isInstall'" src="@/assets/install-btn.png" alt="">
      <img class="no-share-btn" v-if="btnState.isPending === 'isPending'" src="@/assets/pending-btn.png" alt="">
      <img class="no-share-btn" v-if="btnState.isUlsysa === 'isUlsysa'" src="@/assets/ulsysa-btn.png">
    </div>
    <!-- <slot></slot> -->
  </div>
</template>

<script setup>
const props = defineProps({
  imgState: {
    type: String,
    default: 'isUse'
  },
  btnState: {
    type: Object,
    default: () => ({
      isShare: 'isShare',
      isInstall: 'isInstall',
      isPending: 'isPending',
      isUlsysa: 'isUlsysa'
    })
  }
})

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
  margin-top: 5%;
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
  // margin-top: 2%;
  .two-text-left {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: -3%;
    color: #6C7278;
  }
  .two-text-right {
    font-family: Open Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;
    letter-spacing: 2%;
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
    width: 70px;
    height: 38px;
    background-color: #F7F9FC;
    border-radius: 8px;
  }
  .no-share-btn {
    width: 90px;
    height: 38px;
    background-color: #F7F9FC;
    border-radius: 8px;
  }

}
}


</style>
