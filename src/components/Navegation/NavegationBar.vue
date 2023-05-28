<template>
  <div 
  class="d-flex flex-column align-items-center bg-light h-75 my-4 rounded-3 p-3 shadow border border-1"
  >
    <p class="fs-2 text-secondary fw-bold mt-4">Navegación</p>
    <div class="d-flex flex-column mt-5 gap-5">
      <NavegationButton icono="fa-solid fa-house" content="Inicio" ruta="/"/>
      <NavegationButton icono="fa-solid fa-user" content="Perfil" ruta="/perfil"/>
      <NavegationButton icono="fa-solid fa-chart-simple" content="Estadisticas" ruta=""/>
      <NavegationButton icono="fa-solid fa-money-bill" content="Presupuesto" ruta="/presupuestos"/>
      

          <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-light btn-lg shadow-sm border border-1"
      data-bs-toggle="modal"
      data-bs-target="#logoutModal"
    >
      <i class="fas fa-sign-out-alt"></i> Cerrar sesión
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      aria-labelledby="logoutModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="logoutModalLabel">Cerrar sesión</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="cerrarSesion"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>



    </div>
  </div>
</template>

<script lang="ts" setup>
import NavegationButton from './NavegationButton.vue';
const cerrarSesion=()=>{
  
}
</script>

<style scoped>
</style>