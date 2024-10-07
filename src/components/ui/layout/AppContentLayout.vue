<template>
  <section>
    <div class="flex flex-col md:grid md:grid-cols-[223px_minmax(0,1fr)]" :class="!isSidebarPinned ? 'md:grid-cols-[223px_minmax(0,1fr)]' : 'md:grid-cols-[auto,1fr]'">
      <div class="hidden relative md:flex">
        <slot name="sidebar"> </slot>
        <div class="absolute bg-white flex items-center justify-center size-8 -right-4 top-1/2 p-1 shadow-lg z-50 rounded-full">
          <button
            @click="handleSidebarPinning()"
            class="group bg-danube-500/20 flex items-center justify-center rounded-[inherit] w-full h-full transition-colors hover:bg-danube-500/40"
          >
            <ChevronLeft class="size-4 stroke-danube-600" />
          </button>
        </div>
      </div>

      <main class="relative top-16 flex flex-col items-start justify-center gap-4 p-4 md:p-9">
        <slot name="main"> </slot>
      </main>
    </div>
  </section>
</template>

<script setup>
import { ChevronLeft, Pin } from "lucide-vue-next";
import { ref } from "vue";

const isSidebarPinned = ref(false);

function handleSidebarPinning() {
  if (!isSidebarPinned.value) {
    const routeLink = document.querySelectorAll(".route-link");
    const routeArrow = document.querySelector(".route-arrow");
    routeLink.forEach((route) => route.classList.add("hidden"));
    routeArrow.classList.add("hidden");
    isSidebarPinned.value = true;
  } else {
    isSidebarPinned.value = false;
  }
}
</script>

<style scoped></style>
