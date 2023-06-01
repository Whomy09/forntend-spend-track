<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 w-100">
      <div class="d-flex flex-column justify-content-center col-2 h-100">
        <Navegation />
      </div>
      <div class="col-10 h-100">
        <div class="container h-100 pt-5">
          <div class="row">
            <Header title="Estadisticas" />
          </div>
          <div class="mt-5 h-100">
            <div class="bg-body-secondary mt-4 h-75 rounded-2 pt-2 px-3" id="contenedor-tabla">
              <CompEstadisticas />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CompEstadisticas from '@/components/CompEstadisticas/CompEstadisticas.vue'
import Header from '@/components/Header.vue'
import Navegation from '@/components/Navegation/NavegationBar.vue'
</script>

<style scoped></style>
