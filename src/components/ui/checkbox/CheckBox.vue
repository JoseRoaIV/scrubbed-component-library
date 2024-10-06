<template>
  <input v-bind="$attrs" v-model="model" type="checkbox" class="peer" :name="props.name" :id="props.id" hidden ref="checkbox" />
  <button
    @click="checkbox.click()"
    type="button"
    class="flex flex-col items-center justify-center size-4 shrink-0 rounded transition-all peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
    role="checkbox"
    :class="checkboxBgColor"
  >
    <Check v-if="checkboxCheck" class="size-4 stroke-white" />
  </button>
</template>

<script setup>
import { Check } from "lucide-vue-next";
import { ref, computed } from "vue";

const checkbox = ref(null);
const model = defineModel();
const props = defineProps({
  name: { type: String },
  id: { type: String },
});

const checkboxBgColor = computed(() => {
  const isChecked = checkbox.value && ((Array.isArray(model.value) && model.value.includes(checkbox.value.value)) || (!Array.isArray(model.value) && model.value));

  return isChecked ? ["bg-matisse-900", "border-[1px]", "border-matisse-900"] : ["border-[1px]", "border-woodsmoke-100", "bg-white"];
});

const checkboxCheck = computed(() => {
  const isChecked = checkbox.value && ((Array.isArray(model.value) && model.value.includes(checkbox.value.value)) || (!Array.isArray(model.value) && model.value));

  return isChecked;
});
</script>

<style scoped></style>
