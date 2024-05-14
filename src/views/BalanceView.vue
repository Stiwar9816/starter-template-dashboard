<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
    <BalanceTable :headers="storeBalance.headers" :items="itemsTable" />
  </div>
</template>

<script setup lang="ts">
// Components
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
import BalanceTable from '@/components/tables/BalanceTable.vue'
// Interfaces
import type { BalanceData, BreadcrumbItem } from '@/interfaces'
// Stores
import { useBalanceStore } from '@/stores'
// Initialization Store
const storeBalance = useBalanceStore()

const items: BreadcrumbItem[] = [
  {
    title: 'Inicio',
    href: '/home'
  },
  {
    title: 'Saldos',
    href: '/balance'
  }
]

const itemsTable: BalanceData[] = [
  {
    client: 'Jhon Doe',
    entry_date: '05/04/2024',
    room: '201',
    days: 2,
    room_value: 120.0,
    services_bar: 230.4,
    services_washing: 230.4,
    sevices_other: 230.4,
    services_payment: 230.4,
    final_balance: 230.4
  }
]
</script>
