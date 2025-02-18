<template>
  <div class="dashboard">
    <div class="top-part">
      <img :src="EmptyImg" alt="empty" />
      <h1>{{ $t('dashboard.emptyData') }}</h1>
      <p>{{ $t('dashboard.startPlan') }}</p>
      <button class="start-plan-button" @click="router.push('/tutorial')">
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
      <h2>{{ $t('dashboard.aboutESIM') }}</h2>
      <div class="about-list">
        <div class="capsule about-content" v-for="item in aboutList" :key="item.title">
          <component :is="item.icon" size="21" />
          <div class="about-content-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-header">
        <h2>{{ $t('dashboard.bannerTitle') }}</h2>
        <i>{{ $t('dashboard.more') }}</i>
      </div>
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmptyImg from '@/assets/empty.png'
import Arrow from '@/components/icons/Arrow.vue'
import Detail from '@/components/icons/Detail.vue'
import Book from '@/components/icons/Book.vue'
import Support from '@/components/icons/Support.vue'
import Shop from '@/components/icons/Shop.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Swipe as VanSwipe, SwipeItem as VanSwipeItem } from 'vant'
const { t } = useI18n()
const router = useRouter()
const aboutList = [
  {
    icon: Detail,
    title: t('dashboard.planDetail'),
  },
  {
    icon: Book,
    title: t('dashboard.starInstruction'),
  },
  {
    icon: Support,
    title: t('dashboard.support'),
  },
  {
    icon: Shop,
    title: t('dashboard.shop'),
  }
]

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
    margin-top: 36px;

    h2 {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 16px;
      line-height: 21.79px;
    }

    .about-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;

      .about-content {
        display: flex;
        gap: 8px;
        align-items: center;

        .about-content-title {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;

        }
      }
    }
  }

  .banner {
    margin-top: 36px;

    .banner-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 21.79px;

      }

      i {
        font-weight: 400;
        font-size: 14px;
        line-height: 19.07px;
        color: #6C7278;

      }
    }

    .swiper {
      height: 162px;
      width: 100%;
      margin-top: 8px;

      .van-swipe-item {
        color: #fff;
        border-radius: 16px;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
      }

    }
  }
}
</style>