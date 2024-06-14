import client from "axios"
import type { SuccessResponse } from "@/shared/api/helper"
import { type ReviewQueryService } from "../domain"
import type { paths } from "@/schema"

const convert = (res: SuccessResponse<"get", "/reviews">) =>
  res.map((r, index) => ({
    id: index * 100,
    title: r.title,
    content: r.content,
    netabare: false,
  }))

const url = "/reviews"
type ReviewsResponse = paths[typeof url]["get"]["responses"]["200"]["content"]["application/json"]
export class ReviewQueryServiceOnApiWithAxios implements ReviewQueryService {
  async list() {
    const { data = [] } = await client.get<ReviewsResponse>(url, {})
    return convert(data)
  }
}
