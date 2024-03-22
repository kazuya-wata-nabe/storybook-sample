import type { Review, ReviewQueryService } from "../domain"

export class ReviewQueryServiceOnMemory implements ReviewQueryService {
  private items: Review[] = [
    { title: "hoge", content: "fuga", netabare: false },
    { title: "hogee", content: "fuga!", netabare: false },
    { title: "hogeee", content: "fuga?", netabare: false },
  ].map((item, idx) => ({ id: idx + 1, ...item }))

  async list() {
    return [...this.items]
  }
}
