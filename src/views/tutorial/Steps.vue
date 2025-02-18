<template>
  <div class="steps">
    <div class="step-items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.steps {
  overflow: hidden;

  .step-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;

    :deep(.step) {
      &:last-child {
        .step-line {
          border: none;
        }
      }
    }
  }

}
</style>