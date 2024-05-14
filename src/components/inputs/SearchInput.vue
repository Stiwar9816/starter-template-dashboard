<template>
  <div>
    <v-text-field
      class="my-4"
      clearable
      color="deepteal400"
      density="comfortable"
      :label="props.label"
      prepend-inner-icon="mdi-magnify"
      type="text"
      v-model="searchTerm"
      variant="underlined"
      @input="emitSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Buscar'
  }
})
const emit = defineEmits()
// Const
const searchTerm = ref<string>('')
const emitSearch = (): void => {
  emit('search', searchTerm.value)
}
</script>
