<template>
  <AppContentLayout>
    <template #sidebar>
      <AppSidebar>
        <AppSidebarList>
          <AppSidebarItem v-for="(route, index) in sidebarRoutes" :key="index" :to="route.to">{{ route.name }}</AppSidebarItem>
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
              <TabsItem to="/">Workstation A</TabsItem>
              <TabsItem to="wb">Workstation B</TabsItem>
              <TabsItem to="wc">Workstation C</TabsItem>
              <TabsItem to="wd">Workstation D</TabsItem>
              <TabsItem to="we">Workstation E</TabsItem>
            </TabsList>
          </Tabs>
        </template>
        <template #content>
          <div class="flex flex-col items-start justify-center gap-14">
            <div class="flex flex-col items-center justify-center gap-4">
              <Button>Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button :loading="true">Loading</Button>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outlined">Outlined</Badge>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
              <Alert>
                <template #title>Alert</template>
                <template #message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
              </Alert>
              <Alert type="success">
                <template #title>Success</template>
                <template #message> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </template>
              </Alert>
              <Alert type="error">
                <template #title>Error</template>
                <template #message> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </template>
              </Alert>
              <Alert type="info">
                <template #title>Info</template>
                <template #message> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </template>
              </Alert>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
              <Button @click="isDialogActive = true">Alert Dialog</Button>
            </div>
            <div class="flex flex-col items-start justify-center gap-2">
              <div class="flex items-center justify-center gap-2">
                <CheckBox id="checkbox" value="1" v-model="checkBoxVal" />
                <Label for="checkbox">Apple</Label>
              </div>
              <!-- <div class="flex items-center justify-center gap-2">
                <CheckBox id="checkbox2" value="Banana" v-model="checkBoxVal" />
                <Label for="checkbox2">Banana</Label>
              </div>
              <div class="flex items-center justify-center gap-2">
                <CheckBox id="checkbox3" value="Mango" v-model="checkBoxVal" disabled />
                <Label for="checkbox3">Mango</Label>
              </div> -->
              {{ checkBoxVal }}
            </div>

            <div class="flex flex-col items-start justify-center gap-2">
              <Label for="icon">Search</Label>
              <Input id="icon" class="w-72" placeholder="Search" variant="icon">
                <template #icon>
                  <IconFormatBold />
                </template>
              </Input>
            </div>
            <form @submit.prevent="submit()">
              <div class="flex flex-col items-start justify-center gap-6">
                <div class="flex flex-col items-start justify-center gap-2">
                  <Label for="input">Username</Label>
                  <Input id="input" class="w-72" placeholder="Enter your username" required />
                </div>
                <div class="flex flex-col items-start justify-center gap-2">
                  <Label for="input">Email</Label>
                  <Input id="input" type="email" class="w-72" placeholder="Enter your username" required />
                </div>
                <div class="flex flex-col items-start justify-center gap-2">
                  <Label for="Date">Date</Label>
                  <Input type="date" id="date" class="w-72" placeholder="Pick a date" required />
                </div>

                <div class="flex flex-col items-start justify-center gap-2">
                  <Label for="input">Cover Photo</Label>
                  <Input type="file" id="input" class="w-72" placeholder="Enter your username" @change="fileInput" />
                  {{ file }}
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>

            <div class="flex flex-col items-start justify-center gap-6">
              <div class="flex flex-col items-start justify-center gap-2">
                <Label for="input">Workspace</Label>
                <Dropdown v-slot="{ selectItem }" id="input" class="w-72" placeholder="Select Workspace" v-model="team">
                  <DropdownItems>
                    <DropdownItem @click="selectItem" v-for="(item, index) in items" :key="index" :value="item.value" :data-name="item.name">{{ item.name }}</DropdownItem>
                  </DropdownItems>
                </Dropdown>
              </div>
              {{ team }}
            </div>

            <div class="flex flex-col items-start justify-center gap-2">
              <div class="flex items-center justify-center gap-2">
                <Radio id="radio" name="true" value="True" v-model="radioVal" />
                <Label for="radio">True</Label>
              </div>
              <div class="flex items-center justify-center gap-2">
                <Radio id="radio1" name="false" value="False" v-model="radioVal" />
                <Label for="radio1">False</Label>
              </div>
              <div class="flex items-center justify-center gap-2">
                <Radio id="radio2" name="disabled" v-model="radioVal" disabled />
                <Label for="radio2">Disabled</Label>
              </div>
            </div>
            {{ radioVal }}

            <TextArea />

            <ToggleGroup>
              <Toggle :active="true">
                <IconFormatBold class="size-4 stroke-bunker-950" />
              </Toggle>
              <Toggle>
                <IconFormatItalic class="size-4 stroke-bunker-950" />
              </Toggle>
              <Toggle disabled>
                <IconFormatUnderline class="size-4 stroke-bunker-950" />
              </Toggle>
            </ToggleGroup>

            <Select class="w-72" v-model="selectTeamVal">
              <SelectItem value="" selected disabled>Select Workspace</SelectItem>
              <SelectItem value="117">Technology</SelectItem>
              <SelectItem value="123">Human Resource</SelectItem>
            </Select>

            <Card>
              <Table :columns="columns" :rows="data">
                <template #Column1="{ column }">
                  <Button variant="ghost"
                    ><p class="font-medium">{{ column.label }}</p></Button
                  >
                </template>
                <template #col1="{ row }">
                  <div class="flex flex-col">
                    <strong class="text-lg text-matisse-900">
                      {{ row.col1 }}
                    </strong>
                    <p class="text-xs text-woodsmoke-300">{{ row.col1 }}</p>
                  </div>
                </template>
                <template #actions="{ row }">
                  <button @click="console.log(row)">Test</button>
                </template>
              </Table>
            </Card>
          </div>
        </template>
      </AppContentInnerLayout>

      <Transition name="fade">
        <DialogBackground v-if="isDialogActive">
          <AlertDialog>
            <template #title> Alert Dialog </template>
            <template #message> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </template>
            <template #actions>
              <Button @click="isDialogActive = false" variant="secondary">Close</Button>
              <Button>Accept</Button>
            </template>
          </AlertDialog>
        </DialogBackground>
      </Transition>
    </template>
  </AppContentLayout>
</template>

<script setup>
import { Card } from "../components/ui";
import { AppContentInnerLayout, AppContentLayout } from "../components/ui/layout";
import { AppSidebar, AppSidebarList, AppSidebarItem } from "../components/ui/sidebar";
import { Alert } from "../components/ui/alerts";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badges";
import { AlertDialog, DialogBackground } from "../components/ui/dialog";
import { CheckBox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Dropdown, DropdownItems, DropdownItem } from "../components/ui/dropdown";
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Tabs, TabsList, TabsItem } from "../components/ui/content";
import { Radio } from "../components/ui/radio";
import { TextArea } from "../components/ui/textarea";
import { Toggle, ToggleGroup } from "../components/ui/toggle";
import { IconFormatBold, IconFormatItalic, IconFormatUnderline } from "../components/ui/icons";
import { ref } from "vue";
import { Select, SelectItem } from "../components/ui/select";
import { Table } from "../components/ui/table";

const sidebarRoutes = [
  { to: "/", name: "HRIS" },
  { to: "/hris", name: "Directory" },
  { to: "/hris", name: "Organizational Chart" },
  { to: "/hris", name: "Map" },
  { to: "/hris", name: "Survey" },
  { to: "/hris", name: "Foresight" },
  { to: "/hris", name: "Strategy Book" },
  { to: "/hris", name: "Learning Hub" },
];

const columns = [
  {
    label: "Column 1",
    key: "col1",
  },
  {
    label: "Column 2",
    key: "col2",
  },
  {
    label: "Column 3",
    key: "col3",
  },
];

function submit() {
  console.log("Submitted");
}

const data = [
  {
    col1: "Test Column 1",
    col2: "Test Column 2",
    col3: "Test Column 3",
  },
  {
    col1: "Test Column 4",
    col2: "Test Column 5",
    col3: "Test Column 6",
  },
];

const isDialogActive = ref(false);
const checkBoxVal = ref();
const file = ref(null);
const team = ref(117);
const radioVal = ref(null);
const selectTeamVal = ref("");

const items = [
  { value: 117, name: "Technology" },
  { value: 123, name: "Human Resource" },
  { value: 124, name: "Finance" },
  { value: 125, name: "Marketing" },
];

function fileInput(e) {
  file.value = e.target.files[0];
}
</script>

<style lang="scss" scoped></style>
