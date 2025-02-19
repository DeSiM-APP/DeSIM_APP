<template>
  <div class="login">
    <div class="login-logo">
      <img src="@/assets/esim-logo.png" alt="" class="login-img">
      <img src="@/assets/ONE.png" alt="" class="login-one">
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
      <img src="@/assets/google -logo.png" alt="" class="log-Goole">
      <div class="goole-text">
        {{ $t('login.gooleButtonText') }}
      </div>
    </div>
    <div class="login-line">
      <img src="@/assets/Line-logo.png" alt="" class="log-line">
      <div class="line-text">
        {{ $t('login.lineButtonText') }}
      </div>
    </div>
    <div class="login-iphone">
      <img src="@/assets/apple-logo.png" alt="" class="log-iphone">
      <div class="iphone-text">
        {{ $t('login.iphoneButtonText') }}
      </div>
    </div>
    <div class="login-button2">
      <span>{{ $t('login.buttonText')}}&nbsp;</span>
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
  justify-content: center;
  padding: 0 24px;
  .login-logo{
    width: 100%;
    height: 22px;
    display: flex;
    gap: 6px;
    align-items: center;
    margin-top: 30px;
  }
  .login-title{
    margin-top: 10%;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #393939;
  }
  .xinxi{
    width: 100%;
    height: 168px;
    margin-top: 10%;
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
    width: 100%;
    height: 17px;
    display: flex;
    justify-content: end;
    font-weight: 400;
    font-size: 12px;
    color: #EF9C11;
  }
  .or-line{
    width: 100%;
    text-align: center;
    margin-top: 9%;
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
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-Goole{
      width: 18px;
      height: 18px;
    }
    .goole-text{
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .login-line{
    width:100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-line{
      width: 18px;
      height: 18px;
    } 
    .line-text{
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .login-iphone{
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #EFF0F6;
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-iphone{
      width: 18px;
      height: 18px;
    }
    .iphone-text{
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .login-button2 {
    width: 100%;
    height: 48px;
    margin-top: 10%;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Grey, #6C7278);
    .router-link{
      margin-left: 1%;
      font-weight: 400;
      font-size: 12px;
      color: #EF9C11;
    }
  }
  .login-button {
    width: 100%;
    height: 48px;
    margin-top: 8%;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    .router-link{
      margin-left: 1%;
      font-weight: 400;
      font-size: 12px;
      color: #EF9C11;
    }
  }
}
</style>