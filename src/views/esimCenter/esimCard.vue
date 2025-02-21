<template>
  <div class="esimCard">
    <div class="header">
      <div class="cover">
        <div class="clock-cover" v-if="isImageLoaded && item.status === 1">
          <Clock />
        </div>
        <Image :src="item.cover" :alt="item.name" width="48px" height="48px" fit="cover" @load="isImageLoaded = true" />
      </div>
      <div class="title">
        {{ item.name }}
      </div>
      <CardArrow :color="isDisable ? '#C4C4C4' : '#000'" @click="handleArrowClick" />
    </div>
    <div class="detail-content">
      <p class="detail-content-left">{{ $t("esimCenter.status") }}</p>
      <p class="detail-content-right" :style="{ color: textColor }">
        {{ statusMap[item.status] }}
      </p>
    </div>
    <div class="detail-content" v-if="item.status === 1">
      <p class="detail-content-left">{{ $t("esimCenter.generationDate") }}</p>
      <p class="detail-content-right">{{ formatDate(item.generationDate) }}</p>
    </div>
    <div class="detail-content" v-else-if="item.status === 2 || item.status === 3">
      <p class="detail-content-left">
        {{ $t("esimCenter.activateExpireDate") }}
      </p>
      <p class="detail-content-right">
        {{ formatDate(item.activateExpireDate) }}
      </p>
    </div>
    <div class="detail-content" v-else>
      <p class="detail-content-left">{{ $t("esimCenter.expireDate") }}</p>
      <p class="detail-content-right">{{ formatDate(item.expireDate) }}</p>
    </div>
    <div class="detail-content">
      <p class="detail-content-left">{{ $t("esimCenter.orderID") }}</p>
      <p class="detail-content-right">{{ item.orderId }}</p>
    </div>
    <div class="detail-content">
      <p class="detail-content-left">{{ $t("esimCenter.coverage") }}</p>
      <p class="detail-content-right">{{ item.coverage }}</p>
    </div>
    <div class="detail-content">
      <p class="detail-content-left">{{ $t("esimCenter.remainingData") }}</p>
      <p class="detail-content-right">{{ formatTraffic(item.remainData) }}</p>
    </div>
    <div class="bottom-btn" v-if="item.status === 1">
      <Button class="card-button" @click="handleShare">{{ $t('esimCenter.share') }}</Button>
      <Button class="card-button" disabled>{{ $t('esimCenter.install') }}</Button>
    </div>
    <div class="bottom-btn" v-else-if="item.status === 2">
      <Button class="card-button" disabled>{{ $t('esimCenter.pending') }}</Button>
      <Button class="card-button" @click="handleInstall">{{ $t('esimCenter.install') }}</Button>
    </div>
    <div class="bottom-btn" v-else>
      <Button class="card-button avatar-button">
        <div class="avatar-button-content">
          <Image :src="item.userAvatar" :alt="item.userName" width="20px" height="20px" radius="35.71px" />
          <div>{{ item.userName }}</div>
        </div>
      </Button>
    </div>
  </div>
</template>

<script setup>
import CardArrow from "@/components/icons/CardArrow.vue";
import { computed, ref } from "vue";
import { Image } from "vant";
import Clock from "@/components/icons/Clock.vue";
import { statusMap } from "@/mock/mockCardData";
import { formatDate, formatTraffic } from "@/utils/utils";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const isImageLoaded = ref(false);

const isDisable = computed(() => {
  const { status } = props.item;
  return status === 1 || status === 2 || status === 5;
});

const textColor = computed(() => {
  const { status } = props.item;
  if (status === 7) {
    return "#DD2F2C";
  } else if (status === 3) {
    return "#FFB61D";
  } else if (status === 4) {
    return "#EF9C11";
  } else {
    return "";
  }
});

// 更新 defineEmits 以包含新的事件
const emits = defineEmits(["share", "install"]);

const handleShare = () => {
  emits("share", props.item.id);
};

const handleInstall = () => {
  emits("install", props.item.id);
};

const handleArrowClick = () => {
  if (isDisable.value) return;
  router.push(`/dashboard/${props.item.id}`);
};
</script>

<style scoped lang="scss">
.esimCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  padding: 16px;
  background-color: #f7f9fc;

  .header {
    width: 100%;
    height: 48px;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cover {
      width: 48px;
      height: 48px;
      border-radius: 6px;
      position: relative;
      overflow: hidden;

      .clock-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #0000004d;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 48px;
        height: 48px;
        object-fit: cover;
      }
    }

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 21.79px;
      flex: 1;
      text-align: start;
    }

    .one-img2 {
      width: 100%;
      height: 48px;
      line-height: 52px;
      margin-left: 1%;
    }
  }

  .detail-content {
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .detail-content-left {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 14px;
      line-height: 19.07px;
      color: #6c7278;
    }

    .detail-content-right {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 14px;
      line-height: 19.07px;
      color: #6c7278;
    }
  }

  .bottom-btn {
    width: 100%;
    height: 38px;
    gap: 12px;
    display: flex;
    align-content: center;
    justify-content: end;

    .card-button {
      background-color: #E0E6E9;
      border: none;
      box-shadow: none;
      width: fit-content;
      font-weight: 600;
    }
    .card-button:disabled {
      color: #7B8086;
    }
    .avatar-button {
      padding: 10px 12px;
      .avatar-button-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
}
</style>
