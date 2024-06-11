import type { components, paths } from "@/schema"

export type Responses = components["responses"]

type Paths = keyof paths
type HttpMethod = "get" | "post" | "put" | "delete"
type ContentType = "application/json" | "multipart/form-data"

type PathWithMethod<Method extends HttpMethod> = {
  [Path in Paths]: paths[Path] extends {
    [M in Method]: unknown
  }
    ? Path
    : never
}[Paths]

type HasContent<Content extends ContentType> = {
  content: Record<Content, unknown>
}

type CodeWithPathMethod<
  Path extends keyof paths,
  Method extends keyof paths[Path],
> = paths[Path][Method] extends {
  responses: Record<string, unknown>
}
  ? keyof paths[Path][Method]["responses"] extends number
    ? Extract<`${keyof paths[Path][Method]["responses"]}`, `20${string}`>
    : never
  : never

type FilterSuccess<Path extends keyof paths, Method extends keyof paths[Path]> = Extract<
  CodeWithPathMethod<Path, Method>,
  `20${string}`
>

type GetResponseSchema<
  Path extends keyof paths,
  Method extends keyof paths[Path],
  Code extends CodeWithPathMethod<Path, Method>,
  Content extends ContentType = "application/json",
> = Code extends string
  ? paths[Path][Method] extends { responses: Record<Code, HasContent<Content>> }
    ? paths[Path][Method]["responses"][Code]["content"][Content]
    : never
  : never

type Flatted<T> = T extends unknown[]
  ? { [K in keyof T[number]]: T[number][K] }[]
  : { [K in keyof T]: T[K] }

export type SuccessResponse<
  Method extends HttpMethod,
  Path extends PathWithMethod<Method>,
  Content extends ContentType = "application/json",
> = Method extends keyof paths[Path]
  ? FilterSuccess<Path, Method> extends never
    ? never
    : Flatted<GetResponseSchema<Path, Method, FilterSuccess<Path, Method>, Content>>
  : never
