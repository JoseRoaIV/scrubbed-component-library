<template>
  <button
    v-bind="$attrs"
    type="button"
    class="flex items-center justify-center gap-2 h-10 font-body font-medium text-xs px-4 py-2 rounded transition-all disabled:cursor-not-allowed disabled:opacity-50"
    :class="buttonVariant"
    :disabled="loading"
  >
    <Loader2 v-if="loading" class="stroke-white size-4 animate-spin" />
    <slot></slot>
  </button>
</template>

<script setup>
import { Loader2 } from "lucide-vue-next";
import { computed, toRefs } from "vue";

const props = defineProps({
  variant: String,
  loading: Boolean,
});

const { variant, loading } = toRefs(props);

const buttonVariant = computed(() => {
  switch (variant.value) {
    case "secondary": {
      return ["bg-woodsmoke-100", "text-bunker-900", "hover:bg-woodsmoke-200", "active:bg-woodsmoke-300"];
    }
    case "outlined": {
      return ["border-[1px]", "border-woodsmoke-100", "text-bunker-900", "hover:bg-woodsmoke-100", "active:bg-woodsmoke-200"];
    }
    case "ghost": {
      return ["bg-transparent", "hover:bg-woodsmoke-100", "active:bg-woodsmoke-200"];
    }
    case "destructive": {
      return ["bg-red-orange-600", "text-white", "hover:bg-red-orange-700", "active:bg-red-orange-800"];
    }

    default:
      return ["bg-matisse-800", "text-white", "hover:bg-matisse-900", "active:bg-matisse-950"];
  }
});
</script>

<style scoped></style>
