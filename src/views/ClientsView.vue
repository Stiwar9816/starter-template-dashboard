<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
    <ClientsTable :headers="storeClient.headers" />
  </div>
</template>

<script setup lang="ts">
// Components
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
import ClientsTable from '@/components/tables/ClientsTable.vue'
// Interfaces
import type { BreadcrumbItem } from '@/interfaces/breadcrumbs'
// Stores
import { useClientsStore } from '@/stores'
// Initialization Store
const storeClient = useClientsStore()

const items: BreadcrumbItem[] = [
  {
    title: 'Inicio',
    href: '/home'
  },
  {
    title: 'Clientes',
    href: '/clients'
  }
]
</script>
