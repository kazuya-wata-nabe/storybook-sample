<script lang="ts" setup>
import { computed } from "vue"

const menus = computed(() => [
  { name: "hoge", label: "hoge" },
  { name: "fuga", label: "fuga" },
  { name: "piyo", label: "piyo" },
])
</script>

<template>
  <div class="side-container">
    <h1>side menu</h1>
    <div v-for="menu in menus" :key="menu.name">
      {{ menu.label }}
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  font-size: large;
  font-weight: bold;
}
</style>
