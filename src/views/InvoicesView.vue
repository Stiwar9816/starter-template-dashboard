<template>
    <div>
      <Breadcrumbsnavigation :items="items" />
      <InvoiceTable :headers="storeInvoice.headers" />
    </div>
  </template>
  
  <script setup lang="ts">
  import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
  import InvoiceTable from '@/components/tables/InvoiceTable.vue'
  // Interfaces
  import type { BreadcrumbItem } from '@/interfaces/breadcrumbs'
  // Stores
  import { useInvoiceStore } from '@/stores'
  // Initialization Store
  const storeInvoice = useInvoiceStore()
  
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
      title: 'Facturas',
      href: '/invoices'
    }
  ]
  </script>
  