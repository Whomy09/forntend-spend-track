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
            <h1 class="modal-title fs-5" id="exampleModalLabel">Notifications</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'

const props = defineProps({
  title: String
})
</script>

<style scoped></style>
