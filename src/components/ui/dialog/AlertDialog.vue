<template>
  <div class="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-lg z-[99] gap-[18px] rounded-lg p-6 shadow-lg">
    <div class="flex flex-col items-start justify-center gap-2">
      <h1 class="font-bold font-body text-base text-matisse-950">
        <slot name="title">Alert Dialog</slot>
      </h1>

      <p class="font-body font-medium text-bunker-700 text-xs">
        <slot name="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</slot>
      </p>
    </div>

    <div class="flex items-center justify-center self-end gap-2">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
