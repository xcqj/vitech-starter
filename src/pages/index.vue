<template>
  <div ref="target">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <div>{{ msg }}</div>
    <div class="p-4">Index page</div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <p>x:{{ x }}</p>
    <p>y:{{ y }}</p>
    <p>isOutside:{{ isOutside }}</p>

    <HelloWorld></HelloWorld>
    <UserComponent></UserComponent>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />

    <div class="i-ion:airplane"></div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const msg = ref('Hello World111')

const target = useTemplateRef('target')

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style></style>
