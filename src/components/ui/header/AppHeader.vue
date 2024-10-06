<template>
  <div class="flex items-center justify-between px-6 h-16 bg-white">
    <div class="flex items-end justify-center gap-6">
      <div class="block md:hidden">
        <button>
          <Menu class="size-4" />
        </button>
      </div>
      <img src="/src/assets/scrubbed_logo_small.png" alt="Scrubbed Logo" class="" />
    </div>
    <div class="flex items-center justify-center">
      <div class="flex items-center gap-[14px] md:gap-10">
        <nav class="hidden items-center justify-center gap-6 md:flex">
          <RouterLink
            v-for="(route, index) in props.routes"
            :key="index"
            class="font-body text-sm"
            :class="{ 'text-matisse-900 font-bold ': index === 0, 'font-medium text-bunker-500': index != 0 }"
            :to="route.to"
            >{{ route.name }}</RouterLink
          >
        </nav>
        <div v-if="$slots.headerActions" class="flex items-center justify-center gap-2">
          <slot name="headerActions"></slot>
        </div>
        <div class="rounded-full size-8">
          <img src="https://community.scrubbed.net/uploads/image_237270_.png" alt="Jose" class="rounded-[inherit] object-over" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const props = defineProps({
  routes: Array,
});
</script>

<style lang="scss" scoped></style>
