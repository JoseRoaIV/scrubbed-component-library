<template>
  <div v-bind="$attrs" class="hidden popover-content absolute top-12 bg-white ring-1 ring-bunker-200 rounded-md p-1 w-full shadow-lg z-[200]" data-content-open="close">
    <slot> </slot>
  </div>
</template>

<script setup></script>

<style scoped></style>
