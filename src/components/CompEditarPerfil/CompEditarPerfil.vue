<template>
  <div class="container vh-100 pt-5">
    <div class="row">
      <Header title="Editar perfil"/>
    </div>
    <div class="bg-warning h-75 mt-5">
      <div class="d-flex flex-column align-items-center bg-primary mt-4 h-100 rounded-2">
        <img src="https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png" alt="" class="img-fluid rounded-circle mt-4" style="width: 150px; height: 150px;">
        <div class="square rounded mt-4 text-center h-50">
          <div class="mt-4">
            <label class="label-white" for="nombre">Nombre:</label>
            <input id="nombre" type="text" v-model="nombre" class="form-control ">
          </div>
          <div class="mt-4">
            <label class="label-white" for="apellido">Apellidos:</label>
            <input id="apellido" type="text" v-model="apellido" class="form-control">
          </div>
          <div class="mt-4">
            <label class="label-white" for="ciudad">Ciudad:</label>
            <input id="ciudad" type="text" v-model="ciudad" class="form-control">
          </div>
          <div class="mt-4">
            <label class="label-white" for="correo">Correo:</label>
            <input id="correo" type="email" v-model="correo" class="form-control">
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5 gap-5">
          <button class="btn btn-light border" style="width: 150px;" @click="guardarPerfil">Guardar</button>
          <router-link to="/perfil" class="btn btn-light border" style="width: 150px;">Cancelar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';

let nombre = '';
let apellido = '';
let ciudad = '';
let correo = '';

function guardarPerfil() {
  // Lógica para guardar el perfil
}

</script>

<style scoped>
.square {
  width: 550px;
  height: 450px;
}

.label-white {
  color: white;
}
</style>