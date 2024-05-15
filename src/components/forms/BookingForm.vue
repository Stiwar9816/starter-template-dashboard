<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4">
        <AutocompleteInput label="Buscar cliente" />
      </v-col>
      <v-col cols="12" md="4">
        <SelectInput label="Habitaciones" />
      </v-col>
      <v-col cols="12" md="2">
        <TextInput label="Tarifa" type="number" />
      </v-col>
      <v-col cols="12" md="2">
        <TextInput label="Origen" />
      </v-col>
      <v-col cols="12" md="3">
        <DateInput label="Fecha de ingreso" />
      </v-col>
      <v-col cols="12" md="3">
        <TimeInput label="Hora de ingreso" />
      </v-col>
      <v-col cols="12" md="3">
        <DateInput label="Fecha de salida" />
      </v-col>
      <v-col cols="12" md="3">
        <TimeInput label="Hora de salida" />
      </v-col>
      <v-col>
        <div class="text-center my-1">
          <ButtonBase label="Crear reserva" />
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import AutocompleteInput from '@/components/inputs/AutocompleteInput.vue'
import SelectInput from '@/components/inputs/SelectInput.vue'
import TimeInput from '@/components/inputs/TimeInput.vue'
import DateInput from '@/components/inputs/DateInput.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import ButtonBase from '@/components/buttons/ButtonBase.vue'
</script>
