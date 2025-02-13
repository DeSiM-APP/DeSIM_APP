<template>
  <div class="layout">
    <header class="header">
      <template v-if="headerTemplate === 'back-close'">
        <div class="header-row">
          <div class="header-left">
            <button class="header-btn" @click="onBack">返回</button>
          </div>
          <div class="header-center">
            <h1 class="header-title">{{ title }}</h1>
          </div>
          <div class="header-right">
            <button class="header-btn" @click="onClose">关闭</button>
          </div>
        </div>
      </template>

      <template v-else-if="headerTemplate === 'user_center'">
        <div class="header-row">
          <div class="header-left">
            <h1 class="header-title">{{ title }}</h1>
          </div>
          <div class="header-right">
            <button class="header-btn" @click="onSwitchLanguage">切换语言</button>
            <button class="header-btn" @click="onContactService">寻找客服</button>
            <button class="header-btn" @click="onUserCenter">用户中心</button>
          </div>
        </div>
      </template>

      <template v-else>
        <h1 class="main-title">{{ title }}</h1>
      </template>
    </header>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const headerTemplate = computed(() => route.meta.headerTemplate || 'default')

const title = computed(() =>
  route.meta.title ? t(route.meta.title) : t('myApp.header')
)

// 返回按钮逻辑
const onBack = () => {
  router.back()
}

// 关闭按钮逻辑，具体实现可以根据实际需求调整
const onClose = () => {
  console.log("关闭按钮点击")
}

// 切换语言按钮
const onSwitchLanguage = () => {
  console.log("切换语言按钮点击")
}

// 寻找客服按钮
const onContactService = () => {
  console.log("寻找客服按钮点击")
}

// 用户中心按钮
const onUserCenter = () => {
  console.log("用户中心按钮点击")
}
</script>

<style scoped>
.main-title {
  text-align: center;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #f5f5f5;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 使用 flex 布局排列 header 内的内容 */
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left,
.header-center,
.header-right {
  display: flex;
  align-items: center;
}

.header-title {
  margin: 0;
}

.header-btn {
  margin: 0 4px;
  padding: 6px 12px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 16px;
}
</style>