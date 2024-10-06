<template>
  <li
    class="px-3 py-2 shrink-0 transition-all hover:rounded-md has-[.router-link-active]:hover:rounded-none has-[.router-link-active]:rounded-t-md has-[.router-link-active]:border-b-2 has-[.router-link-active]:border-b-matisse-900 hover:bg-woodsmoke-100"
  >
    <RouterLink class="font-body font-normal text-bunker-500 text-sm transition-all [&.router-link-active]:font-bold [&.router-link-active]:text-matisse-900" :to="props.to">
      <slot></slot>
    </RouterLink>
  </li>
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
