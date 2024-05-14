import { defineStore } from 'pinia'
// Interface
import type { Field, InventoryData } from '@/interfaces'

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: () => ({
    headers: [
      { title: 'Producto', sortable: false, key: 'product' },
      { title: 'Stock', sortable: true, key: 'stock' },
      { title: 'Compras', sortable: false, key: 'shopping' },
      { title: 'Ventas', sortable: false, key: 'sales' },
      { title: 'Acciones', sortable: false, align: 'center', key: 'actions' }
    ] as Field[],
    items: [] as InventoryData[]
  }),
  actions: {}
})
