<template>
    <div>
      <Breadcrumbsnavigation :items="items" />
    </div>
  </template>
  
  <script setup lang="ts">
  import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
  import type { BreadcrumbItem } from '@/interfaces/breadcrumbs'
  
  const items: BreadcrumbItem = [
    {
      title: 'Inicio',
      href: '/home'
    },
    {
      title: 'Caja',
      href: '/cash'
    }
  ]
  </script>
  