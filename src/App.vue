<template>
  <AppMainLayout>
    <template #header>
      <AppHeader :routes="pages" />
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

const pages = [
  { to: "/timer", name: "TIMER" },
  { to: "/", name: "TICKETS" },
  { to: "/", name: "RESERVATION" },
];
</script>

<style scoped></style>
