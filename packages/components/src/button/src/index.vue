<template>
  <div class="button-wrapper">
    <el-button v-bind="$attrs">
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
// import { subtract } from '@mose-vue-components/utils'
// console.log('subtract', subtract(10, 4))
defineOptions({
  name: 'XButton'
})
</script>

<style scoped>
</style>
