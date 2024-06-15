/**
 * This file is AUTO GENERATED
 * fork from [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 */
import { createOpenApiHttp } from "openapi-msw"
import type { paths } from "@/schema"

export const http = createOpenApiHttp<paths>()

export const handlers = [
  http.get(`/me`, ({ response }) => {
    return response(200).json(examples.Me.value)
  }),
  http.get(`/reviews`, ({ response }) => {
    return response(200).json([...examples.ReviewListResponse.value])
  }),
  http.post(`/reviews`, ({ response }) => {
    return response(201).empty()
  }),
  http.put(`/reviews/{id}`, ({ response }) => {
    return response(200).json(examples.ReviewResponse.value)
  }),
  http.delete(`/reviews/{id}`, ({ response }) => {
    return response(204).empty()
  }),
]

const examples = {
  ReviewListResponse: {
    value: [
      { id: "1", title: "レビューのタイトル", content: "レビュー内容", postDate: "2024-06-13" },
    ],
  },
  ReviewResponse: {
    value: { id: "1", title: "title", content: "content", postDate: "2024-06-13" },
  },
  Me: { value: { name: "name", userRole: "ADMIN" } },
} as const
