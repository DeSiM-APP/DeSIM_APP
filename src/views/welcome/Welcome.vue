<template>
  <div class="welcome">
    <div class="welcome-img">
      <img src="@/assets/sy-ty.png" alt="" class="welcome-img-ty">
      <img src="@/assets/sy-mf.png" alt="" class="mf">
      <img src="@/assets/sy-hy.png" alt="" class="hy">
    </div>
    <div class="bottom-wrapper">
      <div class="welcome-big-synopsis">{{ welcomeBigSynopsis}}</div>
    <div class="welcome-synopsis">{{ welcomeSynopsis}}</div>
    <Button @click="toPage('/login')">{{ welcomeMessage}}</Button>
    </div>
    
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { Button } from 'vant'
import Button from '@/components/Button.vue'
import { useI18n } from 'vue-i18n';
const router = useRouter();

const { t } = useI18n();
const toPage = (path) => {
  router.push(path)
}

const welcomeMessage = t('welcome.start');
const welcomeSynopsis = t('welcome.synopsis');
const welcomeBigSynopsis = t('welcome.bigSynopsis');

</script>
<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .welcome-img {
    width: 100%;
    height: 390px;
    position: relative;
    .welcome-img-ty{
      width: 100%;
      height: 100%;
    }
    .mf {
      width: 275px;
      position: absolute;
      top: 150px;
      right: 8px;
      transform: rotate(360.88deg);
    }
    .hy {
      width: 149.25px;
      position: absolute;
      top: 240px;
      right: 180px;
    }
  }
  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    gap: 44px;
    margin-top: 54px;
  }
  .welcome-big-synopsis {
    height: 84px;
    font-size: 32px;
    font-weight: 700;
    line-height: 41.6px;
  }
  .welcome-synopsis {
    height: 60px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
  }
}
</style>
