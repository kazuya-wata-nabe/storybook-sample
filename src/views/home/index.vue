<script setup lang="ts">
import { ReviewList } from "@/components/review"
import type { Review, ReviewQueryService } from "@/components/review/domain"
import { ref } from "vue"

defineOptions({ name: "HomeView" })

const props = defineProps<{ queryService: ReviewQueryService }>()
const items = ref<Review[]>([])

props.queryService
  .list()
  .then((data) => (items.value = data))
  .catch(console.error)
</script>

<template>
  <main>
    <review-list :items="items" />
  </main>
</template>
