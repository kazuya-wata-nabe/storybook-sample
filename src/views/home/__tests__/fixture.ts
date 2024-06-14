import type { SuccessResponse } from "@/shared/api/helper"

export const data1: SuccessResponse<"get", "/reviews"> = [
  {
    id: "1",
    title: "レスポンステスト",
    content: "あいうえお",
  },
  {
    id: "2",
    title: "めっちゃ面白い",
    content: "１２３４５６７８９０１２３４５６７８９",
  },
  {
    id: "3",
    title: "ああああああ",
    content: "いいいいいいいいいいい",
  },
]
