<template>
  <v-text-field
    :label="props.label"
    :type="props.type"
    variant="underlined"
    color="deepteal400"
    :min="props.minValue"
    v-model="modelValue"
    @input="emitModel"
    clearable
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { InputText } from '@/types'
// Props
const props = defineProps({
  type: {
    type: String as () => InputText,
    default: 'text'
  },
  label: {
    type: String,
    default: 'Label'
  },
  minValue: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits()
// Const
const modelValue = ref<string>('')
const emitModel = (): void => {
  emit('model', modelValue.value)
}
</script>
