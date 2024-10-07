<template>
  <RouterLink class="font-body text-bunker-500/60 text-sm [&.router-link-active]:font-bold [&.router-link-active]:text-matisse-900 hover:text-bunker-500" :to="props.to">
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: { type: String, required: true },
});
</script>

<style scoped></style>
