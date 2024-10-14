<template>
  <AppMainLayout>
    <template #header>
      <AppHeader>
        <template #headerLinks>
          <AppHeaderNavLink v-for="page in pages" :key="page.name" :to="page.to">{{ page.name }}</AppHeaderNavLink>
        </template>
      </AppHeader>
    </template>
    <template #content>
      <RouterView />
    </template>
  </AppMainLayout>
</template>

<script setup>
import { RouterView } from "vue-router";
import { AppMainLayout } from "./components/ui/layout";
import { AppHeader } from "./components/ui/header";
import AppHeaderNavLink from "./components/ui/header/AppHeaderNavLink.vue";

const pages = [
  { to: "https://community.scrubbed.net/Time", name: "TIMER" },
  { to: "/", name: "TICKETS" },
  { to: "/", name: "RESERVATION" },
];
</script>

<style scoped></style>
