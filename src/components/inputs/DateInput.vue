<template>
  <v-date-input
    v-model:model-value="modelTerm"
    @input="emitModel"
    :label="props.label"
    color="deepteal400"
    placeholder="dd/mm/yyyy"
    prepend-icon=""
    prepend-inner-icon="$calendar"
    variant="underlined"
    :cancel-text="props.cancelText"
    :ok-text="props.okText"
    :multiple="multiple"
    clearable
  ></v-date-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Selecciona fecha'
  },
  multiple: {
    type: String
  },
  cancelText: {
    type: String,
    default: 'Cancelar'
  },
  okText: {
    type: String,
    default: 'OK'
  },
  items: {
    type: Array,
    default: ['One', 'Two']
  }
})

const emit = defineEmits()
// Const
const modelTerm = ref<any>()

const emitModel = (): void => {
  emit('model', modelTerm.value)
}
</script>
