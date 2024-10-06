<template>
  <div class="fixed flex flex-col items-center justify-start gap-6 px-4 py-8 w-[223px] h-full overflow-y-auto bg-white z-40 top-16 transition-all">
    <slot> </slot>
  </div>
</template>

<script setup></script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  transition: width 0.3ms ease-in-out;
}

:hover::-webkit-scrollbar {
  width: 4px;
}
</style>
