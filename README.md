# storybook-sample

storybookのサンプル

## Project Setup

nodeのバージョン管理は[volta](https://volta.sh/)を推奨

[pnpm](https://pnpm.io/ja/installation#volta%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)を使ってください

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run Storybook

```sh
pnpm storybook
```

### Run Storybook Tests

事前に`pnpm storybook`してください

```sh
pnpm storybook:test
```

### Run Storybook Screenshot

事前に`pnpm storybook`してください

```sh
pnpm storybook:screenshot
```
