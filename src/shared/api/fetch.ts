import type {
  ApiFailureResponses,
  ApiParams,
  ApiSuccessResponses,
  HttpFailureStatus,
  HttpMethod,
  HttpSuccessStatus,
  PathWithMethod,
  Paths,
} from "./helper"

type ApiResult<Path extends Paths, Method extends HttpMethod> =
  | {
      data: ApiSuccessResponses<Path, Method, HttpSuccessStatus>
      error?: undefined
    }
  | {
      data?: undefined
      error: ApiFailureResponses<Path, Method, HttpFailureStatus>
    }

export const request =
  <Method extends HttpMethod>(method: Method) =>
  async <Path extends PathWithMethod<Method>>(
    path: Path,
    params: ApiParams<Path, Method>,
  ): Promise<ApiResult<Path, Method>> => {
    console.debug(params)

    const res = await fetch(path, {
      method,
    })
    if (res.status >= 200 && res.status < 300) {
      const code = res.status.toString() as HttpSuccessStatus
      const json = await res.json()
      return { data: json as ApiSuccessResponses<Path, Method, typeof code> }
    }

    const code = res.status.toString() as HttpFailureStatus

    const json = await res.json()
    return { error: json as ApiFailureResponses<Path, Method, typeof code> }
  }
