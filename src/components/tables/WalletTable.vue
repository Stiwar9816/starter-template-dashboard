<template>
  <v-row no-gutters>
    <v-col cols="12" md="4">
      <!-- Input Search -->
      <SearchInput label="Buscar cliente" @search="handleSearch" />
      <!-- End Input Search -->
    </v-col>

    <v-data-table
      :headers="props.headers"
      :items="props.items"
      :search="search"
      items-per-page="10"
      :sort-by="[{ key: 'n_invoice', order: 'desc' }]"
      ref="tableWallet"
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
import { ref, type DeepReadonly } from 'vue'
// Components
import SearchInput from '@/components/inputs/SearchInput.vue'
import EmptyState from '@/components/tables/EmptyState.vue'
// Interface
import type { WalletData, DataTableHeader } from '@/interfaces'
// Props
const props = defineProps({
  headers: Array as () => DeepReadonly<DataTableHeader[] | DataTableHeader[][]>,
  items: Array<WalletData>
})
// Const
const search = ref<string>('')
// Manejar el evento de búsqueda
const handleSearch = (searchTerm: string) => {
  // Actualizar el término de búsqueda en el componente padre
  search.value = searchTerm
}
</script>
