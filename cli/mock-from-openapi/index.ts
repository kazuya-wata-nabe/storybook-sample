import { readFileSync, writeFileSync } from "fs"
import { load } from "js-yaml"
import * as path from "path"
import { mockTemplate } from "./template"
import { OpenAPI } from "./types"

const getExample = (
  obj: OpenAPI["components"]["responses"][string]["content"]["application/json"] | undefined,
): string => {
  const [first] = Object.values(obj?.examples ?? {})
  const examplePath = first?.$ref ?? ""
  const schema = examplePath.split("/").at(-1)
  const example = schema ? `examples.${schema}.value` : ""

  const isArray = obj?.schema.type === "array"
  if (isArray && example) {
    return `[...${example}]`
  }
  return example
}

const getSuccessCode = (obj: object): string => {
  const successCode = Object.keys(obj).find((code) => code.startsWith("20"))
  return successCode ?? ""
}

const pathWithOp = (paths: OpenAPI["paths"]) => (path: string) => {
  const methods = Object.keys(paths[path])
  return methods.map((method) => {
    const _responses = paths[path][method]["responses"]
    const status = getSuccessCode(_responses)
    const _content = _responses[status]?.["$ref"] ?? ""
    const content = _content.split("/").at(-1)
    const response = content ? "json" : "empty"
    return {
      path,
      method,
      status,
      content,
      response,
    }
  })
}

const createOpCollection = ({ paths, components }: OpenAPI) => {
  const op = pathWithOp(paths)
  const _opCollection = Object.keys(paths).flatMap((path) => op(path))
  const examples = Object.keys(components.responses).map((response) => {
    const example = getExample(components.responses[response].content["application/json"])
    return {
      key: response,
      example,
    }
  })
  return _opCollection.map((op) => {
    const target = examples.find((e) => e.key === op.content)
    const example = target?.example ?? ""
    return { ...op, example }
  })
}

export const main = (doc: OpenAPI, mode?: "" | "debug") => {
  const opCollection = createOpCollection(doc)
  const handlers = mockTemplate(opCollection, "", doc.components.examples)
  if (mode === "debug") {
    console.debug(handlers)
  } else {
    writeFileSync(path.resolve(process.cwd(), "../src/lib/msw/handlers.ts"), handlers)
  }
}

const doc = load(readFileSync("./openapi.yaml", "utf8")) as OpenAPI
main(doc, "")
