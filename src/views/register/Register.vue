<template>
  <div class="register">
    <div class="register-title">{{ $t('register.register') }}</div>
    <div class="xinxi">
      <div>
      <label class="import-label">
        {{ $t('register.usename') }}
      </label>
      <Input  />
    </div>
    <div>
      <label class="import-label">
        {{ $t('register.email') }}
      </label>
      <Input />
    </div>
    <div>
      <label class="import-label">
        {{ $t('register.password') }}
      </label>
      <passwordInput />
    </div>
    </div>
    <div class="register-button">
      <Button @click="toPage('/login')">{{ $t('register.registerText') }}</Button>
    </div>
    <div class="register-button2">
      <span>{{ $t('register.buttonText') }}</span>
    <router-link to="/login" class="router-link">{{ $t('login.login') }}</router-link>
  </div>
  </div>
</template>

<script setup>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import passwordInput from '@/components/passwordInput.vue'
import { useRouter } from 'vue-router'  
const router = useRouter()
const toPage = (path) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
.register{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .register-title{
    margin-top: 60px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #393939;
    margin-left: -53%;
  }
  .xinxi{
    width: 342px;
    height: 240px;
    margin-top: 40px;
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
  }
  .register-button {
    width: 342px;
    height: 48px;
    margin-top: 40px;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  .register-button2 {
    width: 342px;
    height: 48px;
    margin-top: 70%;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Grey, #6C7278);
    .router-link{
      margin-left: 5px;
      font-weight: 400;
      font-size: 12px;
      color: #EF9C11;
    }
  }
}
</style>