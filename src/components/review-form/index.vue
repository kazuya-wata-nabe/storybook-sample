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

const MAX_LENGTH = {
  title: 9,
  content: 50,
} as const

const invalid = computed(() => {
  return (
    title.value === "" ||
    title.value.length > MAX_LENGTH.title ||
    content.value === "" ||
    content.value.length > MAX_LENGTH.content
  )
})

const onSubmit = async () => {
  if (invalid.value) return
  emit("submit", { title: title.value, content: content.value })
}
</script>

<template>
  <div>
    <p>タイトル:&nbsp;{{ MAX_LENGTH.title }}文字まで!</p>
    <p>内容:&nbsp;{{ MAX_LENGTH.content }}文字ま&nbsp;で</p>
    <form aria-label="form" @submit.prevent="onSubmit">
      <text-box label="タイトル" name="title" v-model="title"></text-box>
      <text-box label="内容" name="content" v-model="content"></text-box>
      <div class="button-area">
        <button class="button" :disabled="invalid">登録</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.button-area {
  padding: 15px 0;
}
</style>
