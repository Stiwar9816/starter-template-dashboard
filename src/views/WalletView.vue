<template>
    <div>
      <Breadcrumbsnavigation :items="items" />
      <WalletTable :headers="storeWallet.headers" />
    </div>
  </template>
  
  <script setup lang="ts">
  import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
  import WalletTable from '@/components/tables/WalletTable.vue'
  // Interfaces
  import type { BreadcrumbItem } from '@/interfaces'
  // Stores
  import { useWalletStore } from '@/stores'
  // Initialization Store
  const storeWallet = useWalletStore()
  
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
      title: 'Cartera',
      href: '/wallet'
    }
  ]
  </script>
  