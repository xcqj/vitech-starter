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

    <div class="i-ion:airplane"></div>
    <Child @click-count="handleClick"></Child>
  </div>
</template>
<script setup lang="ts">
import Child from '@/components/user/Child.vue'
import { RouterLink } from 'vue-router'

// defineOptions({
//   name: 'HomeIndex111',
// })
const handleClick = (num: number) => {
  console.log('f', num)
}

const msg = ref('Hello World111')

const target = useTemplateRef('target')

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style></style>
