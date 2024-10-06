<template>
  <div class="tabs w-full border-b-[1px] border-bunker-200">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.tabs::-webkit-scrollbar {
  height: 0;
  transition: width 0.3ms ease-in-out;
}

.tabs:hover::-webkit-scrollbar {
  height: 4px;
}
</style>
