<template>
  <div class="dashboard">
    <div class="top-part">
      <div v-if="esimData.dataTotal === null" class="changeable-dashboard empty-data">
        <img :src="EmptyImg" alt="empty" />
        <h1>{{ $t("dashboard.emptyData") }}</h1>
        <p>{{ $t("dashboard.startPlan") }}</p>
        <button class="start-plan-button" @click="router.push('/tutorial')">
          <div>
            {{ $t("dashboard.startPlanButton") }}
          </div>
          <Arrow />
        </button>
      </div>
      <div v-else-if="esimData.dataTotal === 'Unlimited data'" class="changeable-dashboard infinite-data">
        <div class="capsule infinite-capsule">
          <div>
            <div class="content">
              {{ esimData.dateUsage }}/{{ esimData.dateTotal }}
            </div>
            <div class="unit">Days</div>
          </div>
          <div>
            <div class="content">{{ esimData.dataUsage }}</div>
            <div class="unit">used</div>
          </div>
        </div>
        <Infinite />
        <div class="capsule card-content">
          <div class="left">
            <h2>
              {{
                $t("dashboard.countryDays", {
                  count: esimData.dateTotal,
                  country: esimData.country,
                })
              }}
            </h2>
            <p>
              {{
                $t("dashboard.dataDays", {
                  count: esimData.dateTotal,
                  data: esimData.dataTotal,
                })
              }}
            </p>
          </div>
          <div class="right">
            <button class="start-btn" @click="showDetail">Plan started</button>
          </div>
        </div>
      </div>
      <div v-else-if="esimData.dateTotal === 1" class="changeable-dashboard one-day-data">
        <CircularProgress used="2.6G" total="3G" :percentage="10" />
        <div class="capsule card-content">
          <div class="left">
            <h2>
              {{
                $t("dashboard.countryDays", {
                  count: esimData.dateTotal,
                  country: esimData.country,
                })
              }}
            </h2>
            <p>
              {{
                $t("dashboard.dataDays", {
                  count: esimData.dateTotal,
                  data: esimData.dataTotal,
                })
              }}
            </p>
          </div>
          <div class="right">
            <button class="start-btn" @click="showDetail">Plan started</button>
          </div>
        </div>
      </div>
    </div>
    <div class="about-sim">
      <h2>{{ $t("dashboard.aboutESIM") }}</h2>
      <div class="about-list">
        <div class="capsule about-content" v-for="item in aboutList" :key="item.title">
          <component :is="item.icon" size="21" />
          <div class="about-content-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-header">
        <h2>{{ $t("dashboard.bannerTitle") }}</h2>
        <i>{{ $t("dashboard.more") }}</i>
      </div>
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img :src="swiper" alt="" />
            <div class="swipe-text">
              <h2>Local tour</h2>
              <h1>Official Miami Millionaires Sightseeing Cruise</h1>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <img :src="swiper" alt="" />
            <div class="swipe-text">
              <h2>Local tour</h2>
              <h1>Official Miami Millionaires Sightseeing Cruise</h1>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <img :src="swiper" alt="" />
            <div class="swipe-text">
              <h2>Local tour</h2>
              <h1>Official Miami Millionaires Sightseeing Cruise</h1>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <img :src="swiper" alt="" />
            <div class="swipe-text">
              <h2>Local tour</h2>
              <h1>Official Miami Millionaires Sightseeing Cruise</h1>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <DetailCard v-model="show" :detail="detailData" />
  </div>
</template>

<script setup>
import EmptyImg from "@/assets/empty.png";
import Arrow from "@/components/icons/Arrow.vue";
import Detail from "@/components/icons/Detail.vue";
import Book from "@/components/icons/Book.vue";
import Support from "@/components/icons/Support.vue";
import Shop from "@/components/icons/Shop.vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { Swipe as VanSwipe, SwipeItem as VanSwipeItem } from "vant";
import { onMounted, ref } from "vue";
import { getESIMDataById } from "@/mock/mockDashboard";
import Infinite from "@/components/icons/Infinite.vue";
import DetailCard from "./DetailCard.vue";
import swiper from "@/assets/swiper.png";
import CircularProgress from "./CircularProgress.vue";

const detailData = {
  coverage: 'USA eSIM',
  data: '1 day / Total 3.00 GB',
  validity: '2025-02-25',
  esimNumber: '77564567892491',
  smdp: 'sim.express',
  activationCode: '01238D204C8366F946E62',
  apn: 'AAAplus + BBB',
  operator: 'AT& T + Verizon + ??'
}
const show = ref(false)
const showDetail = () => {
  show.value = true
}
const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const esimData = ref({
  dataUsage: "",
  dataTotal: "",
  country: "",
  day: "",
  dateUsage: "",
  dateTotal: "",
});

onMounted(() => {
  const id = route.params.id;
  esimData.value = getESIMDataById(id);
});
const aboutList = [
  {
    icon: Detail,
    title: t("dashboard.planDetail"),
  },
  {
    icon: Book,
    title: t("dashboard.starInstruction"),
  },
  {
    icon: Support,
    title: t("dashboard.support"),
  },
  {
    icon: Shop,
    title: t("dashboard.shop"),
  },
];
</script>
<style scoped lang="scss">
.capsule {
  width: 100%;
  height: 100%;
  background-color: #f7f9fc;
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

    .changeable-dashboard {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .empty-data {
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
    }

    .infinite-data {
      .infinite-capsule {
        position: fixed;
        max-width: 253px;
        top: 14.5px;
        right: 50%;
        transform: translateX(50%);
        height: 38px;
        padding: 8px 24px;
        gap: 48px;
        border-radius: 70px;
        display: flex;
        align-items: center;
        justify-content: center;

        &>div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex: 1;
          height: 16px;
          line-height: 16px;
        }

        .content {
          font-weight: 700;
          font-size: 16px;
          color: #ef9c11;
        }

        .unit {
          color: #545454;
          font-weight: 400;
          font-size: 12px;
        }
      }
    }

    .card-content {
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 600;
        justify-content: center;

        h2 {
          line-height: 22px;
          font-weight: 600;
          font-size: 16px;
          color: #000;
        }

        p {
          font-weight: 600;
          font-size: 12px;
          line-height: 16.34px;
          color: #545454;
        }
      }

      .right {
        display: flex;
        align-items: end;

        .start-btn {
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid #E0E6E9;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;

          &:active {
            opacity: 0.95;
          }
        }
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
        color: #6c7278;
      }
    }

    .swiper {
      height: 162px;
      width: 100%;
      margin-top: 8px;

      .van-swipe-item {
        color: #fff;
        overflow: hidden;
        width: 100%;
        height: 162px;
        border-radius: 16px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
        }

        .swipe-text {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: fit-content;
          z-index: 1;

          h2 {
            font-weight: 600;
            font-size: 12px;
            line-height: 16.34px;
            white-space: nowrap;
          }

          h1 {
            font-weight: 600;
            font-size: 14px;
            line-height: 19.07px;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>