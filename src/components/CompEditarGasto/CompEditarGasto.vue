<template>
  <div class="container h-100 pt-5">
    <div class="row">
      <Header title="Editar Gasto" />
    </div>
    <div class="bg-body-secondary mt-5 h-75 pt-3 rounded-2">
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

        <div class="d-flex gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="descripcion">Descripcion:</label>
          <textarea
            class="rounded-1 border border-0 p-1"
            id="descripcion"
            placeholder=""
            v-model="descripcion"
          ></textarea>
        </div>

        <div class="d-flex justify-content-center gap-5">
          <button class="btn btn-light border" @click="editar" style="width: 150px">Guardar</button>
          <router-link to="/" class="btn btn-light border" style="width: 150px"
            >Cancelar</router-link
          >
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
import {updateGasto} from '../../helpers/services/updateGasto/updateGasto'
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  validarFecha,
  validarTipoDePago,
  validarCategoria,
  validarCantidad
} from '../../helpers/validacionesRegistroGastos/validationRegistroGastos'

const data = localStorage.getItem('gasto')
const gasto = JSON.parse(data)

const router = useRouter()
const fecha = ref(gasto.fecha)
const tipoDePago = ref(gasto.tipoPago)
const categoria = ref(gasto.categoria)
const cantidad = ref(gasto.cantidad)
const descripcion = ref(gasto.descripcion)
let infoError = ref('')
let infoSuccess = ref('')

function editar() {
  let validFecha = validarFecha(fecha.value)
  let validtipoDePago = validarTipoDePago(tipoDePago.value)
  let validCategoria = validarCategoria(categoria.value)
  let validCantidad = validarCantidad(cantidad.value)
  if (validFecha !== true) return (infoError.value = validFecha)
  if (validtipoDePago !== true) return (infoError.value = validtipoDePago)
  if (validCategoria !== true) return (infoError.value = validCategoria)
  if (validCantidad !== true) return (infoError.value = validCantidad)
  infoError.value = ''
  infoSuccess.value = 'Guardado correctamente!'

  let gastoEdit = ref({
    categoria: categoria.value,
    cantidad: cantidad.value,
    fecha: fecha.value,
    tipoPago: tipoDePago.value,
    descripcion: descripcion.value
  })

  updateGasto(gasto.id, gastoEdit.value)

  setTimeout(() => {
    router.push('/')
  }, 2000)
}
</script>

<style scoped></style>
