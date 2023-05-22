<template>
  <div class="container h-100 pt-5">
    <div class="row">
      <Header title="Registro de gastos" />
    </div>
    <div class="bg-body-secondary mt-5 h-75 pt-5 rounded-2">
      <div class="d-flex flex-column align-items-center gap-5">
        <div class="d-flex align-items-center gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="fecha">Fecha:</label>
          <input
            class="rounded-1 border border-0 p-1 text-body-secondary"
            type="date"
            id="fecha"
            v-model="fecha"
          />
        </div>
        <div class="d-flex gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="tipo-de-pago"
            >Tipo de pago:</label
          >
          <input
            class="rounded-1 border border-0 p-1"
            type="text"
            id="tipo-de-pago"
            placeholder="Ej... Efectivo"
            v-model="tipoDePago"
          />
        </div>
        <div class="d-flex gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="categoria">Categoria:</label>
          <input
            class="rounded-1 border border-0 p-1"
            type="text"
            id="categoria"
            placeholder="Ej... Comida"
            v-model="categoria"
          />
        </div>
        <div class="d-flex gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="cantidad">Cantidad:</label>
          <input
            class="rounded-1 border border-0 p-1"
            type="number"
            id="cantidad"
            placeholder="0"
            v-model="cantidad"
          />
        </div>
        <div class="d-flex justify-content-center gap-5">
          <button class="btn btn-light border" @click="guardar" style="width: 150px">Guardar</button>
          <button class="btn btn-light border" style="width: 150px">Cancelar</button>
        </div>
        <div 
        class="bg-danger-subtle w-25 rounded-2 text-danger p-3 text-center border border-3 border-danger-subtle"
        v-if="infoError"
        >
          {{ infoError }}
        </div>
        <div 
        class="bg-success-subtle w-25 rounded-2 text-success p-3 text-center border border-3 border-success-subtle"
        v-if="infoSuccess"
        >
          {{ infoSuccess }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import {
  validarFecha,
  validarTipoDePago,
  validarCategoria,
  validarCantidad
} from '../../helpers/validacionesRegistroGastos/validationRegistroGastos'

const fecha = ref('');
const tipoDePago = ref('');
const categoria = ref('');
const cantidad = ref(0);
let infoError = ref('');
let infoSuccess = ref('');

function guardar() {
  let validFecha = validarFecha(fecha.value);
  let validtipoDePago = validarTipoDePago(tipoDePago.value);
  let validCategoria = validarCategoria(categoria.value);
  let validCantidad = validarCantidad(cantidad.value);
  if (validFecha !== true) return infoError.value = validFecha;
  if (validtipoDePago !== true) return infoError.value = validtipoDePago;
  if (validCategoria !== true) return infoError.value = validCategoria;
  if (validCantidad !== true) return infoError.value = validCantidad;
  infoError.value = '';
  infoSuccess.value = 'Guardado correctamente!';
}
</script>

<style scoped></style>
