<template>
  <div class="container vh-100 pt-5">
    <div class="row">
      <Header title="Perfil"/>
    </div>
    <div class="bg-warning h-75 mt-5">
      <div class="d-flex flex-column align-items-center bg-primary mt-4 h-100 rounded-2">
        <img src="https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png" alt="" class="img-fluid rounded-circle mt-4" style="width: 150px; height: 150px;">
        <div class="bg-white square rounded mt-4 text-center h-50">
          <h4 class="mt-3">Informacion Basica</h4>
          <hr class="border-5">
          <p class="text-start mb-4" style="margin-left: 50px;">Nombre: {{usuario.nombre}}</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Apellido: {{usuario.apellidos}}</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Ciudad: {{ usuario.ciudad }}</p>
          <p class="text-start mb-4" style="margin-left: 50px;">Correo: {{usuario.correo}}</p>
        </div>
        <div class="d-flex justify-content-center mt-5 gap-5">
          <router-link to="/editar-perfil" class="btn btn-light border" style="width: 150px;">editar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import type {IUsuario} from "../../interfaces/IUsuario"
// ojo funciona pero no se porque
let usuario:IUsuario = {
    id: 0,
    password:"" ,
    nombre: "",
    apellidos:"",
    ciudad: "",
    correo:""
};
const usuarioJSON = localStorage.getItem('usuario');
if (usuarioJSON!==null) {
  usuario = JSON.parse(usuarioJSON);
}else{
  alert("cagaste")
}






</script>

<style scoped>
.square {
  width: 450px;
  height: 350px;
}

</style>