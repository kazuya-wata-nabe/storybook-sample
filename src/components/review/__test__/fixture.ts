import type { Review } from "../domain/model"

export const data1 = Array<Review>(
  {
    id: 1,
    title: "感動した",
    content: "あいうえお",
    netabare: false,
  },
  {
    id: 2,
    title: "めっちゃ面白い",
    content: "１２３４５６７８９０１２３４５６７８９",
    netabare: false,
  },
  {
    id: 3,
    title: "すごいネタバレ",
    content: "犯人はヤス",
    netabare: true,
  },
)
