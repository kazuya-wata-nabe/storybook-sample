import type { ReviewForm } from "./model"

export interface ReviewRepository {
  save(): Promise<ReviewForm>
}
