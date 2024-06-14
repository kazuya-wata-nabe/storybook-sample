import { ReviewQueryServiceOnApi } from "@/components/review/infra"
import type { Meta, StoryObj } from "@storybook/vue3"
import { data1 } from "./__tests__/fixture"
import Component from "./index.vue"
import { http } from "@/lib/msw/handlers"

const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "基本の表示",
  parameters: {
    msw: {
      handlers: [
        http.get("/reviews", ({ response }) => {
          return response(200).json(data1)
        }),
      ],
    },
  },
  args: {
    queryService: new ReviewQueryServiceOnApi(),
  },
}
