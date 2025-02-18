<template>
  <div class="layout">
    <header class="header">
      <template v-if="headerTemplate === 'back-close'">
        <div class="header-left">
          <button @click="onBack">
            <Back />
          </button>
        </div>
        <div class="header-title">
          {{ title }}
        </div>
        <div class="header-right">
          <button @click="onClose">
            <Close />
          </button>
        </div>
      </template>

      <template v-else-if="headerTemplate === 'user_center'">
        <div class="header-title">
          {{ title }}
        </div>
        <div class="header-right group-right">
          <button class="header-btn" @click="onSwitchLanguage">
            <Language />
          </button>
          <button class="header-btn" @click="onContactService">
            <Support />
          </button>
          <button class="header-btn" @click="onUserCenter">
            <Badge dot>
              <Group />
            </Badge>
          </button>
        </div>
      </template>

      <template v-else>
        <h1 class="header-title">{{ title }}</h1>
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
import Back from '@/components/icons/Back.vue'
import Close from '@/components/icons/Close.vue'
import Language from '@/components/icons/Language.vue'
import Support from '@/components/icons/Support.vue'
import Group from '@/components/icons/Group.vue'
import { Badge } from 'vant'

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

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    gap: 8px;
    display: flex;
    padding: 20px;
    align-items: center;

    .header-left,
    .header-right {
      width: 24px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .group-right {
      gap: 12px;
      width: 120px;
    }

    .header-btn {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background-color: #F8F8F8;
    }

    .header-title {
      flex: 1;
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
    }
  }

  .content {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>