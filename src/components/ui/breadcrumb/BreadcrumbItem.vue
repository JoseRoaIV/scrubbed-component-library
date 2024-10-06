<template>
  <RouterLink
    class="font-body font-medium text-bunker-500 text-sm hover:text-bunker-900 [&.router-link-exact-active]:font-bold [&.router-link-exact-active]:text-matisse-900"
    :to="props.to"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
