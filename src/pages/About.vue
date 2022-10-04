<script setup>
  import { useCounterStore } from "@/stores/counter";
  const counterStore = useCounterStore()
  const { counter } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <h1>Pinia counter is: {{ counter }}</h1>
  </div>
</template>

<style scoped>
</style>
