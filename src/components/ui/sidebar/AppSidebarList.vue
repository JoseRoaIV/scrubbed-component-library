<template>
  <nav class="w-full">
    <b v-if="$slots.title" class="font-body text-matisse-900 text-sm px-3">
      <slot name="title"></slot>
    </b>
    <ul class="flex flex-col items-center justify-center w-full gap-1">
      <slot></slot>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
