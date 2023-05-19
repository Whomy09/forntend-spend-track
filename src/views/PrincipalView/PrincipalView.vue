<template>
  <div class="container h-100">
    <div class="row">
      <Header title="Gastos" />
    </div>
    <div class="mt-5 h-75">
      <button class="btn btn-light btn-lg border border-1 shadow-sm">Agregar</button>
      <div
        class="bg-body-secondary mt-4 h-75 rounded-2 pt-2 px-3"
        id="contenedor-tabla"
      >
      <!-- Despues de 17 datos se coloca mas grande -->
        <TablePrincipal/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import TablePrincipal from '@/components/CompPrincipal/TablePrincipal.vue';
</script>

<style scoped>
#contenedor-tabla {
  overflow-y: scroll;
}
</style>
