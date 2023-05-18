<template>
  <div class="container vh-100">
    <div class="row">
      <Header title="Perfil"/>
    </div>
    <div class="bg-warning h-75 mt-5">
      <div class="d-flex flex-column align-items-center bg-primary mt-4 h-100 rounded-2">
        <img src="https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png" alt="" class="img-fluid rounded-circle mt-4" style="width: 150px; height: 150px;">
        <div class="bg-white square rounded mt-4 text-center h-50">
          <h4 class="mt-3">Informacion Basica</h4>
          <hr class="border-5">
          <p class="text-start mb-4" style="margin-left: 50px;">Nombre: Jose</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Apellido: Blanco</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Ciudad: Barranquilla</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Correo: correo123@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
</script>

<style scoped>
.square {
  width: 450px;
  height: 350px;
}

</style>