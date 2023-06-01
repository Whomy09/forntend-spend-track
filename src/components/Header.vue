<template>
  <header class="d-flex justify-content-between align-items-center col-12">
    <h2 class="text-secondary bg-light px-5 py-1 rounded-3 shadow-sm border border-1">
      {{ title }}
    </h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-light btn-lg shadow-sm border border-1"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <i class="fa-sharp fa-solid fa-bell"></i>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-2" id="exampleModalLabel">Recordatorios</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-column gap-2">
            <div class="w-100 bg-light shadow p-3 d-flex justify-content-between">
              <span class="fs-5">Comprar la comida</span>
              <div class="d-flex gap-2">
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa-solid fa-pencil text-white"></i>
                </button>
              </div>
            </div>
            <div class="w-100 bg-light shadow p-3 d-flex justify-content-between">
              <span class="fs-5">Pagar el recibo de internet</span>
              <div class="d-flex gap-2">
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa-solid fa-pencil text-white"></i>
                </button>
              </div>
            </div>
            <div class="w-100 bg-light shadow p-3 d-flex justify-content-between">
              <span class="fs-5">Pagar el servicio de energia</span>
              <div class="d-flex gap-2">
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn btn-warning">
                  <i class="fa-solid fa-pencil text-white"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary">AGREGAR</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String
})
</script>

<style scoped></style>
