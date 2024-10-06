<template>
  <section>
    <div class="flex flex-col md:grid md:grid-cols-[223px_minmax(0,1fr)]">
      <div class="hidden md:flex">
        <slot name="sidebar"> </slot>
      </div>
      <main class="relative top-16 flex flex-col items-start justify-center gap-4 p-4 md:p-9">
        <slot name="main"> </slot>
      </main>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
