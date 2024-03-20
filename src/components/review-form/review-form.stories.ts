import { expect, fn, userEvent, waitFor, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import Component from "./index.vue"
/**
 * レビューを登録します
 * - 入力内容にエラーがある場合は登録できません
 */
const meta = {
  title: "components/review/review-form",
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
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step("タイトル入力", async () => {
      const title = canvas.getByLabelText("タイトル")
      await userEvent.type(title, "あ".repeat(10))
    })

    await step("内容入力", async () => {
      const content = canvas.getByLabelText("内容")
      await userEvent.type(content, "あ".repeat(50))
    })

    await step("登録を押す", async () => {
      const button = canvas.getByRole("button", { name: "登録" })
      await userEvent.click(button)
    })

    await waitFor(async () => {
      await expect(args.onSubmit).toBeCalled()
    })
  },
}
