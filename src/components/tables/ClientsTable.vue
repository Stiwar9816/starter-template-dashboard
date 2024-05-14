<template>
  <v-row no-gutters>
    <v-col cols="12" md="4">
      <!-- Input Search -->
      <SearchInput label="Buscar cliente" @search="handleSearch" />
      <!-- End Input Search -->
    </v-col>
    <v-spacer />

    <v-data-table
      :headers="props.headers"
      :items="props.items"
      :search="search"
      :items-per-page="10"
      :sort-by="[{ key: 'status', order: 'desc' }]"
      ref="tableClient"
    >
      <template v-slot:top>
        <v-toolbar class="rounded-pill" color="deepteal50" density="comfortable" flat>
          <v-spacer />
          <!-- Dialog Add/Edit -->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-plus"
                variant="flat"
                color="deepteal600"
                rounded="xl"
                class="my-2"
                v-bind="props"
              >
                Nuevo cliente
              </v-btn>
            </template>
            <AddFormClient
              :form-title="formTitle"
              :data-form="editedItem"
              :modal-close="close"
              :modal-save="save"
            />
          </v-dialog>
          <!-- Dialog Add/Edit -->
          <!-- Dialog delete -->
          <v-dialog v-model="dialogDelete" max-width="600px" persistent>
            <ModalDelete
              form-title="Eliminar cliente"
              type-delete="el"
              :data-form="editedItem"
              :modal-close="closeDelete"
              :modal-save="deleteItemConfirm"
            />
          </v-dialog>
          <!-- Dialog delete -->
        </v-toolbar>
      </template>
      <!-- Status -->
      <template v-slot:item.status="{ item }: any">
        <v-switch
          v-if="item.status !== undefined"
          v-model="item.status"
          hide-details
          true-icon="mdi-check-circle"
          false-icon="mdi-close-circle"
          color="deepteal600"
        ></v-switch>
      </template>
      <!-- End Status -->
      <!-- Actions -->
      <template v-slot:item.actions="{ item }: any">
        <v-icon
          size="small"
          class="me-2"
          @click="editItem(item)"
          color="deepteal600"
          aria-label="button edit"
        >
          mdi-pencil
        </v-icon>
        <v-icon size="small" color="error" @click="deleteItem(item)" aria-label="button delete">
          mdi-delete
        </v-icon>
      </template>
      <!-- End Actions -->
      <!-- No data -->
      <template v-slot:no-data>
        <EmptyState />
      </template>
      <!-- No data -->
    </v-data-table>
    <!-- Alert -->
    <SnackbarAlert :show-snackbar="showSnackbar" :message="message" :color="color" />
    <!-- Alert -->
  </v-row>
</template>
<script lang="ts" setup>
import { ref, type DeepReadonly, onMounted, computed } from 'vue'
// Components
import AddFormClient from '@/components/forms/AddFormClient.vue'
import ModalDelete from '@/components/forms/DeleteData.vue'
import SearchInput from '@/components/inputs/SearchInput.vue'
import SnackbarAlert from '@/components/snackbar/SnackbarAlert.vue'
import EmptyState from '@/components/tables/EmptyState.vue'
// Stores
// import { useClientsStore } from '@/stores'
// Interface
import type { DataTableHeader, ClientData } from '@/interfaces'
// Props
const props = defineProps({
  headers: Array as () => DeepReadonly<DataTableHeader[] | DataTableHeader[][]>,
  items: Array as () => ClientData[]
})
// Const
const dialog = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const tableClient = ref<HTMLElement | null>(null)
const search = ref<string>('')
const data = ref<ClientData[]>([])
const editedIndex = ref<number>(-1)
const editedItem = ref<ClientData>({
  id_number: 0,
  expedition_place: '',
  fullname: '',
  phone: 0,
  email: '',
  nationality: '',
  occupation: '',
  birthdate: ''
})
const defaultItem = ref<ClientData>({
  id_number: 0,
  expedition_place: '',
  fullname: '',
  phone: 0,
  email: '',
  nationality: '',
  occupation: '',
  birthdate: ''
})
// Initialization Store
// const clients = useClientsStore()
// Alerts
const showSnackbar = ref<boolean>(false)
const color = ref<string>('')
const message = ref<string>('')
// Methods / Actions
const initialize = async () => {
  try {
    // await Promise.all([user.allUsers()])
  } catch (error: any) {
    showSnackbar.value = true
    message.value = `¡Ha ocurrido un error: ${error.message}!`
    color.value = 'red-darken-3'
  }
}

onMounted(() => {
  initialize()
})

// Exportar información de la tabla a excel
// const handleExportClick = () => {
//   /* Espera los siguiente parametros:
//       Props: Contiene los headers e items de la tabla
//       tableRef: La propiedad ref del datatable por medio de este se hara referencia
//       al elemento de donde obtendra la información
//       worksheetName: Nombre de la hoja de la calculo
//       nameSheet: Nombre del archivo a exportar
//     */
//   exportData(props, tableUser, 'Usuarios', 'Información_Usuarios')
// }

const formTitle = computed(() => {
  return !editedItem.value.id ? 'Nuevo Cliente' : 'Editar Cliente'
})

const editItem = (item: ClientData) => {
  editedIndex.value = data.value.indexOf(item)
  editedItem.value = Object.assign(
    {},
    {
      id_number: item.id_number,
      expedition_place: item.expedition_place,
      fullname: item.fullname,
      phone: item.phone,
      email: item.email,
      nationality: item.nationality,
      occupation: item.occupation,
      birthdate: item.birthdate
    }
  )
  dialog.value = true
}

const close = () => {
  dialog.value = false
  editedItem.value = Object.assign({}, defaultItem.value)
  editedIndex.value = -1
}

const deleteItem = (item: ClientData) => {
  editedIndex.value = props.items!.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialogDelete.value = true
}

const deleteItemConfirm = async () => {
  // await user.deleteUser(editedItem.value.id!)
  closeDelete()
}

const closeDelete = () => {
  dialogDelete.value = false
  editedItem.value = Object.assign({}, defaultItem.value)
  editedIndex.value = -1
}

const save = async () => {
  let { id, id_number, phone, ...res } = editedItem.value
  id_number = +id_number
  phone = +phone
  try {
    if (!id) {
      // await user.createUser({ cc, phone, ...res })
      showSnackbar.value = true
      message.value = `¡El cliente ${res.fullname} fue actualizado con exito!`
      color.value = 'deepteal600'
      close()
    } else {
      // await user.updateUser(id, { cc, phone, ...res })
      showSnackbar.value = true
      message.value = `¡El cliente ${res.fullname} fue actualizado con exito!`
      color.value = 'deepteal600'
      close()
    }
  } catch (error: any) {
    console.log(error)
    showSnackbar.value = true
    message.value = `¡Ha ocurrido un error: ${error.message}!`
    color.value = 'red-darken-3'
  }
}

// Manejar el evento de búsqueda
const handleSearch = (searchTerm: string) => {
  // Actualizar el término de búsqueda en el componente padre
  search.value = searchTerm
}
</script>

<style lang="css">
.v-toolbar__content > .v-btn:last-child {
  margin-inline-end: 12px;
}
</style>
