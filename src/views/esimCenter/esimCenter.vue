<template>
  <div class="esimCenter">

    <van-tabs v-model:active="active">
      <van-tab :title="t('esimCenter.myesim')">
        <esimCard :imgState="imgState1" :btnState="btnState1"></esimCard>
        <esimCard :imgState="imgState2" :btnState="btnState2"></esimCard>
        <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
        <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
        <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
      </van-tab>
      <van-tab :title="t('esimCenter.archived')">
        <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
        <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>

import esimCard from '@/components/esimCard.vue'
import { ref } from 'vue'
import { Tab as VanTab, Tabs as VanTabs } from 'vant'
import { useI18n } from 'vue-i18n'
const active = ref(0)
// import { useRouter } from 'vue-router'
const imgState1 = 'isUse'
const imgState2 = 'isQrCode'
const imgState3 = 'isOther'
const btnState1 = {
      isShare: 'isShare',
      isInstall: 'isInstall',
    }
const btnState2 = {
      isInstall: 'isInstall',
      isPending: 'isPending'
    }
const btnState3 = {
      isUlsysa: 'isUlsysa'
    }
const { t } = useI18n()
// const router = useRouter()


// const toPage = (path) => {
//   router.push(path)
// }
</script>

<style scoped lang="scss">
.esimCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::v-deep .van-tabs{
    width: 100%;
  }
  ::v-deep .van-tab__panel{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>