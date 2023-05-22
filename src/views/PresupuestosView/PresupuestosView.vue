<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 w-100">
      <div class="d-flex flex-column justify-content-center col-2 h-100">
        <Navegation/>
      </div>
      <div class="col-10 h-100">
          <CompPresupuesto/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import CompPresupuesto from '@/components/CompPresupuestos/tablaPresupuestos.vue';
import Navegation from '@/components/Navegation/NavegationBar.vue';
</script>

