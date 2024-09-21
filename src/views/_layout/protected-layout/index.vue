<script lang="ts" setup>
import SideMenu from "./side-menu.vue"
defineOptions({ name: "ProtectedLayout" })
</script>

<template>
  <div class="app-container">
    <header>ここはヘッダーです</header>
    <SideMenu class="side-container">side menu</SideMenu>
    <slot></slot>
    <footer>this is footer</footer>
  </div>
</template>

<style lang="css" scoped>
.app-container {
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 40px auto 20px;
  grid-template-areas:
    "aside header"
    "aside main"
    "aside footer";
}

header,
footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  grid-area: header;
}
footer {
  grid-area: footer;
}

header {
  border-bottom: 1px solid gainsboro;
}

footer {
  border-top: 1px solid gainsboro;
}

.side-container {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

:slotted(main) {
  grid-area: main;
}
</style>
