import { defineStore } from 'pinia'
// Interface
import type { Field, WalletData } from '@/interfaces'

export const useWalletStore = defineStore({
  id: 'wallet',
  state: () => ({
    headers: [
      { title: 'N° de factura', sortable: true, key: 'n_invoice' },
      { title: 'Cliente', sortable: false, key: 'client' },
      { title: 'Habitación', sortable: false, key: 'room' },
      { title: 'Fecha', sortable: true, key: 'entrance' },
      { title: 'Abonos', sortable: true, key: 'days' },
      { title: 'Total', sortable: true, key: 'total' },
      { title: 'Acciones', sortable: false, align: 'center', key: 'actions' }
    ] as Field[],
    items: [] as WalletData[]
  }),
  actions: {}
})
