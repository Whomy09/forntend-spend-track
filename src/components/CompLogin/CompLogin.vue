<template>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100" style="margin-top: -100px;" >
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Iniciar sesión</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" id="email" class="form-control" v-model="email" required>
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input type="password" id="password" class="form-control" v-model="password" required>
                </div>
                <div class="text-center">
                  <router-link to="/" class="btn btn-primary" @click="entrar(email,password)">Iniciar sesión</router-link>
                </div>
            </div>
            <div class="card-footer text-center">
              <p>No tienes una cuenta? <router-link to="/register">Regístrate</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts" setup>
import { ref } from 'vue';
import type {Ref} from "vue";
import login from "../../helpers/services/login/login"

const email:Ref<string> = ref('');
const password:Ref<string> = ref('');

const entrar= async (email:string,password:string)=>{
const usuario = await login(email,password)

const usuarioJSON:string = JSON.stringify(usuario);

localStorage.setItem('usuario', usuarioJSON);
}


</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>