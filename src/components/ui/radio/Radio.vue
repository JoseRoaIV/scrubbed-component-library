<template>
  <input v-bind="$attrs" v-model="model" type="radio" class="peer" :name="props.name" :id="props.id" :value="props.value" hidden ref="radioRef" />
  <button
    @click="radioRef.click()"
    type="button"
    class="rounded-full shrink-0 size-4 flex items-center justify-center p-[2px] transition-all peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
    role="radio"
    :class="radioCheckBgColor"
  >
    <div class="bg-matisse-900 rounded-full opacity-0 size-0" :class="{ 'transition-all opacity-100 size-full duration-200': radioCheck }"></div>
  </button>
</template>

<script setup>
import { computed, ref } from "vue";

const radioRef = ref(null);
const model = defineModel();
const props = defineProps({
  name: String,
  id: String,
  value: String,
});

const radioCheck = computed(() => {
  const isChecked = radioRef.value && model.value && model.value.includes(radioRef.value.value);

  return isChecked;
});

const radioCheckBgColor = computed(() => {
  const isChecked = radioRef.value && model.value && model.value.includes(radioRef.value.value);

  return isChecked ? ["border-[1px]", "border-matisse-900"] : ["border-[1px]", "border-woodsmoke-100", "bg-white"];
});
</script>

<style scoped></style>
