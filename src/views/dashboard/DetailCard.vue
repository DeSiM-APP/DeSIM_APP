<template>
  <PopupBottom v-model="show" :title="t('dashboard.planDetails')">
    <div class="detail-card">
      <div class="card-list">
        <div class="list-item" v-for="(value, key) in detail" :key="key">
          <div class="list-item-title">{{ $t(`dashboard.detailBoard.${key}`) }}
            <button v-if="key === 'smdp' || key === 'activationCode'" class="copy-btn" @click="handleCopy(value)">
              <Copy />
            </button>
          </div>
          <div class="list-item-value">{{ value }}</div>
        </div>
      </div>
    </div>
  </PopupBottom>
</template>

<script setup>
import PopupBottom from "@/components/PopupBottom.vue";
import { ref, defineProps, defineEmits, watch } from "vue";
import { useI18n } from "vue-i18n";
import Copy from "@/components/icons/Copy.vue";
import { useCopy, useToast } from "@/utils/utils";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  detail: {
    type: Object,
    default: () => ({
      coverage: '',
      data: '',
      validity: '',
      esimNumber: '',
      smdp: '',
      activationCode: '',
      apn: '',
      operator: ''
    })
  }
})
const show = ref(false)
const { t } = useI18n()

const emit = defineEmits(['update:visible'])

// 监听 visible 变化并同步到 show
watch(() => props.visible, (newVal) => {
  show.value = newVal
})

// 监听 show 变化并触发更新事件
watch(show, (newVal) => {
  emit('update:visible', newVal)
})

const copyCallback = (success) => {
  if (success) {
    useToast({
      message: 'Copy success',
      type: 'success',
    })
  }
}

const handleCopy = (value) => {
  useCopy(value, copyCallback)
}
</script>
<style scoped lang="scss">
.detail-card {
  margin: 0 24px 20px 24px;

  .card-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 16px;
    padding: 16px;
    background: #F7F9FC;

    .list-item {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .list-item-title {
        font-weight: 400;
        font-size: 12px;
        line-height: 19.2px;
        color: var(--Grey, #6C7278);
        position: relative;

        .copy-btn {
          position: absolute;
          right: 0;
          top: 20px;
        }

      }

      .list-item-value {
        font-weight: 600;
        font-size: 14px;
        line-height: 19.07px;

      }
    }
  }
}
</style>
