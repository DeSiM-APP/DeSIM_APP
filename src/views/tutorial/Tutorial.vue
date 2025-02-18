<template>
  <div class="tutorial">
    <div class="content-frame">
      <div class="text">
        Before installation, check <i>Settings</i> > <i>General</i> > <i>About</i> > <i>Carrier Lock</i>. If it says No
        SIM restrictions, your phone is unlocked. If not, contact your carrier.
      </div>
    </div>
    <Steps>
      <Step v-for="step in steps" :isActive="step.active" :title="step.title" :key="step.title"
        @click="handleClick(step.index)">
        <div class="step-img-box">
          <img :src="step.img" alt="" />
        </div>
      </Step>
    </Steps>
    <Button @click="onClose">
      {{ $t('tutorial.buttonText') }}
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import Steps from './Steps.vue';
import Step from './Step.vue';
import { useI18n } from 'vue-i18n';
import Step1 from '@/assets/step1.png';
import Step2 from '@/assets/step2.png';
import Step3 from '@/assets/step3.png';

const { t } = useI18n();

const steps = ref([
  {
    title: t('tutorial.step1'),
    img: Step1,
    active: true,
    index: 0
  },
  {
    title: t('tutorial.step2'),
    img: Step2,
    active: false,
    index: 1
  },
  {
    title: t('tutorial.step3'),
    img: Step3,
    active: false,
    index: 2
  }
])

const handleClick = (index) => {
  steps.value.forEach((step, i) => {
    step.active = i <= index;
  });
}

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

  .step-img-box {
    background-color: #F7F9FC;
    width: 100%;
    height: 132px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>