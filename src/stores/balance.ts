import { defineStore } from 'pinia'
// Interface
import type { BalanceData, Field } from '@/interfaces'

export const useBalanceStore = defineStore({
  id: 'balance',
  state: () => ({
    headers: [
      { title: 'Cliente', sortable: false, key: 'client' },
      { title: 'Fecha de ingreso', sortable: false, key: 'entry_date' },
      { title: 'Habitación', sortable: false, key: 'room' },
      { title: 'Días', sortable: true, key: 'days' },
      { title: 'Valor', sortable: false, key: 'room_value' },
      { title: '+ Bar', sortable: false, key: 'services_bar' },
      { title: '+ Lavandería', sortable: false, key: 'services_washing' },
      { title: '+ Otros', sortable: false, key: 'sevices_other' },
      { title: '- Abonos', sortable: false, key: 'services_payment' },
      { title: 'Saldo final', sortable: false, key: 'final_balance' }
    ] as Field[],
    items: [] as BalanceData[]
  }),
  actions: {}
})
