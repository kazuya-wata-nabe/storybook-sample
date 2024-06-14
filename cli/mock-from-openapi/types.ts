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
        [status: string]: {}
      }
    }
  }
}

type Response = {
  content: {
    "application/json": {
      schema: {
        type?: string
        $ref?: string
      }
      examples?: {
        [name: string]: {
          $ref?: string
        }
      }
    }
  }
}
