<template>
  <div class="flex flex-col md:flex-row mt-16">
    <div class="hidden lg:flex">
      <slot name="sidebar"> </slot>
    </div>

    <main class="flex flex-col items-start justify-center gap-4 p-4 ml-0 flex-auto md:pl-[259px] md:p-9">
      <slot name="main"> </slot>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
