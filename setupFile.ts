// vitestはデフォルトだとtoBeInTheDocumentが使えないので
// 使えるようにする設定
import "@testing-library/jest-dom/vitest"

import { setProjectAnnotations } from "@storybook/vue3"
import globalStorybookConfig from "./.storybook/preview"

setProjectAnnotations(globalStorybookConfig)
