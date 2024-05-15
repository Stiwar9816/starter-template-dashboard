<template>
  <v-text-field
    v-model="time"
    :active="menu2"
    :focus="menu2"
    :label="props.label"
    variant="underlined"
    color="deepteal400"
    prepend-inner-icon="mdi-clock-time-four-outline"
    readonly
  >
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      activator="parent"
      transition="scale-transition"
    >
      <v-time-picker v-if="menu2" v-model="time" format="24hr" full-width></v-time-picker>
    </v-menu>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Selecciona una hora'
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
  format: {
    type: String,
    default: '24hr'
  }
})

const time = ref(null)
const menu2 = ref(false)
</script>
