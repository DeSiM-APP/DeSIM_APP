<template>
  <div class="welcome">
    <div class="welcome-img">
      <div class="mf"></div>
      <div class="hy"></div>
    </div>
    <div class="welcome-big-synopsis">{{ welcomeBigSynopsis}}</div>
    <div class="welcome-synopsis">{{ welcomeSynopsis}}</div>
    <div class="welcome-button">
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
    width: 390px;
    height: 390px;
    background-image: url('@/assets/sy-ty.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .mf {
      width: 275.4px;
      height: 275.4px;
      background-image: url('@/assets/sy-mf.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 129.67px;
      left: 118px;
      transform: rotate(360.88deg);
    }
    .hy {
      width: 149.25px;
      height: 73.65px;
      background-image: url('@/assets/sy-hy.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 222px;
      left: 68.76px;
    }
  }
  .welcome-big-synopsis {
    width: 342px;
    height: 84px;
    font-size: 32px;
    font-weight: 700;
    margin-top: 80px;
    line-height: 41.6px;
    letter-spacing: -2%;
  }
  .welcome-synopsis {
    width: 342px;
    height: 60px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    margin-top: 12px;
  }
  .welcome-button {
    width: 342px;
    height: 48px;
    margin-top: 40px;
  }
}
</style>
