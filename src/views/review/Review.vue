<template>
  <div class="review">
    <h2>{{ $t("review.header") }}</h2>
    <div class="card-list">
      <ReviewCard
        :item="item"
        v-for="item in cardList"
        :key="item.key"
        :activeKey="activeCard"
        @set-active-key="updateActive"
      />
    </div>
    <Button :disabled="disabled" @click="handleImport">{{ $t('review.buttonIpt') }}</Button>
  </div>
</template>
<script setup>
import ReviewCard from "./ReviewCard.vue";
import { ref, computed } from "vue";
import Button from "@/components/Button.vue";
import { useClickOutside } from "@/utils/utils";
import { useRouter } from 'vue-router'
const router = useRouter()
const activeCard = ref(NaN);

const disabled = computed(() => isNaN(activeCard.value))

const cardList = [
  {
    name: "USA eSIM | 30-days plan",
    capacity: "20GB",
    key: 2,
    time: "30 day",
  },
  {
    name: "USA eSIM | 30-days plan",
    capacity: "20GB",
    key: 3,
    time: "30 day",
  },
  {
    name: "USA eSIM | 30-days plan",
    capacity: "10GB",
    time: "30 day",
    key: 1,
  },
];

const handleImport = () => {
  console.log(activeCard.value);
  router.push('/esimCenter')
};

const updateActive = (e) => {
  const { value, key } = e;
  if (key === activeCard.value && !value) {
    activeCard.value = NaN;
  } else {
    activeCard.value = key;
  }
};

const onClickOutside = () => {
  activeCard.value = NaN;
};

useClickOutside(onClickOutside, 'review-card');
</script>
<style scoped lang="scss">
.review {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}
h2 {
  font-family: Open Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 21.79px;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
}
</style>
