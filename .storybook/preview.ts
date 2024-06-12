import type { Preview } from "@storybook/vue3"
import { initialize, mswLoader } from "msw-storybook-addon"

import "../src/assets/main.css"

initialize({
  onUnhandledRequest: "bypass",
  // github pagesでもmswを使えるようにするため
  serviceWorker: { url: "mockServiceWorker.js" },
})

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
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
