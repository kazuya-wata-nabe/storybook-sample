import type { paths } from "@/schema"

export type Paths = keyof paths
export type HttpMethod = "get" | "post" | "put" | "delete"
export type HttpSuccessStatus = "200" | "201" | "204"
export type HttpFailureStatus = "400" | "404"
export type HttpStatus = HttpSuccessStatus | HttpFailureStatus

export type PathWithMethod<Method extends HttpMethod> = {
  [Path in Paths]: paths[Path] extends {
    [M in Method]: unknown
  }
    ? Path
    : never
}[Paths]

type Base<Path extends Paths, Method extends HttpMethod> = paths[Path] extends {
  [M in Method]: unknown
}
  ? paths[Path][Method]
  : never

type Responses<Status extends HttpStatus> = {
  responses: { [S in Status]: { content: { "application/json": unknown } } }
}
type Params = { parameters: unknown }

export type ApiParams<Path extends Paths, Method extends HttpMethod> =
  Base<Path, Method> extends Params ? Base<Path, Method>["parameters"] : never

export type ApiSuccessResponses<
  Path extends Paths,
  Method extends HttpMethod,
  Code extends HttpSuccessStatus,
> = Code extends string
  ? Base<Path, Method> extends Responses<Code>
    ? Base<Path, Method>["responses"][Code]["content"]["application/json"]
    : never
  : never

export type ApiFailureResponses<
  Path extends Paths,
  Method extends HttpMethod,
  Code extends HttpFailureStatus,
> = Code extends string
  ? Base<Path, Method> extends Responses<Code>
    ? Base<Path, Method>["responses"][Code]["content"]["application/json"]
    : never
  : never
