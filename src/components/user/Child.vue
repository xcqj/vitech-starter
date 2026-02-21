<template>
  <div>
    <p>ChildComponent</p>
    <butoon @click="handleClick">Click me</butoon>
  </div>
</template>

<script setup lang="ts">
const num = ref(0)
const emits = defineEmits<{
  clickCount: [num: number] // 事件名: [参数类型元组]
}>()
const handleClick = () => {
  num.value++
  emits('clickCount', num.value)
  //console.log(num.value)
}
</script>

<style scoped></style>
