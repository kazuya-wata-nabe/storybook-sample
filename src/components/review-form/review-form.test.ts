import { composeStory } from "@storybook/vue3"
import { cleanup, fireEvent, render, screen } from "@testing-library/vue"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import Meta, { Primary } from "./review-form.stories"

const Story = composeStory(Primary, Meta)

describe("ボタンの活性制御", () => {
  let input: HTMLElement
  let button: HTMLElement

  describe("タイトル", () => {
    beforeEach(async () => {
      render(Story)
      await fireEvent.update(screen.getByLabelText("内容"), "あ")
      input = screen.getByLabelText("タイトル")
      button = screen.getByRole("button", { name: "登録" })
    })
    afterEach(cleanup)

    test("9文字以下は活性", async () => {
      await fireEvent.update(input, "あ".repeat(9))
      expect(button).toBeEnabled()
    })

    test("10文字以上は非活性", async () => {
      await fireEvent.update(input, "あ".repeat(10))
      expect(button).toBeDisabled()
    })
  })

  describe("内容", () => {
    beforeEach(async () => {
      render(Story)
      await fireEvent.update(screen.getByLabelText("タイトル"), "あ")
      input = screen.getByLabelText("内容")
      button = screen.getByRole("button", { name: "登録" })
    })
    afterEach(cleanup)

    test("50文字以下は活性", async () => {
      await fireEvent.update(input, "あ".repeat(50))
      expect(button).toBeEnabled()
    })

    test("51文字以上は非活性", async () => {
      await fireEvent.update(input, "あ".repeat(51))
      expect(button).toBeDisabled()
    })
  })
})
