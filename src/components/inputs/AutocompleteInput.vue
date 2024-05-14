<template>
  <div>
    <v-autocomplete
      :label="props.label"
      :items="props.items"
      variant="underlined"
      color="deepteal400"
      no-data-text="¡No se encontraron coincidencias!"
      clearable
      flat
    />
  </div>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Buscar'
  },
  items: {
    type: Array,
    default: ['One', 'Two']
  }
})
</script>
