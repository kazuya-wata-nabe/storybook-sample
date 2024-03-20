<script setup lang="ts">
import { computed, ref } from "vue"
import type { ReviewForm } from "./domain/model"
import { TextBox } from "./parts"

defineOptions({ name: "review-form" })
const emit = defineEmits<{
  submit: [form: ReviewForm]
}>()

const title = ref("")
const content = ref("")

const invalid = computed(() => {
  return (
    title.value === "" ||
    title.value.length > 10 ||
    content.value === "" ||
    content.value.length > 50
  )
})

const onSubmit = async () => {
  if (invalid.value) return
  emit("submit", { title: title.value, content: content.value })
}
</script>

<template>
  <form aria-label="form" @submit.prevent="onSubmit">
    <text-box label="タイトル" name="title" v-model="title"></text-box>
    <text-box label="内容" name="content" v-model="content"></text-box>
    <div class="button-area">
      <button class="button" :disabled="invalid">登録</button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.button-area {
  padding: 16px 0;
}
</style>
