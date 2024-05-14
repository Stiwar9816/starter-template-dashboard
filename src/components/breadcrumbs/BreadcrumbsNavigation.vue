<template>
  <v-breadcrumbs :items="props.items">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@/interfaces'
// Props
const props = defineProps({
  items: {
    type: Array as () => BreadcrumbItem[],
    required: true
  }
})
</script>

<style lang="css">
.v-breadcrumbs-item {
  border-radius: 15px;
  background-color: #cff8ed;
  padding: 3px 30px 3px 30px;
}
</style>
