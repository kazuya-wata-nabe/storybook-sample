import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import { data1 } from "./__test__/fixture"
import Component from "./index.vue"
/**
 * 漫画のレビューを一覧表示します
 * - デフォルトはネタバレ非表示です
 * - レビュー内容は折り返して表示します
 */
const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  // includeStories: ["Empty"],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "基本の表示",
  args: {
    items: data1,
  },
}

export const Empty: Story = {
  name: "レビューが１件もない",
  args: {
    ...Primary.args,
    items: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("まだレビューがありません")).toBeInTheDocument()
  },
}

export const ShowToHide: Story = {
  name: "ネタバレ表示 -> 非表示",
  args: {
    items: data1,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole("checkbox", { name: "ネタバレも表示する" })

    await step("デフォルトはネタバレ非表示", async () => {
      await expect(checkbox).not.toBeChecked()
      await expect(canvas.getByText("ネタバレあり！！")).toBeInTheDocument()
    })

    await step("ネタバレが表示される", async () => {
      await userEvent.click(checkbox, { delay: 500 })

      await expect(canvas.getByText("すごいネタバレ")).toBeInTheDocument()
      await expect(canvas.getByText("犯人はヤス")).toBeInTheDocument()
    })

    await step("ネタバレが表示されない", async () => {
      await userEvent.click(checkbox, { delay: 500 })
      await expect(checkbox).not.toBeChecked()

      await expect(canvas.getByText("ネタバレあり！！")).toBeInTheDocument()
      // getByは見つからないと例外をスローするのでqueryByを使う
      await expect(canvas.queryByText("すごいネタバレ")).not.toBeInTheDocument()
      await expect(canvas.queryByText("犯人はヤス")).not.toBeInTheDocument()
    })
  },
}
