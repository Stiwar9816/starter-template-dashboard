import { defineStore } from 'pinia'
// Interface
import type { ClientData, Field } from '@/interfaces'

export const useClientsStore = defineStore({
  id: 'clients',
  state: () => ({
    headers: [
      { title: 'N° de identificación', sortable: false, key: 'id_number' },
      { title: 'Lugar de expedición', sortable: true, key: 'expedition_place' },
      { title: 'Nombre Completo', sortable: false, key: 'fullname' },
      { title: 'Teléfono', sortable: false, key: 'phone' },
      { title: 'Correo electronico', sortable: false, key: 'email' },
      { title: 'Nacionalidad', sortable: true, key: 'nationality' },
      { title: 'Ocupación', sortable: true, key: 'occupation' },
      { title: 'Fecha de nacimiento', sortable: true, key: 'birthdate' },
      { title: 'Estado', sortable: true, key: 'status' },
      { title: 'Acciones', sortable: false, align: 'center', key: 'actions' }
    ] as Field[],
    items: [] as ClientData[]
  }),
  actions: {}
})
