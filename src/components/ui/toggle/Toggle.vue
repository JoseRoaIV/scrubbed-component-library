<template>
  <button
    class="bg-transparent rounded-md size-8 p-2 shrink-0 flex items-center justify-center transition-all hover:bg-woodsmoke-100 active:bg-woodsmoke-200 disabled:hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
    role="toggle"
    :class="{ 'bg-woodsmoke-200': active }"
  >
    <slot> </slot>
  </button>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  active: Boolean,
});

const { active } = toRefs(props);
</script>

<style scoped></style>
