<template>
  <select
    v-bind="$attrs"
    v-model="model"
    class="appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YjYxNmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-white bg-no-repeat bg-[length:16px] bg-[right_12px_center] px-3 py-2 rounded-md h-10 font-body font-medium text-xs ring-1 ring-bunker-200 transition-all outline-none focus:bg-white focus:text-bunker-950 hover:bg-woodsmoke-100 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
    :class="placeholderStyling"
  >
    <slot></slot>
  </select>
</template>

<script setup>
import { computed } from "vue";

const model = defineModel();

const placeholderStyling = computed(() => {
  const isModelNotEmpty = model.value && model.value != "";

  return isModelNotEmpty ? "text-bunker-950" : "text-bunker-400";
});
</script>

<style scoped></style>
