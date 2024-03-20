import { fn } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import MyHeader from "./Header.vue"

const meta: Meta<typeof MyHeader> = {
  title: "Example/Header",
  component: MyHeader,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyHeader>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: null,
  },
}
