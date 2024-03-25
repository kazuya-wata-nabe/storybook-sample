import { ReviewQueryServiceOnMemory } from "@/components/review/infra"
import type { Meta, StoryObj } from "@storybook/vue3"
import Component from "./index.vue"
/**
 * 漫画のレビューを一覧表示します
 * - 表示するデータは`/reviews`にリクエストして取得します
 */
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
  // github pagesだと使えないみたいなのでコメントアウト
  // parameters: {
  //   msw: {
  //     handlers: [
  //       http.get("/reviews", () => {
  //         return HttpResponse.json(data1)
  //       }),
  //     ],
  //   },
  // },
  args: {
    queryService: new ReviewQueryServiceOnMemory(),
    // queryService: new ReviewQueryServiceOnApi(),
  },
}
