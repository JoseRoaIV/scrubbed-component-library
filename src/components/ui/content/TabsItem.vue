<template>
  <li class="px-3 py-1 shrink-0 transition-all rounded-md min-h-7 has-[.router-link-active]:bg-white has-[.router-link-active]:shadow-md hover:bg-danube-50 disabled:opacity-50">
    <RouterLink class="font-normal text-bunker-400 text-sm transition-all [&.router-link-active]:font-medium [&.router-link-active]:text-matisse-900" :to="props.to">
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
