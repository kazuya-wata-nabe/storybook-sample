import type { Preview } from "@storybook/vue3"
import { initialize, mswLoader } from "msw-storybook-addon"

import "../src/assets/main.css"

initialize({
  onUnhandledRequest: "bypass",
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    () => ({
      template: `
        <div id="app">
          <story />
        </div>
    `,
    }),
  ],
}

export default preview
