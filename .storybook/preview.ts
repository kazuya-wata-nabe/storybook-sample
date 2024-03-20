import type { Preview } from "@storybook/vue3"

import "../src/assets/main.css"

const preview: Preview = {
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
