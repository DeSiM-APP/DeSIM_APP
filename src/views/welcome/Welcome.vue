<template>
  <div>
    {{ $t('welcome.hello') }}
    <Button @click="goToLogin">{{ welcomeMessage }}</Button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Button } from 'vant'
import { useI18n } from 'vue-i18n';
const router = useRouter();

const { t } = useI18n();
function goToLogin() {
  router.push('/login');
}

const welcomeMessage = t('welcome.start');

</script>
