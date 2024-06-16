// TODO: 適当な定義なので後で修正
export type OpenAPI = {
  paths: Path
  components: {
    responses: {
      [name: string]: Response
    }
    examples: {
      [name: string]: {
        value: {}
      }
    }
  }
}

type Path = {
  [path: string]: {
    [method: string]: {
      responses: {
        [status: string]: Ref | Content
      }
    }
  }
}

type ContentType = "application/json" | "multipart/form-data"
type Content = {
  [Content in ContentType]: {
    [C in Content]: {
      schema: {
        type: string
      }
    }
  }
}[ContentType]

type Response = {
  content: {
    [Content in ContentType]: {
      [C in Content]: {
        schema: {
          type?: string
        } & Ref
        examples?: {
          [name: string]: Ref
        }
      }
    }
  }[ContentType]
}

type Ref = {
  $ref?: string
}
