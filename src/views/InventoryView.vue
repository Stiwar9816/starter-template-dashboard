<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
    <InventoryTable :headers="storeInventory.headers" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
import InventoryTable from '@/components/tables/InventoryTable.vue'
// Interfaces
import type { BreadcrumbItem } from '@/interfaces'
// Stores
import { useInventoryStore } from '@/stores'
// Initialization Store
const storeInventory = useInventoryStore()

const items: BreadcrumbItem[] = [
  {
    title: 'Inicio',
    href: '/home'
  },
  {
    title: 'Serivicios',
    disabled: false
  },
  {
    title: 'Inventario',
    href: '/inventory'
  }
]
</script>
