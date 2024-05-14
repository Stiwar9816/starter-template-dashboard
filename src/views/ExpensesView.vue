<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
    <ExpenseTable :headers="storeExpense.headers" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
import ExpenseTable from '@/components/tables/ExpenseTable.vue'
// Interfaces
import type { BreadcrumbItem } from '@/interfaces/breadcrumbs'
// Stores
import { useExpensesStore } from '@/stores'
// Initialization Store
const storeExpense = useExpensesStore()

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
    title: 'Gastos',
    href: '/expenses'
  }
]
</script>
