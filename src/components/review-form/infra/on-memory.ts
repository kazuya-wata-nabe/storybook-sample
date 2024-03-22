import type { ReviewForm, ReviewRepository } from "../domain"

export class ReviewRepositoryOnMemory implements ReviewRepository {
  save(): Promise<ReviewForm> {
    throw new Error("Method not implemented.")
  }
}
