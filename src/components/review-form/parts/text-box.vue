<script setup lang="ts">
defineProps<{
  label: string
  name: string
}>()
const model = defineModel()
</script>

<template>
  <div class="text-box">
    <label :for="name">{{ label }}</label>
    <input :id="name" :name="name" v-model="model" />
  </div>
</template>

<style scoped>
.text-box {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
