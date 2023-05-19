<template>
  <div 
  class="d-flex flex-column align-items-center bg-light h-75 my-4 rounded-3 p-3 shadow border border-1"
  >
    <p class="fs-2 text-secondary fw-bold mt-4">Navegación</p>
    <div class="d-flex flex-column mt-5 gap-5">
      <NavegationButton icono="fa-solid fa-house" content="Inicio"/>
      <NavegationButton icono="fa-solid fa-user" content="Perfil"/>
      <NavegationButton icono="fa-solid fa-chart-simple" content="Estadisticas"/>
      <NavegationButton icono="fa-solid fa-money-bill" content="Presupuesto"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavegationButton from './NavegationButton.vue';
</script>

<style scoped>
</style>