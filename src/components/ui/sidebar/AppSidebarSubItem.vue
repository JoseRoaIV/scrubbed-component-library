<template>
  <li class="w-full">
    <RouterLink
      class="route-link min-h-11 block font-body font-normal p-3 text-bunker-700 text-sm transition-all w-[inherit] hover:bg-bunker-100 hover:rounded-md hover:font-semibold [&.router-link-active]:font-semibold [&.router-link-active]:text-matisse-900 [&.router-link-active]:bg-bunker-100"
      :to="props.to"
    >
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },
});
</script>

<style scoped></style>
