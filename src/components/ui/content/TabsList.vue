<template>
  <nav class="w-full flex items-center gap-2">
    <button
      v-if="listRefScrollWidth > listRefClientWidth"
      @click="scrollLeft"
      class="group bg-woodsmoke-50 rounded-full p-1 shadow-md relative -top-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!disableScroll"
    >
      <div class="bg-danube-500/20 rounded-[inherit] p-[2px] transition-all group-hover:bg-danube-500/40">
        <ChevronLeft class="stroke-bunker-600 size-4" />
      </div>
    </button>

    <ul class="bg-woodsmoke-100/40 rounded-lg flex items-center justify-start overflow-x-scroll relative p-1" ref="listRef">
      <slot></slot>
    </ul>

    <button
      v-if="listRefScrollWidth > listRefClientWidth"
      @click="scrollRight"
      class="group bg-woodsmoke-50 rounded-full p-1 shadow-md relative -top-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="disableScroll"
    >
      <div class="bg-danube-500/20 rounded-[inherit] p-[2px] transition-all group-hover:bg-danube-500/40">
        <ChevronRight class="stroke-bunker-600 size-4" />
      </div>
    </button>
  </nav>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref, onMounted, watchEffect, onUnmounted } from "vue";

const listRef = ref(null);
const listRefClientWidth = ref(0);
const listRefScrollLeft = ref(0);
const listRefScrollWidth = ref(0);
const disableScroll = ref(false);

let resizeObserver;

function scrollLeft() {
  listRef.value.scrollLeft -= 200;
}

function scrollRight() {
  listRef.value.scrollLeft += 200;
}

onMounted(() => {
  const listScrollBounds = () => {
    if (listRef.value) {
      listRefClientWidth.value = listRef.value.clientWidth;
      listRefScrollLeft.value = listRef.value.scrollLeft;
      listRefScrollWidth.value = listRef.value.scrollWidth;
    }
  };

  resizeObserver = new ResizeObserver(listScrollBounds);

  if (listRef.value) {
    resizeObserver.observe(listRef.value);
    listRef.value.addEventListener("scroll", listScrollBounds);
    listScrollBounds();
  }
});

onUnmounted(() => {
  if (listRef.value && resizeObserver) {
    resizeObserver.unobserve(listRef.value);
    listRef.value.removeEventListener("scroll", listScrollBounds);
  }
});

watchEffect(() => {
  if (listRef.value && listRefClientWidth.value + listRefScrollLeft.value > listRefScrollWidth.value) {
    disableScroll.value = true;
  } else {
    disableScroll.value = false;
  }
});
</script>

<style>
::-webkit-scrollbar {
  height: 0;
}

::-webkit-scrollbar-track {
  background: #e7e7e7;
}

::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  height: 2px;
  background: #929292;
}
</style>
