<template>
  <li class="flex flex-col items-center justify-center min-h-10 rounded-md transition-all w-full whitespace-nowrap overflow-hidden hover:bg-bunker-100">
    <div @click="toggleSubMenu()" class="flex items-center justify-between p-3 w-full rounded-t-[inherit]" :class="{ 'bg-bunker-100': checkIfFullPathIncludesRouteAddress }">
      <RouterLink
        class="block font-body text-bunker-700 text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis transition-all"
        :class="checkIfFullPathIncludesRouteAddress ? 'font-bold text-matisse-900' : 'font-normal hover:font-semibold'"
        :to="props.to"
      >
        <slot />
      </RouterLink>
      <ChevronDown
        v-if="$slots.children"
        class="size-4 stroke-bunker-400 transition-all"
        :class="{ 'stroke-matisse-900 ': checkIfFullPathIncludesRouteAddress, '-rotate-180': showSubMenu }"
      />
    </div>

    <div v-if="checkIfFullPathIncludesRouteAddress" class="bg-bunker-50 rounded-b-[inherit] w-full transition-all" :class="showSubMenuClass">
      <ul v-if="$slots.children" class="flex flex-col items-start justify-center p-2 gap-0">
        <slot name="children" />
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";

const showSubMenu = ref(false);

const route = useRoute();
const props = defineProps({
  to: { type: String, required: true },
});

const checkIfFullPathIncludesRouteAddress = computed(() => {
  return route.fullPath.includes(props.to);
});

const showSubMenuClass = computed(() => {
  if (showSubMenu.value) {
    return ["h-auto", "visible", "opacity-100"];
  }
  return ["h-0", "invisible", "opacity-0"];
});

function toggleSubMenu() {
  showSubMenu.value = !showSubMenu.value;
}

onMounted(() => {
  showSubMenu.value = checkIfFullPathIncludesRouteAddress;
});
</script>

<style scoped></style>
