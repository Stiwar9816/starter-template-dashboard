<template>
  <v-btn prepend-icon="mdi-plus" variant="flat" color="deepteal600" rounded="xl">
    {{ props.label }}
  </v-btn>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  }
})
</script>
