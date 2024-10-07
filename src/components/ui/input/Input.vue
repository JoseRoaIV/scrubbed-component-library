<template>
  <input
    @blur="blur = true"
    v-bind="$attrs"
    v-model="model"
    type="text"
    class="peer bg-white rounded-md px-3 py-2 h-10 appearance-none font-body font-medium text-xs text-bunker-950 placeholder:text-bunker-400 focus:outline-none border-[1px] border-bunker-200 focus:ring-offset-2 focus:ring-2 focus:ring-matisse-900 file:ps-0 file:border-transparent file:bg-transparent file:font-bold file:text-matisse-900 file:hover:transition-all file:rounded file:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:invalid:ring-red-orange-500"
    ref="input"
    :class="invalidStates"
  />
</template>

<script setup>
import { computed, ref } from "vue";

const model = defineModel();
const input = ref(null);
const blur = ref(false);

const invalidStates = computed(() => {
  if (input.value && input.value.required && blur.value) {
    return ["invalid:ring-red-orange-500", "invalid:text-red-orange-600 ", "invalid:ring-1"];
  }
});
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
}

input[type="date"] {
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1QjYxNkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1kYXlzIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PHBhdGggZD0iTTggMTRoLjAxIi8+PHBhdGggZD0iTTEyIDE0aC4wMSIvPjxwYXRoIGQ9Ik0xNiAxNGguMDEiLz48cGF0aCBkPSJNOCAxOGguMDEiLz48cGF0aCBkPSJNMTIgMThoLjAxIi8+PHBhdGggZD0iTTE2IDE4aC4wMSIvPjwvc3ZnPg==")
    #ffffff no-repeat right 12px center/16px;
}
</style>
