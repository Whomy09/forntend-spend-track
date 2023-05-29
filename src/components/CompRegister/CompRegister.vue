<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100" style="margin-top: -100px">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <div
              v-if="aler_danger"
              class="alert alert-danger d-flex justify-content-center"
              role="alert"
              style="font-size: 23px;"
            >
              Tienes Que Llenar Todo Los Campos
            </div>
            <div
              v-if="aler_success"
              class="alert alert-success d-flex justify-content-center"
              role="alert"
              style="font-size: 23px;"
            >
              Se creo un nuevo perfil
            </div>
            <h2 class="text-center">Registrarse</h2>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" class="form-control" v-model="name" required />
            </div>
            <div class="form-group">
              <label for="apellido">apellido</label>
              <input type="text" id="apellido" class="form-control" v-model="apellido" required />
            </div>
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" class="form-control" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="ciudad">Ciudad</label>
              <input type="text" id="ciudad" class="form-control" v-model="ciudad" required />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <button @click="llamar" type="submit" class="btn btn-primary btn-block">
              Registrarse
            </button>
          </div>
          <div class="card-footer text-center">
            <p>¿Ya tienes una cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import enviar from '../../helpers/services/registro/registro'
import { validar } from '@/helpers/validacionRegistrar/validacionRegistrar'
import type { Ref } from 'vue'

import type { IUsuario } from '@/interfaces/IUsuario'

let name = ref('')
let apellido = ref('')
let email = ref('')
let password = ref('')
let ciudad = ref('')

let aler_danger: Ref<boolean> = ref(false)
let aler_success: Ref<boolean> = ref(false)

const llamar = () => {
  if (validar(name.value, apellido.value, ciudad.value, email.value, password.value)) {
    aler_success.value = true

    setTimeout(() => {
      aler_success.value = false
    }, 2000)

    // guardar los nuevos datos
    const usuario: Ref<IUsuario> = ref({
      id: 0,
      password: password.value,
      nombre: name.value,
      apellidos: apellido.value,
      ciudad: ciudad.value,
      correo: email.value
    })

    enviar(usuario.value)
    console.log(usuario.value)
  } else {
    aler_danger.value = true

    setTimeout(() => {
      aler_danger.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-header,
.card-footer {
  background-color: #f8f9fa;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.btn-primary {
  width: 100%;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #0069d9;
}
</style>
