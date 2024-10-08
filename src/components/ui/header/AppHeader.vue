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
        <div class="relative flex flex-col items-end justify-center">
          <div @click="toggleUserMenu()" class="rounded-full size-8" ref="userMenuRef">
            <img src="https://community.scrubbed.net/uploads/image_237270_.png" alt="Jose" class="rounded-[inherit] object-cover cursor-pointer" />
          </div>
          <Transition name="fade">
            <div v-if="isUserMenuActive" class="absolute bg-white p-1 pt-0 top-10 rounded-md w-52 shadow-lg z-50 ring-1 ring-bunker-100 transition-all duration-150 ease-out">
              <div class="p-2">
                <strong class="text-matisse-900 text-sm">Jose Vincent Roa</strong>
                <p class="text-bunker-500 text-xs">Staff</p>
              </div>
              <hr />
              <ul class="flex flex-col items-start justify-center w-full">
                <li @click="console.log('clicked')" class="p-2 mt-1 text-sm w-full rounded-md cursor-pointer text-bunker-950 hover:bg-woodsmoke-50 hover:transition-all">Profile Settings</li>
                <li class="p-2 text-sm w-full rounded-md cursor-pointer text-bunker-950 hover:bg-woodsmoke-50 hover:transition-all">Manage Users</li>
                <li class="p-2 mb-1 text-sm w-full rounded-md cursor-pointer text-bunker-950 hover:bg-woodsmoke-50 hover:transition-all">Settings</li>
                <hr class="w-full" />
                <li class="p-2 mt-1 text-sm w-full rounded-md cursor-pointer text-bunker-950 hover:bg-woodsmoke-50 hover:transition-all">Logout</li>
              </ul>
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
