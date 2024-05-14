<template>
  <div>
    <v-snackbar
      v-model="props.showSnackbar"
      :timeout="4000"
      :color="props.color"
      rounded="pill"
      location="bottom right"
    >
      {{ props.message }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  showSnackbar: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'deepteal600'
  },
  message: {
    type: String,
    default: 'Alert'
  }
})
</script>
