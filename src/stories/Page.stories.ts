import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import MyPage from "./Page.vue"

const meta = {
  title: "Example/Page",
  component: MyPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyPage>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  name: "ログインしている場合",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const loginButton = canvas.getByRole("button", { name: /Log in/i })
    await expect(loginButton).toBeInTheDocument()

    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = canvas.getByRole("button", { name: /Log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
}

export const LoggedOut: Story = {
  name: "ログインしていない場合",
}
