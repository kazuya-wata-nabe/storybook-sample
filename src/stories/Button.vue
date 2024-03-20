<script lang="ts" setup>
import { computed } from "vue"
import "./button.css"

defineOptions({ name: "TheButton" })

type Props = {
  /** ユーザーが最もやりたいであろうアクションかどうか */
  primary?: boolean
  /** ボタンのラベル名 */
  label: string
  /** サイズ */
  size?: "small" | "medium" | "large"
  /** 背景色（16進数で指定すること）*/
  backgroundColor?: string
}
const props = withDefaults(defineProps<Props>(), { primary: false })

defineEmits<{
  click: []
}>()

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="$emit('click')">
    {{ label }}
  </button>
</template>
