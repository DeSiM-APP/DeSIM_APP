<template>
  <div class="esimCenter">
    <van-tabs v-model:active="active" color="#EF9C11">
      <van-tab :title="t('esimCenter.myesim')">
        <esimCard
        v-for="item in btnStateArray1"
        :key="item.key" 
        :item="item"
      />
      <img src="@/assets/carbon_add-filled.png" alt="" class="add-btn">
      </van-tab>
      <van-tab :title="t('esimCenter.archived')">
        <esimCard
        v-for="item in btnStateArray2"
        :key="item.key" 
        :item="item"
      />
      <img src="@/assets/carbon_add-filled.png" alt="" class="add-btn">
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
const btnStateArray1 = [
{
      isShare: 'isShare',
      isInstall: 'isInstall',
      isPending:'',
      isUlsysa:'',
      imgState: 'isUse',
      isDisable: false,
      key: 1
    },{
      isShare:'',
      isInstall: 'isInstall',
      isPending: 'isPending',
      isUlsysa:'',
      imgState: 'isQrCode',
      isDisable: true,
      key: 2
    },
    {
      isShare:'',
      isInstall: '',
      isPending: '',
      isUlsysa: 'isUlsysa',
      imgState: 'isOther',
      isDisable: true,
      key: 3
    },
    {
      isShare:'',
      isInstall: '',
      isPending: '',
      isUlsysa: 'isUlsysa',
      imgState: 'isOther',
      isDisable: true,
      key: 4
    },
    {
      isShare:'',
      isInstall: '',
      isPending: '',
      isUlsysa: 'isUlsysa',
      imgState: 'isOther',
      isDisable: true,
      key: 5
    }
]
const btnStateArray2 = [
  {
      isShare:'',
      isInstall: '',
      isPending: '',
      isUlsysa: 'isUlsysa',
      imgState: 'isOther',
      isDisable: true,
      key: 1
    },    
    {
      isShare:'',
      isInstall: '',
      isPending: '',
      isUlsysa: 'isUlsysa',
      imgState: 'isOther',
      isDisable: true,
      key: 2
    },
]
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
  width: 100%;
  :deep(.van-tabs) {
    width: 100%;
    .van-tabs__wrap {
      border-bottom: 1px solid #D9D9D9;

    }
    .van-tabs__line {
      width: 130px
    }
  }
  :deep(.van-tabs__content) {
    padding: 0 24px;
  }
  :deep(.van-tab__panel) {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  }
  .add-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
</style>