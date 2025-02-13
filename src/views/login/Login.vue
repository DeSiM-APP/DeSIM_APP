<template>
  <div class="login">
    <div class="login-logo">
      <div class="login-img"></div>
      <div class="login-one">{{ $t('login.one') }}</div>
    </div>
    <div class="login-title">{{ $t('login.logintostart') }}</div>
    <div class="xinxi">
      <div>
      <label class="import-label">
        {{ $t('login.email') }}
      </label>
      <Input  />
    </div>
    <div>
      <label class="import-label">
        {{ $t('login.password') }}
      </label>
      <passwordInput />
    </div>
    </div>
    <div class="wjmm">
      {{ $t('login.forget') }}
    </div>
    <div class="login-button">
      <Button @click="toPage('/Home')">{{ $t('login.loginText') }}</Button>
    </div>
    <div class="or-line">{{ $t('login.or') }}</div>
    <div class="login-Goole">
      <div class="log-Goole"></div>
      <div class="goole-text">
        {{ $t('login.gooleButtonText') }}
      </div>
    </div>
    <div class="login-line">
      <div class="log-line"></div>
      <div class="line-text">
        {{ $t('login.lineButtonText') }}
      </div>
    </div>
    <div class="login-iphone">
      <div class="log-iphone"></div>
      <div class="iphone-text">
        {{ $t('login.iphoneButtonText') }}
      </div>
    </div>
    <div class="login-button2">
      <span>{{ $t('login.buttonText') }}</span>
    <router-link to="/register" class="router-link">{{ $t('login.register') }}</router-link>
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
.login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-logo{
    width: 100%;
    height: 22px;
    display: flex;
    .login-img{
      width: 108px;
      height: 100%;
      background-image: url('@/assets/esim-logo.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-left: 24px;
      margin-top: 20px;
    }
    .login-one {
      font-family: Goldman;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      margin-left: 14px;
      margin-top: 18px;
      color: #393939;
    }
  }
  .login-title{
    margin-top: 40px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #393939;
    margin-left: -33%;
  }
  .xinxi{
    width: 342px;
    height: 168px;
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
  .wjmm{
    width: 342px;
    height: 17px;
    display: flex;
    justify-content: end;
    font-weight: 400;
    font-size: 12px;
    color: #EF9C11;
  }
  .or-line{
    width: 342px;
    text-align: center;
    margin-top: 34px;
    margin-bottom: 24px;
    position: relative;
    color: #6C7278;
    font-size: 14px;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 140px;
      height: 1px;
      background-color: #E5E5E5;
    }
    
    &::before {
      left: 0;
    }
    
    &::after {
      right: 0;
    }
  }
  .login-Goole{
    width: 342px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-Goole{
      width: 24px;
      height: 24px;
      background-image: url('@/assets/google -logo.png');
      background-size: 100% 100%;
    }
    .goole-text{
      margin-left: 3%;
    }
  }
  .login-line{
    width: 342px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-line{
      width: 24px;
      height: 24px;
      background-image: url('@/assets/Line-logo.png');
      background-size: 100% 100%;
    } 
    .line-text{
      margin-left: 3%;
    }
  }
  .login-iphone{
    width: 342px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-iphone{
      width: 24px;
      height: 24px;
      background-image: url('@/assets/apple-logo.png');
      background-size: 100% 100%;
    }
    .iphone-text{
      margin-left: 3%;
    }
  }
  .login-button2 {
    width: 342px;
    height: 48px;
    margin-top: 40px;
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
  .login-button {
    width: 342px;
    height: 48px;
    margin-top: 40px;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    .router-link{
      margin-left: 5px;
      font-weight: 400;
      font-size: 12px;
      color: #EF9C11;
    }
  }
}
</style>