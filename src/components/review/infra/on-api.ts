import { type Review, type ReviewQueryService } from "../domain"

export type ReviewResponse = {
  id: number
  title: string
  content: string
  neta_bare: boolean
}

const convert = (res: ReviewResponse[]) =>
  res.map<Review>((r, index) => ({
    id: index * 100,
    title: r.title,
    content: r.content,
    netabare: r.neta_bare,
  }))

const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
const url = baseUrl.concat("/reviews")

export class ReviewQueryServiceOnApi implements ReviewQueryService {
  async list() {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    })
    const data = (await res.json()) as ReviewResponse[]
    return convert(data)
  }
}
