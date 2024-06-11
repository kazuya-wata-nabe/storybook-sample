import { client } from "@/shared/api/http-client"
import type { SuccessResponse } from "@/shared/api/helper"
import { type ReviewQueryService } from "../domain"

const convert = (res: SuccessResponse<"get", "/reviews">) =>
  res.map((r, index) => ({
    id: index * 100,
    title: r.title,
    content: r.content,
    netabare: false,
  }))

export class ReviewQueryServiceOnApi implements ReviewQueryService {
  async list() {
    const { data = [] } = await client.GET("/reviews")
    return convert(data)
  }
}
