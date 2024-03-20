import type { ReviewForm } from "./domain/model"

export type Props = {
  items: Array<ReviewForm>
  netabareOk: boolean
}

export type ListItem = {
  item: ReviewForm
}
