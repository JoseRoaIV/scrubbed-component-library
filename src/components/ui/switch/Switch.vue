<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(["value"]);
const model = defineModel();

const switchToggle = ref(null);
const knob = ref(null);

function emitModalValue() {
  if (switchToggle.value.dataset.state === "checked") {
    switchToggle.value.dataset.state = "unchecked";
    knob.value.dataset.state = "unchecked";

    if (props.value) {
      model.value = "";
    } else {
      model.value = false;
    }
  } else {
    switchToggle.value.dataset.state = "checked";
    knob.value.dataset.state = "checked";

    if (props.value) {
      model.value = props.value;
    } else {
      model.value = true;
    }
  }
}

onMounted(() => {
  if (switchToggle.value && model.value == props.value) {
    switchToggle.value.dataset.state = "checked";
    knob.value.dataset.state = "checked";
  }
});
</script>

<template>
  <button
    v-bind="$attrs"
    @click="emitModalValue()"
    class="peer border-2 cursor-pointer inline-flex items-center h-6 w-11 rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-dark-teal data-[state=checked]:border-dark-teal data-[state=unchecked]:bg-secondary data-[state=unchecked]:border-secondary"
    data-state="unchecked"
    :value="props.value"
    ref="switchToggle"
    role="switch"
  >
    <span class="bg-white rounded-full size-5 pointer-events-none transition-all shadow data-[state=checked]:translate-x-full" data-state="unchecked" ref="knob"></span>
  </button>
</template>

<style scoped></style>
