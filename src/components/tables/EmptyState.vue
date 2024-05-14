<template>
  <v-empty-state size="150" text-width="250">
    <template v-slot:media>
      <v-img src="/images/undraw_empty_re_opql.svg" />
    </template>
    <template v-slot:text>
      <div class="text-body-1 my-2">¡No hay registros!</div>
    </template>
  </v-empty-state>
</template>
