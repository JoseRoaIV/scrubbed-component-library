<template>
  <li class="w-full overflow-hidden whitespace-nowrap text-ellipsis">
    <RouterLink
      v-if="isInternalLink"
      class="route-link min-h-11 block font-body font-normal p-3 text-bunker-700 text-sm transition-all w-[inherit] overflow-hidden whitespace-nowrap text-ellipsis hover:text-matisse-900 hover:bg-bunker-100 hover:rounded-md [&.router-link-active]:font-bold [&.router-link-active]:text-matisse-900 [&.router-link-active]:bg-bunker-100"
      :to="props.to"
    >
      <slot></slot>
    </RouterLink>

    <a
      v-else
      class="route-link min-h-11 block font-body font-normal p-3 text-bunker-700 text-sm transition-all w-[inherit] overflow-hidden whitespace-nowrap text-ellipsis hover:text-matisse-900 hover:bg-bunker-100 hover:rounded-md"
      :href="props.to"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },
});

const isInternalLink = props.to.startsWith("/");
</script>

<style scoped></style>
