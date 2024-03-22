// vitestはデフォルトだとtoBeInTheDocumentが使えないので
// 使えるようにする設定
// pnpm以外は↓のとおりでok
// https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
// pnpmは手動で型を拡張しないとエディタの補完が効かない
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

import { setProjectAnnotations } from "@storybook/vue3"
import globalStorybookConfig from "./.storybook/preview"

setProjectAnnotations(globalStorybookConfig)


// 参考: https://github.com/testing-library/jest-dom/issues/567#issuecomment-1895901374
expect.extend(matchers)

declare module 'vitest' { // vitest instead `@vitest/expect`
  interface JestAssertion<T = any>
    extends matchers.TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}