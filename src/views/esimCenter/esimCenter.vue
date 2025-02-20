<template>
  <div class="esimCenter">
    <van-tabs v-model:active="active" color="#EF9C11">
      <van-tab :title="t('esimCenter.myesim')">
        <esimCard
        @arrowClicked="arrowClicked"
        @shareButtonNow="handleChildShare"
        v-for="item in btnStateArray1"
        :key="item.key" 
        :item="item"
      />
      <img src="@/assets/carbon_add-filled.png" alt="" class="add-btn" @click="toPage('/addEsims')">
      </van-tab>
      <van-tab :title="t('esimCenter.archived')">
        <esimCard
        v-for="item in btnStateArray2"
        :key="item.key" 
        :item="item"
      />
        <img src="@/assets/carbon_add-filled.png" alt="" class="add-btn" @click="toPage('/addEsims')">
      </van-tab>
    </van-tabs>
    <shareButton v-model="show" :title="t('esimCenter.shareTitle')">
      <div class="share-member">
        <div v-for="(user, index) in shareList" :key="index" class="share-item">
          <div class="user-info">
            <div>
              <label class="import-label">
                {{ user.name }}
              </label>
              <Input  />
            </div>
          </div>
        </div>
        <div class="register-button">
          <Button @click="handleRegisterClick">{{ $t('esimCenter.esimCenterText') }}</Button>
        </div>
      </div>
    </shareButton>
  </div>
</template>

<script setup>
import esimCard from '@/components/esimCard.vue'
import { ref, watch, inject, getCurrentInstance } from 'vue'
import { Tab as VanTab, Tabs as VanTabs } from 'vant'
import shareButton from "@/components/shareButton.vue";
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
const show = ref(false)
const router = useRouter()
const active = ref(0)
const toPage = (path) => {
  router.push(path)
}

const arrowClicked = (key) => {
  toPage(`/dashboard/${key}`)
}
const handleChildShare = (data) => {
  show.value = data;
}

const handleRegisterClick = () => {
  show.value = false
}

const { t } = useI18n()
const shareList = [
  {
    name: "Send to Email",
    content: 'Type email',
  },
  {
    name: "Name on eSIM",
    content: 'Add a name',
  },
  {
    name: "Notes",
    content: 'Add a note',
  },
];

// 卡片的内容
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

</script>

<style scoped lang="scss">
.esimCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 67px);
  :deep(.van-tabs) {
    width: 100%;
    height: inherit;
    overflow: hidden;
    .van-tabs__wrap {
      border-bottom: 1px solid #D9D9D9;
    }
    .van-tabs__content {
      height: calc(100% - 44px);
      overflow-x: hidden;
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
  .share-member {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow-x: hidden;
  padding: 24px;
  padding-top: 0;
  .import-label {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 19.2px;
    letter-spacing: -2%;
    height: 21px;
    line-height: 21px;
    color: var(--Grey, #6C7278);
  }
  .register-button {
    margin-top: 10%;
  }
}
}
</style>