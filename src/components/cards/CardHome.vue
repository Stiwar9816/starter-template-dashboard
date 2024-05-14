<template>
  <div>
    <v-card class="pl-5" variant="tonal" rounded="lg" :color="props.bgCard">
      <v-card-title>
        <h3 class="my-3 text-black">{{ props.title }}</h3>
      </v-card-title>
      <v-card-text class="d-block">
        <div class="d-flex">
          <v-icon class="me-3" icon="mdi-cash-register" size="x-large" color="deepteal600" />
          <span class="text-h6 text-black mb-2">
            {{ props.description }}
          </span>
        </div>
        <span v-show="props.showInventory" class="text-h6 text-black font-weight-bold">
          {{ props.value }}
        </span>
        <span v-show="props.showCurrency" class="text-h6 text-black font-weight-bold">
          {{ currencyFormatter('COP', props.value) }} COP
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="mt-n3 mb-3 font-weight-bold"
          :color="props.bgButton"
          variant="flat"
          :to="props.route"
          rounded="pill"
          >{{ props.textButton }}</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      :color="color"
      rounded="pill"
      location="bottom right"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { currencyFormatter } from '@/utils'
// Alerts
const snackbar = ref(false)
const color = ref('')
const message = ref('')

const props = defineProps({
  title: {
    type: String,
    default: 'Title card'
  },
  description: {
    type: String,
    default: 'description card'
  },
  value: {
    type: Number,
    required: true
  },
  textButton: {
    type: String,
    default: 'text button'
  },
  route: String,
  bgCard: String,
  bgButton: String,
  showCurrency: Boolean,
  showInventory: Boolean
})
</script>
