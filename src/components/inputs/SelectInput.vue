<template>
  <v-select
    v-model="modelTerm"
    :items="props.items"
    variant="underlined"
    :label="props.label"
    :no-data-text="props.noDataText"
    color="deepteal400"
    @input="emitModel"
    :multiple="props.multiple"
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 2">
        <span>{{ item.title }}</span>
      </v-chip>
      <span v-if="index === 2" class="text-grey text-caption align-self-center">
        (+{{ modelTerm.length - 2 }} más)
      </span>
    </template>
  </v-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Buscar'
  },
  noDataText: {
    type: String,
    default: 'No hay datos'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: ['One', 'Two', 'Three']
  }
})
const emit = defineEmits()
// Const
const modelTerm = ref<any>()

const emitModel = (): void => {
  emit('model', modelTerm.value)
}
</script>
