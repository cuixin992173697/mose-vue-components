<template>
  <div class="button-wrapper">
    <el-button v-bind="$attrs">
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'XButton'
})
</script>

<style scoped>
</style>
