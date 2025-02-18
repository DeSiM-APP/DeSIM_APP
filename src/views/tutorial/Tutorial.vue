<template>
  <div class="tutorial">
    <div class="content-frame">
      <div class="text">
        Before installation, check <i>Settings</i> > <i>General</i> > <i>About</i> > <i>Carrier Lock</i>. If it says No
        SIM restrictions, your phone is unlocked. If not, contact your carrier.
      </div>
    </div>
    <van-steps direction="vertical" :active="0" active-color="#07c160">
      <van-step>
        <h3>【City】Status1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【City】Status2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>【City】Status3</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
    <Button @click="onClose">
      {{ $t('tutorial.buttonText') }}
    </Button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import { Step as VanStep, Steps as VanSteps } from 'vant';

const router = useRouter();
const onClose = () => {
  router.back();
}
</script>
<style lang="scss" scoped>
.tutorial {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content-frame {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background-color: #F7F9FC;
  }

  .text {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;

    i {
      font-weight: 700;
    }
  }
}
</style>