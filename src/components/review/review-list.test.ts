import { composeStory } from "@storybook/vue3"
import { cleanup, render, screen } from "@testing-library/vue"
import { afterEach, expect, test } from "vitest"
import Meta, { Primary } from "./review-list.stories"

afterEach(cleanup)

test("storyの再利用サンプル", async () => {
  const Story = composeStory(Primary, Meta)
  render(Story)

  await Story.play?.()
})

test("レビューが1件もない場合は「まだレビューがありません」を表示する", async () => {
  const Story = composeStory(Primary, Meta)
  render(Story, { props: { items: [] } })

  const message = screen.getByText("まだレビューがありません")
  expect(message).toBeInTheDocument()
})
