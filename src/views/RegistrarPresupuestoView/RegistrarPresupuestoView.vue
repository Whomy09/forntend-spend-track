<template>
  <div class="container h-100 pt-5">
    <div class="row">
      <Header title="Registro de presupuesto" />
    </div>
    <div class="bg-body-secondary h-75 mt-5 rounded-2 pt-5">
      <div class="d-flex flex-column align-items-center gap-5">
        <div class="d-flex align-items-center gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="fecha">Fecha:</label>
          <input class="rounder-1 border border-0 p-1 text-body-secondary" type="date" id="fecha" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="categoria">Categoria:</label>
          <input
            class="rounder-1 border border-0 p-1 text-body-secondary"
            type="text"
            id="categoria"
            placeholder="Ej... Transporte"
          />
        </div>
        <div class="d-flex align-items-center gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="cantidad">Cantidad:</label>
          <input
            class="rounder-1 border border-0 p-1 text-body-secondary"
            type="number"
            id="cantidad"
            placeholder="0"
          />
        </div>
        <div class="d-flex justify-content-center gap-5">
          <button class="btn btn-light border" style="width: 150px">Guardar</button>
          <router-link to="/presupuestos" class="btn btn-light border" style="width: 150px">Cancelar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
</script>

<style scoped></style>
