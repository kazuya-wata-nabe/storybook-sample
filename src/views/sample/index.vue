<script lang="ts" setup>
import { ProtectedLayout } from "@/views/_layout/protected-layout"
defineOptions({ name: "SamplePage" })
</script>

<template>
  <ProtectedLayout>
    <main>aaa</main>
  </ProtectedLayout>
</template>
