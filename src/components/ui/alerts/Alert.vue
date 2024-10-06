<template>
  <div class="w-full flex items-start justify-center p-4 gap-2 rounded-lg" :class="alertVariantBgColor">
    <div class="pt-[2px]">
      <Check v-if="type === 'success'" class="size-4 stroke-feijoa-950" />
      <CircleX v-else-if="type === 'error'" class="size-4 stroke-red-950" />
      <Info v-else-if="type === 'info'" class="size-4 stroke-matisse-900" />
      <Bell v-else class="size-4 stroke-bunker-950" />
    </div>

    <div class="flex flex-col items-start justify-center gap-2">
      <strong class="font-body text-sm" :class="alertVariantTextColor">
        <slot name="title"> </slot>
      </strong>
      <p class="font-body font-medium text-xs" :class="alertVariantTextColor">
        <slot name="message"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { Bell, Check, CircleX, Info } from "lucide-vue-next";
import { computed, toRefs } from "vue";

const props = defineProps({
  type: String,
});

const { type } = toRefs(props);

const alertVariantBgColor = computed(() => {
  switch (type.value) {
    case "success": {
      return ["bg-feijoa-200", "border-[1px]", "border-feijoa-400"];
    }
    case "error": {
      return ["bg-red-orange-200", "border-[1px]", "border-red-orange-400"];
    }
    case "info": {
      return ["bg-curious-blue-200", "border-[1px]", "border-matisse-400"];
    }
    default: {
      return ["bg-white", "border-[1px]", "border-woodsmoke-100"];
    }
  }
});

const alertVariantTextColor = computed(() => {
  switch (type.value) {
    case "success": {
      return "text-feijoa-950";
    }
    case "error": {
      return "text-red-orange-950";
    }
    case "info": {
      return "text-matisse-900";
    }
    default: {
      return "text-bunker-950";
    }
  }
});
</script>

<style scoped></style>
