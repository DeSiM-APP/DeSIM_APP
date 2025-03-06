<template>
  <div class="import">
    <img :src="Bee" alt="bee" class="bee">
    <div style="width: 100%;">
      <label class="import-label">
        {{ $t('import.label') }}
      </label>
      <Input :placeholder="placeholder" />
    </div>
    <div class="import-button">
      <Button @click="toPage('/review')">{{ $t('import.buttonText') }}</Button>
    </div>
  </div>
</template>

<script setup>
import Bee from '@/assets/bee.png'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()

const placeholder = computed(() => t('import.placeholder'))

const toPage = (path) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
.import {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .bee {
    width: 234px;
    height: 234px;
    margin-bottom: 16px;
  }

  .import-label {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 19.2px;
    letter-spacing: -2%;
    height: 21px;
    line-height: 21px;
    display: flex;
  }

  .import-button {
    width: 100%;
    margin-top: 32px;
  }
}
</style>
