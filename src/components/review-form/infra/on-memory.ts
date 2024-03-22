import type { ReviewForm, ReviewRepository } from "../domain"

export class ReviewRepositoryOnMemory implements ReviewRepository {
  save(): Promise<ReviewForm & { id: number }> {
    throw new Error("Method not implemented.")
  }
}
