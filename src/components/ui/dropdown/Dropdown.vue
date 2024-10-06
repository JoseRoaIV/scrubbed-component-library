<template>
  <Popover v-bind="$attrs">
    <template #trigger>
      <div class="bg-white flex items-center justify-between px-3 py-2 rounded-md ring-1 h-10 ring-bunker-200 transition-all hover:bg-woodsmoke-100 hover:cursor-pointer">
        <p class="font-body text-xs select-none" :class="valueTextClass">{{ selectedItem ? selectedItem : props.placeholder }}</p>
        <IconChevronDown class="size-4 stroke-bunker-600" />
      </div>
    </template>
    <template #content>
      <div @click="selectItem">
        <slot> </slot>
      </div>
    </template>
  </Popover>
</template>

<script setup>
import { Popover } from "../popover";
import { IconChevronDown } from "../icons";
import { computed, ref } from "vue";

const selectedItem = ref(null);
const model = defineModel();
const props = defineProps({
  placeholder: String,
});

const valueTextClass = computed(() => {
  if (selectedItem.value) {
    return ["font-semibold", "text-bunker-950"];
  }
  return ["font-medium", "text-bunker-600"];
});

function selectItem(e) {
  selectedItem.value = e.target.textContent;
  model.value = e.target.value;
}
</script>

<style lang="scss" scoped></style>
