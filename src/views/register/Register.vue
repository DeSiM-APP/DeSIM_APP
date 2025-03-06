<template>
  <div class="register">
    <div class="register-title">{{ $t("register.register") }}</div>
    <div class="content-wrapper">
      <div class="xinxi">
        <div>
          <label class="import-label">
            {{ $t("register.usename") }}
          </label>
          <Input />
        </div>
        <div>
          <label class="import-label">
            {{ $t("register.email") }}
          </label>
          <Input />
        </div>
        <div>
          <label class="import-label">
            {{ $t("register.password") }}
          </label>
          <passwordInput />
        </div>
        <Button @click="toPage('/login')">{{
          $t("register.registerText")
        }}</Button>
      </div>
      <div class="register-button">
        <span>{{ $t("register.buttonText") }}&nbsp;</span>
        <router-link to="/login" class="router-link">{{
          $t("login.login")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import passwordInput from "@/components/passwordInput.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toPage = (path) => {
  router.push(path);
};
</script>

<style scoped lang="scss">
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .register-title {
    width: 100%;
    text-align: start;
    padding: 0 24px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1a1c1e;
    margin-bottom: 20px;
  }
  .content-wrapper {
    padding: 32px 24px;
    display: flex;
    width: 100%;
    height: calc(100% - 92px);
    flex-direction: column;
    justify-content: space-between;
  }
  .xinxi {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .custom-button {
      margin-top: 16px;
    }
    .import-label {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 12px;
      line-height: 19.2px;
      height: 21px;
      line-height: 21px;
      color: var(--Grey, #6c7278);
    }
  }

  .register-button {
    height: 48px;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Grey, #6c7278);
    .router-link {
      margin-left: 1%;
      font-weight: 400;
      font-size: 12px;
      color: #ef9c11;
    }
  }
}
</style>
