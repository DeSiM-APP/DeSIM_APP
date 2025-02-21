<template>
  <div class="usagedetail">
    <div class="cahngeButton">
      <div :class="['button-group', activeButton]">
      <button 
        :class="['btn', { active: activeButton === 'left' }]"
        @click="handleClick('left')"
      >
        {{ t('usagedetail.leftButton') }}
      </button>
      <button 
        :class="['btn', { active: activeButton === 'right' }]"
        @click="handleClick('right')"
      >
        {{ t('usagedetail.rightButton') }}
      </button>
    </div>
    </div>

    <lineChar :xData="xData" :yData="yData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import lineChar from './lineChar.vue';

const { t } = useI18n();
const xData = ref(['2/12', '2/13', '2/14', '2/15', '2/16', '2/17','2/18',])
const yData = ref([7, 9, 14, 10, 14, 9,10])
const activeButton = ref('left'); // 默认选中左侧按钮

const handleClick = (button) => {
  activeButton.value = button;
  if(button === 'left'){
    xData.value = ['2/12', '2/13', '2/14', '2/15', '2/16', '2/17','2/18',]
    yData.value = [7, 9, 14, 10, 14, 9,10]
  }else{
    xData.value = ['2/12', '2/13', '2/14', '2/15', '2/16', '2/17','2/18','2/19','2/21','2/22','2/23','2/24','2/25','2/26','2/27','2/28','2/29','2/30']
    yData.value = [7, 9, 14, 10, 14, 9,10,11,12,20,14,18,16,17,8,19,10,21]
  }
};
</script>

<style lang="scss" scoped>
  .usagedetail{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cahngeButton {
    width: 100%;
    height: 100%;
    padding:100px 30px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .button-group {
    height: 50px;
    width: 200px;
    background-color: #F7F9FC;
    border-radius: 20px;
    padding: 5px;
    padding-left: 4%;
    display: flex;
    gap: 5%;
    position: relative;
    
    &::before {
      content: '';
      display: flex;
      gap: 10%;
      position: absolute;
      width: 42%;
      height: 80%;
      background-color: #ef9c11;
      border-radius: 20px;
      transition: transform 0.3s ease;
      transform: translateX(-2%);
    }

    &.right::before {
      transform: translateX(108%);
    }
  }

  .btn {
    padding: 10px 10%;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    font-size: 17px;
    font-weight: 700;
    color: #545454;
    &.active {
      color: #ffffff;
    }
  }
</style>
