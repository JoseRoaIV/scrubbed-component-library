<script setup>
import { Input } from "scrubbed-component-library";
import { Search } from "lucide-vue-next";
import { computed, toRefs, ref, onMounted, watch, onUnmounted } from "vue";

const model = defineModel();
const props = defineProps({
  data: { required: true },
  dataKey: { type: String, required: true },
  name: { type: String, required: true },
  concat: { type: String },
  placeholder: { type: String },
});

const { data } = toRefs(props);
const search = ref("");
const selectedValue = ref(null);
const showList = ref(false);
const listRef = ref(null);

const dataList = computed(() => {
  return data.value.filter((val) => (val[props.name] + " " + val[props.concat]).toLowerCase().includes(search.value.toLowerCase()));
});

const inputLabelValue = computed(() => {
  if (selectedValue.value) {
    return props.concat ? `${selectedValue.value[props.name]} ${selectedValue.value[props.concat]}` : selectedValue.value[props.name];
  } else {
    return props.placeholder;
  }
});

function updateModalValue(val) {
  model.value = val[props.dataKey];
  selectedValue.value = val;
  showList.value = false;
}

function handleClickOutside(e) {
  if (listRef.value && !listRef.value.contains(e.target)) {
    showList.value = false;
  }
}

watch(model, () => (selectedValue.value = data.value.find((val) => val[props.dataKey] == model.value)), { immediate: true });

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div @click="showList = true" class="peer relative flex flex-col" ref="listRef">
    <div
      class="flex items-center justify-between w-full pl-3 pr-9 bg-white border-[1px] border-bunker-200 cursor-pointer py-2 rounded-md transition-all hover:bg-bunker-200 focus:ring-1 focus:ring-matisse-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed h-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YjYxNmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[length:16px] bg-[right_12px_center]"
    >
      <p class="font-medium text-bunker-950 text-xs">{{ inputLabelValue }}</p>
    </div>

    <div v-if="showList" class="absolute space-y-2 bg-white border-[1px] border-bunker-200 p-1 rounded-md top-12 w-full z-40 shadow-lg">
      <!-- Search Input -->
      <div class="relative flex items-center">
        <Input class="w-full pr-9 focus:!ring-0 focus:!ring-offset-0 h-auto" v-model="search" />
        <Search class="absolute stroke-bunker-700 size-4 right-4" />
      </div>

      <!-- Results -->
      <ul v-if="dataList.length > 0" class="max-h-40 overflow-y-auto">
        <li
          @click="updateModalValue(value)"
          v-for="(value, index) in dataList"
          :key="index"
          class="font-medium text-bunker-950 text-xs p-2 rounded transition-all cursor-pointer hover:bg-bunker-100"
        >
          {{ props.concat ? `${value[props.name]} ${value[props.concat]}` : value[props.name] }}
        </li>
      </ul>

      <p v-else class="font-medium text-bunker-950-950 text-xs p-2">No Match Found</p>
    </div>
  </div>
</template>

<style scoped></style>
