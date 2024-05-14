<template>
  <div>
    <v-card>
      <v-toolbar color="deepteal500">
        <v-card-title>
          <v-container>
            {{ props.formTitle }}
          </v-container>
        </v-card-title>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.concept"
                :rules="requiredValue"
                label="Concepto"
                type="text"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.value"
                :rules="requiredValue"
                label="Valor"
                type="number"
                min="0"
                variant="underlined"
                color="deepteal500"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn class="rounded-pill" color="deepteal50" variant="flat" @click="props.modalClose">
          Cancelar
        </v-btn>
        <v-btn class="rounded-pill" color="deepteal600" variant="flat" @click="props.modalSave">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
// Utils
import { requiredValue } from '@/utils'
// Props
const props = defineProps({
  formTitle: {
    type: String,
    default: 'Title Form'
  },
  dataForm: {
    type: Object,
    defult: {
      concept: String,
      value: Number
    }
  },
  modalClose: {
    type: Function
  },
  modalSave: {
    type: Function
  }
})
</script>
