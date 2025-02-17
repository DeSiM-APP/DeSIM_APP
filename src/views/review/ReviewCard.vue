<template>
  <div class="review-card" :class="{ active: localActive }">
    <div class="card-header">
      <h2>{{ item.name }}</h2>
      <Checkbox
        v-model="localActive"
        shape="square"
        icon-size="30px"
        checked-color="#000"
        @click="updateActive"
      />
    </div>
    <div class="capacity">
      {{ item.capacity }}
    </div>
    <div class="time">
      {{ item.time }}
    </div>
    <div class="date">
      <label>{{ $t("review.setDate") }}</label>
      <input
        v-model="selectedTime"
        readonly
        @click="handleClick"
        placeholder="DD-MM-YY"
      />
      <TimePicker
        v-model="selectedTime"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
        @cancel="showPicker = false"
        v-if="showPicker"
      />
    </div>
  </div>
</template>

<script setup>
import { Checkbox, TimePicker } from "vant";
import { ref, watch } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  activeKey: {
    type: Number,
    default: NaN,
  },
});

const handleClick = () => {
  showPicker.value = true;
};

const emit = defineEmits(["setActiveKey"]);
const localActive = ref(false);
const showPicker = ref(false);
const selectedTime = ref("");
const type = "datetime";
const minDate = new Date();
const maxDate = new Date(new Date().getFullYear() + 1, 11, 31);

watch(
  () => props.activeKey,
  (newValue) => {
    localActive.value = newValue === props.item.key;
  }
);

const updateActive = () => {
  emit("setActiveKey", { value: localActive.value, key: props.item.key });
};

const onConfirm = (value) => {
  selectedTime.value = value;
  showPicker.value = false;
};
</script>

<style scoped lang="scss">
.review-card {
  height: 100%;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  background-color: #f8f8f8;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    h2 {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 12px;
      line-height: 16.34px;
    }
    :deep(.van-checkbox__icon--checked) {
      .van-icon {
        color: var(--ThemeColor, #f4d42d) !important;
      }
    }
    :deep(.van-checkbox) {
      position: absolute;
      right: 0;
      top: 0;
      .van-icon {
        border-color: #dedede;
        background-color: #dedede;
        border-radius: 4px;
      }
    }
  }
  .capacity {
    font-family: Open Sans;
    font-weight: 700;
    font-size: 24px;
    line-height: 32.68px;
  }
  .time {
    padding: 4px 9px;
    gap: 4px;
    border-radius: 100px;
    background-color: rgba(247, 225, 6, 0.3);

    color: #000;
  }
  .date {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 4px;
    label {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 12px;
      line-height: 19.2px;
    }
    input {
      width: 100%;
      background: #fff;
      padding: 14px;
      border-radius: 10px;
      border-width: 1px;
    }
  }
}
.active {
  background-color: var(--ThemeColor, #f4d42d);
  color: #000;
  .time {
    background-color: #fff;
  }
}
</style>
