<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
  </div>
</template>

<script setup lang="ts">
// Components
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
// Interfaces
import type { BreadcrumbItem } from '@/interfaces'

const items: BreadcrumbItem[] = [
  {
    title: 'Inicio',
    href: '/home'
  },
  {
    title: 'Reservas',
    href: '/booking'
  }
]
</script>
