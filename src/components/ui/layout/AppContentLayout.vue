<template>
  <div class="flex mt-16">
    <div class="hidden md:flex">
      <slot name="sidebar"> </slot>
    </div>

    <main class="flex flex-col items-start justify-center gap-4 p-4 ml-0 flex-auto md:pl-[259px] md:p-9">
      <slot name="main"> </slot>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
