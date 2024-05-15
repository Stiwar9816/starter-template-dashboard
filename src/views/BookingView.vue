<template>
  <div>
    <Breadcrumbsnavigation :items="items" />
    <BookingForm />
  </div>
</template>

<script setup lang="ts">
// Components
import Breadcrumbsnavigation from '@/components/breadcrumbs/BreadcrumbsNavigation.vue'
import BookingForm from '@/components/forms/BookingForm.vue'
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
