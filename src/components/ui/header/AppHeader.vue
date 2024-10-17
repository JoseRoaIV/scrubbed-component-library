<template>
  <div class="flex items-center justify-between px-6 h-16 bg-white shadow-sm">
    <div class="flex items-end justify-center gap-6">
      <div class="block md:hidden">
        <button>
          <Menu class="size-4" />
        </button>
      </div>
      <img src="/src/assets/scrubbed_logo_small.png" alt="Scrubbed Logo" class="" />
    </div>
    <div class="flex items-center justify-center">
      <div class="flex items-center gap-[14px] md:gap-10">
        <nav class="hidden items-center justify-center gap-6 md:flex">
          <slot name="headerLinks"></slot>
        </nav>
        <div v-if="$slots.headerActions" class="flex items-center justify-center gap-2">
          <slot name="headerActions"></slot>
        </div>
        <div v-if="$slots.headerUserProfile" class="relative flex flex-col items-end justify-center">
          <div @click="toggleUserMenu()" class="rounded-full size-8" ref="userMenuRef">
            <slot name="headerUserProfile"></slot>
          </div>
          <Transition name="fade">
            <div v-if="isUserMenuActive" class="absolute bg-white p-1 pt-0 top-10 rounded-md w-52 shadow-lg z-50 ring-1 ring-bunker-100 transition-all duration-150 ease-out">
              <slot name="headerUserActions"></slot>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu } from "lucide-vue-next";
import { onMounted, ref, onUnmounted } from "vue";

const userMenuRef = ref(null);
const isUserMenuActive = ref(false);

function toggleUserMenu() {
  isUserMenuActive.value = !isUserMenuActive.value;
}

function handleClickOutside(event) {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
    isUserMenuActive.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped></style>
