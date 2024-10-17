<template>
  <div
    @mouseleave="handelMouseleave"
    class="sidebar fixed h-[calc(100dvh-4rem)] transition-all z-50"
    :class="isSidebarPinned ? 'pinned w-[223px] ' : 'max-w-[72px] min-w-[72px] hover:w-[223px]'"
    ref="sidebarContainerRef"
  >
    <div
      @mouseover="handleMouseover"
      class="flex flex-col items-center justify-start gap-6 px-4 py-8 overflow-y-auto overflow-x-hidden bg-white h-full transition-all shadow-lg"
      ref="sidebarRef"
    >
      <slot> </slot>
    </div>
    <div class="absolute bg-white flex items-center justify-center size-8 -right-4 top-1/2 p-1 shadow-lg z-50 rounded-full">
      <button @click="handleSidebarPinning()" class="group flex items-center justify-center rounded-[inherit] w-full h-full transition-colors hover:bg-danube-500/20">
        <ChevronLeft class="size-4 stroke-danube-600 transition-all" :class="isSidebarPinned ? 'rotate-0' : '-rotate-180'" />
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
  const routeArrow = document.querySelectorAll(".route-arrow");
  const submenu = document.querySelectorAll(".submenu");
  const main = document.querySelector("main");

  if (isSidebarPinned.value) {
    routeArrow.forEach((arrow) => arrow.classList.add("hidden"));
    main.classList.toggle("md:pl-[259px]");
    main.classList.toggle("md:pl-[108px]");

    isSidebarPinned.value = false;

    submenu.forEach((menu) => {
      if (menu.classList.contains("active")) {
        menu.classList.add("hidden");
      }
    });
  } else {
    routeArrow.forEach((arrow) => arrow.classList.remove("hidden"));
    main.classList.toggle("md:pl-[108px]");
    main.classList.toggle("md:pl-[259px]");
    isSidebarPinned.value = true;

    submenu.forEach((menu) => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("hidden");
      }
    });
  }
}

function handleMouseover() {
  const routeArrow = document.querySelectorAll(".route-arrow");
  const submenu = document.querySelectorAll(".submenu");

  if (!isSidebarPinned.value) {
    sidebarContainerRef.value.classList.remove("hover:max-w-[223px]");
    sidebarContainerRef.value.classList.add("hover:max-w-[223px]");
    sidebarContainerRef.value.classList.toggle("pinned");
    routeArrow.forEach((arrow) => arrow.classList.remove("hidden"));

    submenu.forEach((menu) => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("hidden");
      }
    });
  }
}

function handelMouseleave() {
  const routeArrow = document.querySelectorAll(".route-arrow");
  const submenu = document.querySelectorAll(".submenu");

  if (!isSidebarPinned.value) {
    sidebarContainerRef.value.classList.add("max-w-[72px]", "min-w-[72px]", "hover:max-w-[223px]");
    sidebarContainerRef.value.classList.remove("pinned");
    routeArrow.forEach((arrow) => arrow.classList.add("hidden"));

    submenu.forEach((menu) => {
      if (menu.classList.contains("active")) {
        menu.classList.add("hidden");
      }
    });
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
