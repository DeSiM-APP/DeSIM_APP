<template>
  <div class="esimCenter">
    <esimCard :imgState="imgState1" :btnState="btnState1"></esimCard>
    <esimCard :imgState="imgState2" :btnState="btnState2"></esimCard>
    <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
    <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
    <esimCard :imgState="imgState3" :btnState="btnState3"></esimCard>
  </div>
</template>

<script setup>

import esimCard from '@/components/esimCard.vue'
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
  margin-top: 18%;
}
</style>