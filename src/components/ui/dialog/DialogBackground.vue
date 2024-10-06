<template>
  <div class="fixed inset-0 bg-black/80 pointer-events-auto min-h-screen backdrop-blur-[2px] z-[100]">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.querySelector("body").classList.add("overflow-hidden");
});

onUnmounted(() => {
  document.querySelector("body").classList.remove("overflow-hidden");
});
</script>

<style scoped></style>
