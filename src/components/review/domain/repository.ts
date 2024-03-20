import type { Review } from "./model"

export interface ReviewRepository {
  list(): Promise<Review & { id: number }>
}
