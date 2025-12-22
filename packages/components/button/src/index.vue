<template>
  <div class="button-wrapper">
    <el-button v-bind="$attrs">
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyButton'
})
</script>

<style scoped>
/* .button-wrapper {
  background-color: red;
} */
</style>
