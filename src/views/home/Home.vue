<template>
  <div class="home-page">
    <Card bgColor="#FABB16" textColor="#000" @click="toImport">
      <div class="round">
        <Import />
      </div>
      <h2>{{ $t('home.card1.title') }}</h2>
      <p>{{ $t('home.card1.content') }}</p>
    </Card>
    <Card @click="toPage('/tutorial')">
      <div class="round">
        <Scan />
      </div>
      <h2>{{ $t('home.card2.title') }}</h2>
      <p>{{ $t('home.card2.content') }}</p>
    </Card>
    <Card bgColor="#DFDFDE" textColor="#000" @click="toPage('/esimCenter')">
      <div class="round">
        <Unhappy />
      </div>
      <h2>{{ $t('home.card3.title') }}</h2>
      <p>{{ $t('home.card3.content') }}</p>
    </Card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Import from '@/components/icons/Import.vue'
import Scan from '@/components/icons/Scan.vue'
import Unhappy from '@/components/icons/Unhappy.vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
const store = useStore()
const router = useRouter()

const toImport = () => {
  store.closeRoutes.setCloseRoutes('/home')
  router.push('/import')
}
const toPage = (path) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 20px;
  padding: 20px;
}

.round {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFFCC;
  border-radius: 50%;
}

h2 {
  font-family: Open Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 21.79px;
}

p {
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.07px;
}
</style>
