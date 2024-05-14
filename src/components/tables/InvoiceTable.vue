<template>
  <v-row no-gutters>
    <v-col class="my-4" cols="12" md="6">
      <DateInput
        @model="handleModel"
        multiple="range"
        label="Buscar factura por fecha"
        cancel-text="Cancelar"
        ok-text="Confirmar"
      />
    </v-col>

    <v-data-table
      :headers="props.headers"
      :items="props.items"
      :search="dateRange"
      items-per-page="10"
      :sort-by="[{ key: 'n_invoice', order: 'desc' }]"
      ref="tableInvoice"
    >
      <!-- No data -->
      <template v-slot:no-data>
        <EmptyState />
      </template>
      <!-- No data -->
    </v-data-table>
  </v-row>
</template>
<script setup lang="ts">
import { type DeepReadonly, shallowRef } from 'vue'
// Components
import DateInput from '@/components/inputs/DateInput.vue'
import EmptyState from '@/components/tables/EmptyState.vue'
// Interface
import type { InvoiceData, DataTableHeader } from '@/interfaces'
// Props
const props = defineProps({
  headers: Array as () => DeepReadonly<DataTableHeader[] | DataTableHeader[][]>,
  items: Array<InvoiceData>
})
// Const
// const search = ref<string>('')
let dateRange = shallowRef<any>('')
// Manejar el evento de búsqueda
const handleModel = (searchTerm: typeof shallowRef<any>) => {
  // Actualizar el término de búsqueda en el componente padre
  dateRange.value = searchTerm
}
</script>
