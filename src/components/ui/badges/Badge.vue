<template>
  <div v-bind="$attrs" class="flex items-center justify-center gap-2 px-3 py-1 rounded-full font-body font-bold text-xs" :class="badgeVariant">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  variant: String,
});
const { variant } = toRefs(props);

const badgeVariant = computed(() => {
  switch (variant.value) {
    case "secondary": {
      return ["bg-woodsmoke-100", "text-bunker-900"];
    }
    case "outlined": {
      return ["border-[1px]", "border-woodsmoke-100", "text-bunker-900"];
    }
    default: {
      return ["bg-matisse-800", "font-bold", "text-white"];
    }
  }
});
</script>

<style scoped></style>
