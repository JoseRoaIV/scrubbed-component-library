<template>
  <RouterLink
    v-if="isInternalLink"
    class="font-medium text-bunker-500/60 text-sm [&.router-link-active]:font-bold [&.router-link-active]:text-matisse-900 hover:transition-colors hover:text-bunker-500"
    :to="props.to"
  >
    <slot></slot>
  </RouterLink>

  <a v-else class="font-medium text-sm text-bunker-500/60 hover:text-bunker-500 hover:transition-colors" :href="props.to">
    <slot></slot>
  </a>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: { type: String, required: true },
});

const isInternalLink = props.to.startsWith("/");
</script>

<style scoped></style>
