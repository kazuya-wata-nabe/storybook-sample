import { fn } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import Button from "./Button.vue"

/**
 * ここにコメントを書くと<br>
 * Docsに表示されます
 */
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    primary: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
}

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
}

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
}
