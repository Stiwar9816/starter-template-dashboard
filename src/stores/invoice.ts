import { defineStore } from 'pinia'
// Interface
import type { Field, InvocieData } from '@/interfaces'

export const useInvoiceStore = defineStore({
  id: 'invoice',
  state: () => ({
    headers: [
      { title: 'N° de factura', sortable: true, key: 'n_invoice' },
      { title: 'Habitación', sortable: false, key: 'room' },
      { title: 'Cliente', sortable: false, key: 'client' },
      { title: 'Días', sortable: true, key: 'days' },
      { title: 'Ingreso', sortable: true, key: 'entrance' },
      { title: 'Egreso', sortable: true, key: 'exit' },
      { title: 'Total', sortable: true, key: 'total' },
      { title: 'Acciones', sortable: false, align: 'center', key: 'actions' }
    ] as Field[],
    items: [] as InvocieData[]
  }),
  actions: {}
})
