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
      <template v-else-if="headerTemplate === 'back'">
        <div class="header-left">
          <button @click="onBack">
            <Back />
          </button>
        </div>
        <div class="header-title">
          {{ title }}
        </div>
      </template>
      <template v-else-if="headerTemplate === 'close'">
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
    <!-- user-group -->
    <PopupBottom v-model="show" :title="t('layout.groupTitle')">
      <div class="group-member">
        <div v-for="(user, index) in groupList" :key="index" class="group-item">
          <div class="user-info">
            <img :src="user.avatar" alt="avatar" class="user-avatar" />
            <div class="user-name">{{ user.name }}</div>
          </div>
          <div class="user-status">
            <label>{{ t("layout.esimStatus") }}</label>
            <span>{{ user.status }}</span>
          </div>
          <div class="user-number">
            <label>{{ t("layout.esimNumber") }}</label>
            <span>{{ user.number }}</span>
          </div>
        </div>
      </div>
    </PopupBottom>
    <!-- Locale Setting -->
    <ActionSheet 
      v-model:show="showActionSheet" 
      :actions="actions" 
      @select="handleLanguageSelect"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Back from "@/components/icons/Back.vue";
import Close from "@/components/icons/Close.vue";
import Language from "@/components/icons/Language.vue";
import Support from "@/components/icons/Support.vue";
import Group from "@/components/icons/Group.vue";
import { Badge, ActionSheet } from "vant";
import PopupBottom from "@/components/PopupBottom.vue";
import { ref } from "vue";
import User1 from "@/assets/user1.png";
import User2 from "@/assets/user2.png";
import User3 from "@/assets/user3.png";
import { useStore } from '@/store'
import { changeLanguage } from '@/locales/i18n'

const store = useStore()

const show = ref(false);
const showActionSheet = ref(false);
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const actions = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "日本語",
    value: "jp",
  },
  {
    name: "中文",
    value: "zh",
  },
];
const groupList = [
  {
    name: "Ulsysa",
    avatar: User1,
    status: "ACTIVATED",
    number: 77564567892491,
  },
  {
    name: "Licba",
    avatar: User2,
    status: "ACTIVATED",
    number: 77564567892491,
  },
  {
    name: "Jessica",
    avatar: User3,
    status: "Installed",
    number: 77564567892491,
  },
];
const headerTemplate = computed(() => route.meta.headerTemplate || "default");

const title = computed(() =>
  route.meta.title ? t(route.meta.title) : t("myApp.header")
);

const onBack = () => {
  router.back();
};

const onClose = () => {
  const prevRoute = store.closeRoutes.getCloseRoutes
  if (prevRoute === '') {
    router.back()
  } else {
    router.push(prevRoute)
    store.closeRoutes.setCloseRoutes('')
  }
};

const onSwitchLanguage = () => {
  showActionSheet.value = true;
};

const handleLanguageSelect = (action) => {
  changeLanguage(action.value);
  showActionSheet.value = false;
};

// 寻找客服按钮
const onContactService = () => {
  console.log("寻找客服按钮点击");
};

// 用户中心按钮
const onUserCenter = () => {
  show.value = true;
};
</script>
<style lang="scss">
#app .van-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
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
      background-color: #f8f8f8;
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

.group-member {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow-x: hidden;
  padding: 24px;
  padding-top: 0;

  .group-item {
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    gap: 12px;
    width: 100%;
    border-radius: 16px;
    background-color: #f7f9fc;

    &>div {
      width: 100%;
      display: flex;
    }

    .user-info {
      gap: 12px;
      align-items: start;
      justify-content: start;

      img {
        width: 39px;
        height: 39px;
      }

      .user-name {
        font-weight: 600;
        font-size: 16px;
      }
    }

    .user-status,
    .user-number {
      justify-content: space-between;
      height: 19px;
      font-size: 14px;
      line-height: 19px;

      label {
        font-weight: 400;
      }

      span {
        text-transform: uppercase;
        font-weight: 600;
      }
    }

    .user-status span {
      color: #FFB61D;
    }

    .user-number span {
      color: #6C7278;
    }
  }
}
</style>
