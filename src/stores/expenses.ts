import { defineStore } from 'pinia'
// Interface
import type { Field, ExpensesData } from '@/interfaces'

export const useExpensesStore = defineStore({
  id: 'expenses',
  state: () => ({
    headers: [
      { title: 'Concepto', sortable: false, key: 'concept' },
      { title: 'Valor', sortable: true, key: 'value' },
      { title: 'Fecha', sortable: true, key: 'date' },
      { title: 'Acciones', sortable: false, align: 'center', key: 'actions' }
    ] as Field[],
    items: [] as ExpensesData[]
  }),
  actions: {}
})
