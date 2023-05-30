<template>
  <div class="container vh-100 pt-5">
    <div class="row">
      <div
        v-if="aler_danger"
        class="alert alert-danger d-flex justify-content-center"
        role="alert"
        style="font-size: 23px; position: absolute; width: 1350px; height: 60px"
      >
        Tienes Que Llenar Todo Los Campos
      </div>
      <div
        v-if="aler_success"
        class="alert alert-success d-flex justify-content-center"
        role="alert"
        style="font-size: 23px; position: absolute; width: 1350px; height: 60px"
      >
        Cambio Realizado
      </div>
    </div>

    <div class="row">
      <Header title="Editar perfill" />
    </div>
    <div class="bg-warning h-75 mt-5">
      <div class="d-flex flex-column align-items-center bg-body-secondary mt-4 h-100 rounded-2">
        <img
          src="https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png"
          alt=""
          class="img-fluid rounded-circle mt-4 border border-2 border-black"
          style="width: 150px; height: 150px"
        />
        <div class="square rounded mt-4 text-center h-50">
          <div class="mt-4">
            <label class="" for="nombre">Nombre:</label>
            <input id="nombre" type="text" v-model="nombre" class="form-control" />
          </div>
          <div class="mt-4">
            <label class="" for="apellido">Apellidos:</label>
            <input id="apellido" type="text" v-model="apellido" class="form-control" />
          </div>
          <div class="mt-4">
            <label class="" for="ciudad">Ciudad:</label>
            <input id="ciudad" type="text" v-model="ciudad" class="form-control" />
          </div>
          <div class="mt-4">
            <label class="" for="correo">Correo:</label>
            <input id="correo" type="email" v-model="correo" class="form-control" />
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5 gap-5">
          <button class="btn btn-light border" style="width: 150px" @click="guardarPerfil">
            Guardar
          </button>
          <router-link to="/perfil" class="btn btn-light border" style="width: 150px"
            >Cancelar</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import {updateCliente} from '../../helpers/services/updateCliente/updateCliente'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { validar } from '@/helpers/validacionesEditarPerfil/validationEditarPerfil'
import type { IUsuario } from '@/interfaces/IUsuario'
import { useRouter } from 'vue-router'

const data = localStorage.getItem('usuario')
const usuario: IUsuario = JSON.parse(data)
const router = useRouter()

let nombre = usuario.nombre
let apellido = usuario.apellidos
let ciudad = usuario.ciudad
let correo = usuario.correo
let password = usuario.password

let aler_danger: Ref<boolean> = ref(false)
let aler_success: Ref<boolean> = ref(false)

const guardarPerfil = () => {
  if (validar(nombre, apellido, ciudad, correo)) {
    aler_success.value = true

    setTimeout(() => {
      aler_success.value = false
    }, 1500)

    updateCliente(usuario.id, {
      nombre,
      apellidos: apellido,
      ciudad,
      correo,
      password
    });

    usuario.nombre = nombre;
    usuario.apellidos = apellido;
    usuario.ciudad = ciudad;
    usuario.correo = correo;

    localStorage.setItem('usuario', JSON.stringify(usuario))
    setTimeout(() => {
      router.push("/perfil")
    }, 2000)
  } else {
    aler_danger.value = true

    setTimeout(() => {
      aler_danger.value = false
    }, 1500)
  }
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
