<template>
  <li
    class="flex flex-col items-center justify-center min-h-10 rounded-md transition-all w-full whitespace-nowrap overflow-hidden"
    :class="{ 'hover:bg-bunker-100': checkIfCurrentPathIsRouteAddress }"
  >
    <div @click="toggleSubMenu()" class="flex items-center justify-between p-3 w-full rounded-t-[inherit] min-h-11" :class="{ 'bg-bunker-100': checkIfCurrentPathIsRouteAddress }">
      <RouterLink
        class="flex items-center justify-start gap-3 font-body text-bunker-700 text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis transition-all stroke-bunker-500"
        :class="checkIfCurrentPathIsRouteAddress ? 'font-bold text-matisse-900' : 'font-normal hover:font-semibold'"
        :to="props.to"
      >
        <slot />
      </RouterLink>
      <ChevronDown
        v-if="$slots.children"
        class="size-4 stroke-bunker-400 transition-all route-arrow"
        :class="{ 'stroke-matisse-900 ': isSubMenuActive, '-rotate-180': isSubMenuActive }"
      />
    </div>

    <div v-if="isSubMenuActive" class="rounded-b-[inherit] w-full transition-all" :class="(showSubMenuClass, { 'bg-bunker-50': checkIfCurrentPathIsRouteAddress })">
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
  to: { type: String, required: true },
});

const isSubMenuActive = ref(false);

const checkIfCurrentPathIsRouteAddress = computed(() => {
  return route.path === props.to;
});

const showSubMenuClass = computed(() => {
  return isSubMenuActive.value ? ["h-auto", "visible", "opacity-100"] : ["h-0", "invisible", "opacity-0"];
});

function toggleSubMenu() {
  isSubMenuActive.value = !isSubMenuActive.value;
}

watch(
  () => route.path,
  (newPath) => {
    isSubMenuActive.value = newPath === props.to;
  },
  { immediate: true }
);
</script>

<style scoped></style>
