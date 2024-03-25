import { ReviewQueryServiceOnApi } from "@/components/review/infra"
import type { Meta, StoryObj } from "@storybook/vue3"
import { HttpResponse, http } from "msw"
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
  parameters: {
    msw: {
      handlers: [
        http.get("/reviews", () => {
          return HttpResponse.json(data1)
        }),
      ],
    },
  },
  args: {
    queryService: new ReviewQueryServiceOnApi(),
  },
}
