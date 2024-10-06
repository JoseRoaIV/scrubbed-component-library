<template>
  <table>
    <thead v-if="props.columns">
      <tr>
        <th v-for="(column, index) in props.columns" :key="index">
          <slot :name="'Column' + String(index)" :column="column">
            {{ column.label }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.rows" :key="index">
        <td v-for="(column, subIndex) in props.columns" :key="subIndex">
          <slot :name="column.key" :row="row">
            {{ row[column.key] }}
          </slot>
        </td>
        <td>
          <slot name="actions" :row="row"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(["columns", "rows"]);
</script>

<style scoped></style>
