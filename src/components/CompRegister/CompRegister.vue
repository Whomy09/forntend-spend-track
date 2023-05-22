<template>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100" style="margin-top: -100px;">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Registrarse</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input type="text" id="name" class="form-control" v-model="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" id="email" class="form-control" v-model="email" required>
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input type="password" id="password" class="form-control" v-model="password" required>
                </div>
                <button  type="submit" class="btn btn-primary btn-block">Registrarse</button>
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
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');


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