<template>
  <div v-if="$slots.contentHeader" class="flex flex-col items-start justify-center gap-4 w-full">
    <slot name="contentHeader"></slot>
  </div>
  <div :class="{ 'py-6 w-full': $slots.contentHeader }">
    <slot name="content"> </slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
