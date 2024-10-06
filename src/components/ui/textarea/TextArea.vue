<template>
  <textarea
    v-bind="$attrs"
    v-model="model"
    cols="30"
    rows="10"
    placeholder="Type your message here..."
    class="bg-white px-3 py-2 ring-1 ring-woodsmoke-100 font-body font-medium text-xs rounded-md w-full transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-matisse-900"
    :name="props.name"
    :id="props.id"
  />
</template>

<script setup>
const model = defineModel();
const props = defineProps({
  name: String,
  id: String,
});
</script>

<style scoped></style>
