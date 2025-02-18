<template>
  <div class="dashboard">
    <div class="top-part">
      <img :src="EmptyImg" alt="empty" />
      <h1>{{ $t('dashboard.emptyData') }}</h1>
      <p>{{ $t('dashboard.startPlan') }}</p>
      <button class="start-plan-button">
        <div>
          {{ $t('dashboard.startPlanButton') }}
        </div>
        <Arrow />
      </button>
      <div class="capsule card-content">
        <h2>USA eSIM for 1day</h2>
        <p>3 GB for 1 day</p>
      </div>
    </div>
    <div class="about-sim">
      <h2></h2>
    </div>
  </div>
</template>

<script setup>
import EmptyImg from '@/assets/empty.png'
import Arrow from '@/components/icons/Arrow.vue'

</script>

<style scoped lang="scss">
.capsule {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  border-radius: 16px;
  padding: 16px;
}

.dashboard {
  padding: 0 24px 16px 24px;

  .top-part {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32.68px;

    }

    p {
      font-weight: 600;
      font-size: 12px;
      line-height: 16.34px;
      color: #545454;
    }

    .start-plan-button {
      width: 115px;
      height: 46px;
      gap: 4px;
      border-radius: 100px;
      background-color: #000;
      color: #fff;
      font-size: 14px;
      line-height: 19.07px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-weight: 600;
      justify-content: center;

      h2 {
        line-height: 22px;
      }

    }
  }
  .about-sim {
    h2 {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 16px;
      line-height: 21.79px;
    }
  }
}
</style>