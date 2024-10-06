<template>
  <div v-bind="$attrs" class="flex flex-col items-center justify-center font-body font-medium text-bunker-950 text-xs rounded-full size-10 bg-woodsmoke-200">
    <slot name="image"></slot>
    <slot name="fallback">CN</slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
