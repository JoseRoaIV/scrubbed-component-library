<template>
  <li class="group flex flex-col items-center justify-center min-h-10 rounded-md transition-all w-full whitespace-nowrap overflow-hidden">
    <div
      @click="toggleSubMenu()"
      class="flex items-center justify-between p-3 w-full rounded-t-[inherit] min-h-11 whitespace-nowrap overflow-hidden cursor-pointer"
      :class="checkIfCurrentPathIsRouteAddress || isSubMenuActive ? 'bg-bunker-100' : 'hover:bg-bunker-50'"
    >
      <span v-if="props.to">
        <RouterLink
          v-if="isInternalLink"
          class="flex items-center justify-start gap-3 text-sm w-full transition-all stroke-bunker-500 group-hover:text-matisse-900 [&.router-link-active]:text-matisse-900 [&.router-link-active]:font-bold"
          :class="isSubMenuActive ? 'text-matisse-900 font-bold' : 'text-bunker-500 '"
          :to="props.to"
        >
          <slot />
        </RouterLink>
        <a
          v-else
          class="flex items-center justify-start gap-3 text-sm w-full transition-all stroke-bunker-500 group-hover:text-matisse-900"
          :class="isSubMenuActive ? 'text-matisse-900 font-bold' : 'text-bunker-500 '"
          :href="props.to"
        >
          <slot />
        </a>
      </span>

      <span
        v-else
        class="flex items-center justify-start gap-3 text-sm w-full transition-all stroke-bunker-500 group-hover:text-matisse-900"
        :class="isSubMenuActive ? 'text-matisse-900 font-bold' : 'text-bunker-500 '"
      >
        <slot />
      </span>

      <ChevronDown
        v-if="$slots.children"
        class="size-4 stroke-bunker-400 transition-all route-arrow"
        :class="{ 'stroke-matisse-900 ': isSubMenuActive, '-rotate-180': isSubMenuActive }"
      />
    </div>

    <div
      :class="[
        'submenu rounded-b-[inherit] w-full transition-all',
        { 'active bg-bunker-50': isSubMenuActive },
        '[&.active]:h-auto [&.active]:visible [&.active]:opacity-100 h-0 invisible opacity-0',
      ]"
    >
      <ul v-if="$slots.children" class="flex flex-col items-start justify-center p-2 gap-0">
        <slot name="children" />
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

const route = useRoute();
const props = defineProps({
  to: { type: String },
});

const isSubMenuActive = ref(false);
const isInternalLink = props.to ? props.to.startsWith("/") : false;

const checkIfCurrentPathIsRouteAddress = computed(() => {
  return route.path.includes(props.to);
});

function toggleSubMenu() {
  isSubMenuActive.value = !isSubMenuActive.value;
}

watch(
  () => route.path,
  (newPath) => {
    isSubMenuActive.value = newPath.includes(props.to);
  },
  { immediate: true }
);
</script>

<style scoped></style>
