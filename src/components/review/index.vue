<script setup lang="ts">
import { computed, ref } from "vue"

defineOptions({ name: "review-list" })

type Review = {
  id: number
  title: string
  content: string
  netabare: boolean
}

const props = defineProps<{
  items: Review[]
}>()

const netabareOk = ref(false)

const items = computed(() => {
  if (netabareOk.value) {
    return props.items
  }
  return props.items.map((item) => ({
    ...item,
    title: item.netabare ? "ネタバレあり！！" : item.title,
    content: item.netabare ? "" : item.content,
  }))
})
</script>

<template>
  <div>
    <h2>レビューの一覧</h2>
    <input id="netabare" type="checkbox" v-model="netabareOk" />
    <label for="netabare">ネタバレも表示する</label>

    <div class="container" v-if="items.length">
      <ul class="review-list">
        <li class="tittle" v-for="item in items" :key="item.id">
          <span :class="{ netabare: item.netabare }">{{ item.title }}</span>
          <p class="content">{{ item.content }}</p>
        </li>
      </ul>
    </div>
    <p v-else>まだレビューがありません</p>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 0;
}
.review-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.content {
  white-space: pre-wrap;
  width: 200px;
}

.netabare {
  color: red;
}
</style>
