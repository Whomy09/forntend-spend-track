<template>
    <div class="container h-100 pt-5">
      <div class="row">
        <Header title="Registro de presupuesto" />
      </div>
      <div class="bg-body-secondary h-75 mt-5 rounded-2 pt-5">
        <div class="d-flex flex-column align-items-center gap-5">
          <div class="d-flex align-items-center gap-3">
            <label class="text-body-secondary fw-semibold fs-5" for="fecha">Fecha:</label>
            <input class="rounder-1 border border-0 p-1 text-body-secondary" type="date" id="fecha" v-model="fecha" />
          </div>
          <div class="d-flex align-items-center gap-3">
            <label class="text-body-secondary fw-semibold fs-5" for="categoria">Categoria:</label>
            <input
              class="rounder-1 border border-0 p-1 text-body-secondary"
              type="text"
              id="categoria"
              placeholder="Ej... Transporte"
              v-model="categoria"
            />
          </div>
          <div class="d-flex align-items-center gap-3">
            <label class="text-body-secondary fw-semibold fs-5" for="cantidad">Cantidad:</label>
            <input
              class="rounder-1 border border-0 p-1 text-body-secondary"
              type="number"
              id="cantidad"
              placeholder="0"
              v-model="cantidad"
            />
          </div>

          <div class="d-flex align-items-center gap-3">
            <label class="text-body-secondary fw-semibold fs-5" for="fecha">Descripcion:</label>
            <textarea class="rounder-1 border border-0 p-1 text-body-secondary" type="date" id="fecha" v-model="descripcion"></textarea>
          </div>
          <div class="d-flex justify-content-center gap-5">
            <button class="btn btn-light border" style="width: 150px" @click="guardar">Guardar</button>
            <router-link to="/presupuestos" class="btn btn-light border" style="width: 150px">Cancelar</router-link>
          </div>
          <div 
        class="bg-danger-subtle w-25 rounded-2 text-danger p-3 text-center border border-3 border-danger-subtle"
        v-if="infoError"
        >
          {{ infoError }}
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import Header from '@/components/Header.vue'
  import type {IPresupuesto} from '../../interfaces/IPresupuesto';
  import createPresupuesto from '../../helpers/services/createPresupuesto/createPresupuesto';
  import { ref } from 'vue'
  import type {Ref} from 'vue';
  import {
  validarFecha,
  validarCategoria,
  validarCantidad
} from '../../helpers/validacionesRegistroGastos/validationRegistroGastos'

const fecha = ref('');
const categoria = ref('');
const cantidad = ref(0);
const descripcion=ref("");
let infoError = ref('');
let infoSuccess = ref('');

  function guardar() {
  let validFecha = validarFecha(fecha.value);
  let validCategoria = validarCategoria(categoria.value);
  let validCantidad = validarCantidad(cantidad.value);
  if (validFecha !== true) return infoError.value = validFecha;
  if (validCategoria !== true) return infoError.value = validCategoria;
  if (validCantidad !== true) return infoError.value = validCantidad;
  infoError.value = '';
  infoSuccess.value = 'Guardado correctamente!';

  let presupuesto:Ref<IPresupuesto> = ref({
    id:0,
    categoria: categoria.value,
    cantidad: cantidad.value,
    fecha: fecha.value,
    descripcion:descripcion.value
  });
  const usuarioJSON = localStorage.getItem('usuario');
  const jsonObj = JSON.parse(usuarioJSON);

 
  createPresupuesto(jsonObj.id,presupuesto.value);

}
  </script>
  
  <style scoped></style>
  