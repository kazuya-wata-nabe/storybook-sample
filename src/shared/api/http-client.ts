import type { paths } from "@/schema"

import createClient from "openapi-fetch"

const baseUrl: string = import.meta.env.VITE_API_URL ?? ""
export const client = createClient<paths>({ baseUrl })
