<template>
  <button v-bind="$attrs" type="button" class="rounded-full size-7 flex items-center justify-center p-[6px]" :class="buttonVariant">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  variant: String,
});

const { variant } = toRefs(props);

const buttonVariant = computed(() => {
  switch (variant.value) {
    case "secondary": {
      return ["bg-woodsmoke-50", "hover:bg-woodsmoke-100", "active:bg-woodsmoke-200", "disabled:opacity-50"];
    }
    case "outlined": {
      return ["border-[1px]", "border-woodsmoke-100", "hover:bg-woodsmoke-100", "active:bg-woodsmoke-200"];
    }
    case "ghost": {
      return ["bg-transparent", "hover:bg-woodsmoke-100", "active:bg-woodsmoke-200"];
    }
    case "destructive": {
      return ["bg-red-orange-500", "hover:bg-red-orange-600", "active:bg-red-orange-700"];
    }
    default:
      return ["bg-matisse-800", "hover:bg-matisse-900", "active:bg-matisse-950"];
  }
});
</script>

<style lang="scss" scoped></style>
