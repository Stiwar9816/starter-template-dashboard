<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <CardHome
          title="Inventario"
          description="Productos con stock bajo:"
          :value="3"
          text-button="Ver Inventario"
          route="/inventory"
          bg-card="deepteal400"
          bg-button="deepteal100"
          :show-inventory="true"
        />
      </v-col>
      <v-col cols="12" md="6">
        <CardHome
          title="Saldo caja"
          description="Total general en caja:"
          :value="3424663"
          text-button="Ver Caja"
          route="/cash"
          bg-card="deepteal400"
          bg-button="deepteal100"
          :show-currency="true"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import CardHome from '@/components/cards/CardHome.vue'
</script>
