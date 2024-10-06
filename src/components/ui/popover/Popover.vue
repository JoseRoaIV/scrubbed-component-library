<template>
  <div v-bind="$attrs" class="relative flex flex-col">
    <div @click="handleTriggerClick">
      <slot name="trigger"></slot>
    </div>

    <Transition name="dropdown-fade">
      <div v-if="menuOpen" class="popover-content absolute top-12 bg-white ring-1 ring-bunker-200 rounded-md p-1 w-full shadow-lg z-[200]" ref="content">
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const menuOpen = ref(false);
const content = ref(null);

function handleTriggerClick() {
  menuOpen.value = !menuOpen.value;
}

function handleClickOutsidePopover(event) {
  if (event.target.contains(content.value)) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsidePopover);
});
</script>

<style lang="scss" scoped></style>
