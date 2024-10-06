<template>
  <label
    v-bind="$attrs"
    :for="props.for"
    class="font-body font-semibold text-woodsmoke-900 text-xs transition-all hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed peer-checked:font-bold peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
  >
    <slot></slot>
  </label>
</template>

<script setup>
const props = defineProps({
  for: {
    type: String,
  },
});
</script>

<style scoped></style>
