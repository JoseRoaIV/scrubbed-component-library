<template>
  <AppContentLayout>
    <template #sidebar>
      <AppSidebar>
        <AppSidebarList>
          <AppSidebarItem v-for="(route, index) in sidebarRoutes" :key="index" :to="route.to">
            <span v-if="route.icon"> <component :is="route.icon" class="size-4 [&.router-link-active]:stroke-matisse-900"></component> </span>
            <span class="route-link min-w-0 overflow-hidden whitespace-nowrap text-ellipsis"> {{ route.name }} </span>

            <template v-if="route.children" #children>
              <AppSidebarSubItem v-for="(child, index) in route.children" :key="index" :to="child.to">
                {{ child.name }}
              </AppSidebarSubItem>
            </template>
          </AppSidebarItem>
        </AppSidebarList>
      </AppSidebar>
    </template>

    <template #main>
      <AppContentInnerLayout>
        <template #contentHeader>
          <Breadcrumb>
            <BreadcrumbItem to="p2">Timetracker</BreadcrumbItem>
            <BreadcrumbArrow />
            <BreadcrumbItem to="/pp">Workstation Reservation</BreadcrumbItem>
            <BreadcrumbArrow />
            <BreadcrumbItem to="/">Scrubbed Collaboration Space</BreadcrumbItem>
          </Breadcrumb>
          <h1 class="font-body font-bold text-matisse-900 text-4xl">Reserved Today</h1>
          <Tabs>
            <TabsList>
              <TabsItem to="/timer">Workstation A</TabsItem>
              <TabsItem to="wb">Workstation B</TabsItem>
              <TabsItem to="wc">Workstation C</TabsItem>
              <TabsItem to="wd">Workstation D</TabsItem>
              <TabsItem to="we">Workstation E</TabsItem>
              <TabsItem to="/">Workstation A</TabsItem>
              <TabsItem to="wb">Workstation B</TabsItem>
              <TabsItem to="wc">Workstation C</TabsItem>
            </TabsList>
          </Tabs>
        </template>
        <template #content>
          <Card class="w-full overflow-auto">
            <table class="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Work Group</th>
                  <th>Sharing</th>
                  <th>Last Updated</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 10">
                  <td class="w-[calc(100%/4)]">
                    <strong class="font-body text-bunker-950 text-xs">Main Report</strong>
                    <p class="font-body font-medium text-bunker-600 text-xs">Bio Technology</p>
                  </td>
                  <td class="w-[calc(100%/4)]">Bio Technology (Old WS)</td>
                  <td class="w-[calc(100%/4)]">Shared</td>
                  <td class="w-[calc(100%/4)]">August 11, 2023</td>
                  <td>
                    <div class="flex items-center justify-end gap-2">
                      <IconButton>
                        <IconDelete class="stroke-white size-4" />
                      </IconButton>
                      <IconButton variant="secondary">
                        <IconDelete class="stroke-bunker-950 size-4" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </template>
      </AppContentInnerLayout>
    </template>
  </AppContentLayout>
</template>

<script setup>
import { AppContentLayout, AppContentInnerLayout } from "../components/ui/layout";
import { Tabs, TabsList, TabsItem } from "../components/ui/content";
import { AppSidebar, AppSidebarList, AppSidebarItem, AppSidebarSubItem } from "../components/ui/sidebar";
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Timer, Notebook, TimerReset, Moon, Settings } from "lucide-vue-next";
import { IconButton } from "../components/ui/button";
import { IconDelete } from "../components/ui/icons";
import { Card } from "../components/ui/card";

const sidebarRoutes = [
  {
    to: "/timer",
    name: "Timetracker",
    icon: Timer,
    children: [
      {
        to: "/hris",
        name: "Workstation A",
      },
      {
        to: "/hris",
        name: "Workstation B",
      },
      {
        to: "/hris",
        name: "Workstation C",
      },
      {
        to: "/hris",
        name: "Workstation D",
      },
    ],
  },
  {
    name: "Timetrack Review",
    icon: Notebook,
    children: [
      {
        to: "/hris1",
        name: "Workstation A",
      },
      {
        to: "/hris",
        name: "Workstation B",
      },
      {
        to: "/hris",
        name: "Workstation C",
      },
      {
        to: "/hris",
        name: "Workstation D",
      },
    ],
  },
  { to: "/hris", name: "Timetrack Duration", icon: TimerReset },
  { to: "/hris", name: "Overtime & Night Shift Filing", icon: Moon },
  { to: "/hris", name: "Settings", icon: Settings },
];

const sidebarRoutes2 = [
  {
    to: "/timer2",
    name: "Timetracker",
    icon: Timer,
    children: [
      {
        to: "/hris1",
        name: "Workstation A",
      },
      {
        to: "/hris",
        name: "Workstation B",
      },
      {
        to: "/hris",
        name: "Workstation C",
      },
      {
        to: "/hris",
        name: "Workstation D",
      },
    ],
  },
  { to: "/hris", name: "Timetrack Review", icon: Notebook },
  { to: "/hris", name: "Timetrack Duration", icon: TimerReset },
  { to: "/hris", name: "Overtime & Night Shift Filing", icon: Moon },
  { to: "/hris", name: "Settings", icon: Settings },
];
</script>

<style scoped></style>
