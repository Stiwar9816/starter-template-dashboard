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
                v-model="props.dataForm!.id_number"
                :rules="requiredValue"
                label="N° de identificación"
                type="number"
                variant="underlined"
                color="deepteal500"
                min="0"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.expedition_place"
                :rules="requiredValue"
                label="Lugar de expedición"
                type="text"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.fullname"
                :rules="requiredValue"
                label="Nombre Completo"
                type="text"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.phone"
                :rules="requiredValue"
                label="Teléfono"
                type="number"
                min="0"
                variant="underlined"
                color="deepteal500"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.email"
                :rules="emailRules"
                label="Correo electronico"
                type="email"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.nationality"
                :rules="requiredValue"
                label="Nacionalidad"
                type="text"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.occupation"
                :rules="requiredValue"
                label="Ocupación"
                type="text"
                variant="underlined"
                color="deepteal500"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="props.dataForm!.birthdate"
                :rules="requiredValue"
                label="Fecha de nacimiento"
                type="date"
                variant="underlined"
                color="deepteal500"
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
import { requiredValue, emailRules } from '@/utils'
// Props
const props = defineProps({
  formTitle: {
    type: String,
    default: 'Title Form'
  },
  dataForm: {
    type: Object,
    defult: {
      id_number: Number,
      expedition_place: String,
      fullname: String,
      phone: Number,
      email: String,
      nationality: String,
      occupation: String,
      birthdate: String
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
