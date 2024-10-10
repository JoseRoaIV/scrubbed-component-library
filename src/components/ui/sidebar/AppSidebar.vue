<template>
  <div @mouseleave="handelMouseleave" class="sidebar fixed h-full transition-all z-[200]" :class="isSidebarPinned ? 'w-[223px]' : 'w-auto'" ref="sidebarContainerRef">
    <div @mouseover="handleMouseover" class="flex flex-col items-center justify-start gap-6 px-4 py-8 overflow-y-auto bg-white h-full transition-all shadow-lg" ref="sidebarRef">
      <slot> </slot>
    </div>
    <div class="absolute bg-white flex items-center justify-center size-8 -right-4 top-1/2 p-1 shadow-lg z-50 rounded-full">
      <button
        @click="handleSidebarPinning()"
        class="group bg-danube-500/20 flex items-center justify-center rounded-[inherit] w-full h-full transition-colors hover:bg-danube-500/40"
      >
        <ChevronLeft class="size-4 stroke-danube-600 transition-all" :class="isSidebarPinned ? 'rotate-0' : 'rotate-180'" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft } from "lucide-vue-next";
import { ref } from "vue";

const sidebarContainerRef = ref(null);
const sidebarRef = ref(null);
const isSidebarPinned = ref(true);

function handleSidebarPinning() {
  const routeLink = document.querySelectorAll(".route-link");
  const routeArrow = document.querySelector(".route-arrow");

  if (isSidebarPinned.value) {
    routeLink.forEach((route) => route.classList.add("hidden"));
    routeArrow.classList.add("hidden");
    document.querySelector("main").style.paddingLeft = "108px";
    isSidebarPinned.value = false;
  } else {
    routeLink.forEach((route) => route.classList.remove("hidden"));
    routeArrow.classList.remove("hidden");
    document.querySelector("main").style.paddingLeft = "259px";
    isSidebarPinned.value = true;
  }
}

function handleMouseover() {
  const routeLink = document.querySelectorAll(".route-link");
  const routeArrow = document.querySelector(".route-arrow");

  if (!isSidebarPinned.value) {
    sidebarContainerRef.value.classList.remove("w-auto");
    sidebarContainerRef.value.classList.add("w-[223px]");
    routeLink.forEach((route) => route.classList.remove("hidden"));
    routeArrow.classList.remove("hidden");
  }
}

function handelMouseleave() {
  const routeLink = document.querySelectorAll(".route-link");
  const routeArrow = document.querySelector(".route-arrow");

  if (!isSidebarPinned.value) {
    sidebarContainerRef.value.classList.remove("w-[223px]");
    sidebarContainerRef.value.classList.add("w-auto");
    routeLink.forEach((route) => route.classList.add("hidden"));
    routeArrow.classList.add("hidden");
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  transition: width 0.3ms ease-in-out;
}

:hover::-webkit-scrollbar {
  width: 4px;
}
</style>
