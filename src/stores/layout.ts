import { defineStore } from 'pinia'
// Interface
import type { Routes } from '@/interfaces'

export const useLayoutStore = defineStore('layout', () => {
  const imageProfile: string = 'mdi-account-circle'
  const drawer: boolean = true
  const rail: boolean = true
  const routes: Array<Routes> = [
    {
      name: 'Inicio',
      icon: 'mdi-home-account',
      route: '/home'
    },
    {
      name: 'Clientes',
      icon: 'mdi-account-group',
      route: '/clients'
    },
    {
      name: 'Reservas',
      icon: 'mdi-calendar-clock',
      route: '/booking'
    },
    {
      name: 'Saldos',
      icon: 'mdi-calculator',
      route: '/balance'
    },
    {
      name: 'Caja',
      icon: 'mdi-cash-multiple',
      route: '/cash'
    }
  ]
  const services: Array<Routes> = [
    {
      name: 'Inventario',
      icon: 'mdi-package-variant',
      route: '/inventory'
    },
    {
      name: 'Gastos',
      icon: 'mdi-credit-card',
      route: '/expenses'
    },
    {
      name: 'Facturas de venta',
      icon: 'mdi-file-document',
      route: '/invoices'
    },
    {
      name: 'Cartera',
      icon: 'mdi-wallet',
      route: '/wallet'
    }
  ]
  return { drawer, rail, routes, services, imageProfile }
})
