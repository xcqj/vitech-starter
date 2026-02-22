<template>
  <div>index-home</div>
</template>
<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration?.update()
      }, 36000)
    },
  })
})
</script>

<style></style>

<route lang="yaml">
meta:
  layout: default
</route>
