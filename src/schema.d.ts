/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type paths = {
  "/me": {
    get: {
      responses: {
        200: components["responses"]["Me"]
        401: {
          content: never
        }
      }
    }
  }
  "/reviews": {
    get: {
      parameters: {
        query?: {
          title?: components["parameters"]["ReviewListQuery"]
        }
      }
      responses: {
        200: components["responses"]["ReviewListResponse"]
        /** @description The server could not understand the request due to invalid syntax. */
        400: {
          content: {
            "application/json": components["schemas"]["Error"][]
          }
        }
      }
    }
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["Review"]
        }
      }
      responses: {
        201: {
          content: never
        }
        400: {
          content: {
            "application/json": components["schemas"]["Error"][]
          }
        }
      }
    }
  }
  "/reviews/{id}": {
    put: {
      parameters: {
        path: {
          id: string
        }
      }
      requestBody: {
        content: {
          "application/json": components["schemas"]["Review"]
        }
      }
      responses: {
        200: components["responses"]["ReviewResponse"]
        400: {
          content: {
            "application/json": components["schemas"]["Error"][]
          }
        }
        404: components["responses"]["NotFoundErrorResponse"]
      }
    }
    delete: {
      parameters: {
        path: {
          id: string
        }
      }
      responses: {
        204: {
          content: never
        }
        404: components["responses"]["NotFoundErrorResponse"]
      }
    }
  }
}

export type webhooks = Record<string, never>

export type components = {
  schemas: {
    Error: {
      code: string
      field: string
      message: string
    }
    /**
     * @default NotFound
     * @enum {string}
     */
    NotFoundError: "NotFound"
    /**
     * @description
     * * ADMIN - 管理者
     * * COMMON - 一般ユーザ
     *
     * @enum {string}
     */
    UserRole: "ADMIN" | "COMMON"
    Me: {
      name: string
      userRole: components["schemas"]["UserRole"]
    }
    Review: {
      title: string
      content: string
    }
    WithId: {
      id: string
    }
  }
  responses: {
    Me: {
      content: {
        "application/json": components["schemas"]["Me"]
      }
    }
    /** @description サンプルです */
    ReviewListResponse: {
      content: {
        "application/json": WithRequired<
          components["schemas"]["WithId"] & components["schemas"]["Review"],
          "id"
        >[]
      }
    }
    ReviewResponse: {
      content: {
        "application/json": WithRequired<
          components["schemas"]["WithId"] & components["schemas"]["Review"],
          "id"
        >
      }
    }
    NotFoundErrorResponse: {
      content: {
        "application/json": components["schemas"]["NotFoundError"]
      }
    }
  }
  parameters: {
    ReviewListQuery?: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export type operations = Record<string, never>