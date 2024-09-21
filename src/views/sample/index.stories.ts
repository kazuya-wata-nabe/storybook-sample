import type { Meta, StoryObj } from "@storybook/vue3"
import Component from "./index.vue"

const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "基本の表示",
}
