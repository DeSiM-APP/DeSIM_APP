<template>
  <div class="esimCenter">
    <div class="button-wrapper">
      <Button iconOnly @click="toAddPage">
        <Cross size="32" />
      </Button>
    </div>
    <Tabs v-model:active="active" color="#EF9C11">
      <PullRefresh v-model="loading" @refresh="getCards">
        <Tab :title="t('esimCenter.myesim')">
          <EsimCard
            v-for="item in listCards"
            @share="handleChildShare"
            @install="handleInstall"
            :key="item.id"
            :item="item"
          />
        </Tab>
      </PullRefresh>
      <PullRefresh v-model="loading" @refresh="getCards">
        <Tab :title="t('esimCenter.archived')">
          <EsimCard
            v-for="item in archivedCards"
            @share="handleChildShare"
            @install="handleInstall"
            :key="item.id"
            :item="item"
          />
        </Tab>
      </PullRefresh>
    </Tabs>
    <!-- bottom popup -->
    <PopupBottom v-model="show" :title="t('esimCenter.shareTitle')">
      <div class="share-member">
        <div v-for="(user, index) in shareList" :key="index" class="share-item">
          <div class="user-info">
            <div>
              <label class="import-label">
                {{ user.name }}
              </label>
              <Input />
            </div>
          </div>
        </div>
        <div class="share-button">
          <Button @click="handleShareClick">{{
            $t("esimCenter.esimCenterText")
          }}</Button>
        </div>
      </div>
    </PopupBottom>
  </div>
</template>

<script setup>
import EsimCard from "./esimCard.vue";
import { ref, onMounted, computed } from "vue";
import { Tab, Tabs, PullRefresh } from "vant";
import PopupBottom from "@/components/PopupBottom.vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Cross from "@/components/icons/Cross.vue";
import { useStore } from "@/store";
import { cards, asyncGet } from "@/mock";
import { useToast } from "@/utils/utils";

const listCards = ref([]);
const loading = ref(false);
const archivedCards = computed(() =>
  listCards.value.filter((item) => item.isArchived)
);
const store = useStore();
const show = ref(false);
const router = useRouter();
const active = ref(0);
const toPage = (path) => {
  router.push(path);
};

const toAddPage = () => {
  store.closeRoutes.setCloseRoutes("/esimCenter");
  toPage("/addEsims");
};

const handleInstall = () => {
  console.log("install");
};
const handleChildShare = () => {
  show.value = true;
};

const handleShareClick = () => {
  show.value = false;
  Math.random() > 0.5 ? useToast({
    message: 'Share success.',
    type: "success",
  }) : useToast({
    message: 'Share failed. Please try again.',
    type: "error",
  })
};

const getCards = () => {
  loading.value = true;
  asyncGet(cards, 1000).then((res) => {
    listCards.value = res;
    loading.value = false;
  });
};
onMounted(() => {
  getCards();
});

const { t } = useI18n();
const shareList = [
  {
    name: "Send to Email",
    content: "Type email",
  },
  {
    name: "Name on eSIM",
    content: "Add a name",
  },
  {
    name: "Notes",
    content: "Add a note",
  },
];
</script>

<style scoped lang="scss">
.esimCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 67px);

  :deep(.van-tabs) {
    width: 100%;
    height: inherit;
    overflow: hidden;

    .van-tabs__wrap {
      border-bottom: 1px solid #d9d9d9;
    }

    .van-tabs__content {
      height: calc(100% - 44px);
      overflow-x: hidden;
      padding: 24px;
    }

    .van-tabs__line {
      width: 130px;
    }
  }

  :deep(.van-tab__panel) {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: 16px;
  }

  .add-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .share-member {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    overflow-x: hidden;
    padding: 24px;
    padding-top: 0;

    .import-label {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 12px;
      line-height: 19.2px;
      letter-spacing: -2%;
      height: 21px;
      line-height: 21px;
      color: var(--Grey, #6c7278);
    }

    .share-button {
      margin-top: 20px;
    }
  }

  .button-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 24px;
    z-index: 5;
  }
}
</style>
