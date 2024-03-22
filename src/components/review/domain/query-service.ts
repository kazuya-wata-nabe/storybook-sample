import type { Review } from "./model"

export interface ReviewQueryService {
  list(): Promise<Review[]>
}
