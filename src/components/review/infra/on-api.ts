import { type Review, type ReviewQueryService } from "../domain"

const baseUrl = import.meta.env.API_BASE_URL ?? "https://httpbin.org/"
const url = baseUrl.concat("/json")

type ApiResponse = {
  slideshow: { slides: { title: string }[] }
}

const convert = (res: ApiResponse) =>
  res.slideshow.slides.map<Review>((r, index) => ({
    id: index,
    title: r.title,
    content: "content is ".concat(r.title),
    netabare: (index + 1) % 2 === 0,
  }))

export class ReviewQueryServiceOnApi implements ReviewQueryService {
  async list() {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    })
    const data = (await res.json()) as ApiResponse
    return convert(data)
  }
}
