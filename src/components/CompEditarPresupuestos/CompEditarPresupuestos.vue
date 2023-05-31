<template>
  <div class="container h-100 pt-5">
    <div class="row">
      <Header title="Editar Presupuesto" />
    </div>
    <div class="bg-body-secondary h-75 mt-5 rounded-2 pt-4">
      <div class="d-flex flex-column align-items-center gap-5">
        <div class="d-flex align-items-center gap-3">
          <label class="text-body-secondary fw-semibold fs-5" for="fecha">Fecha:</label>
          <input
            class="rounder-1 border border-0 p-1 text-body-secondary"
            type="date"
            id="fecha"
            v-model="fecha"
          />
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
          <textarea
            class="rounder-1 border border-0 p-1 text-body-secondary"
            type="date"
            id="fecha"
            v-model="descripcion"
          ></textarea>
        </div>
        <div class="d-flex justify-content-center gap-5">
          <button class="btn btn-light border" style="width: 150px" @click="editar">Guardar</button>
          <router-link to="/presupuestos" class="btn btn-light border" style="width: 150px"
            >Cancelar</router-link
          >
        </div>
        <div
          class="bg-danger-subtle rounded-2 text-danger py-1 px-3 text-center border border-3 border-danger-subtle"
          v-if="infoError"
        >
          {{ infoError }}
        </div>
        <div
          class="bg-success-subtle w-25 rounded-2 text-success py-1 px-3 text-center border border-3 border-success-subtle"
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
import type { IPresupuesto } from '../../interfaces/IPresupuesto'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  validarFecha,
  validarCategoria,
  validarCantidad
} from '../../helpers/validacionesRegistroGastos/validationRegistroGastos'
import { updatePresupuesto } from '../../helpers/services/updatePresupuesto/updatePresupuesto'
import type { IUsuario } from '@/interfaces/IUsuario'

const dataP = localStorage.getItem('presupuesto')
const presupuesto: IPresupuesto = JSON.parse(dataP)

const dataU = localStorage.getItem('usuario')
const usuario: IUsuario = JSON.parse(dataP) 

const fecha = ref(presupuesto.fecha)
const categoria = ref(presupuesto.categoria)
const cantidad = ref(presupuesto.cantidad)
const descripcion = ref(presupuesto.descripcion)
let infoError = ref('')
let infoSuccess = ref('')
const router = useRouter()

function editar() {
  let validFecha = validarFecha(fecha.value)
  let validCategoria = validarCategoria(categoria.value)
  let validCantidad = validarCantidad(cantidad.value)
  if (validFecha !== true) return (infoError.value = validFecha)
  if (validCategoria !== true) return (infoError.value = validCategoria)
  if (validCantidad !== true) return (infoError.value = validCantidad)
  infoError.value = ''
  infoSuccess.value = 'Guardado correctamente!'

  let presupuestoEdit = ref({
    categoria: categoria.value,
    cantidad: cantidad.value,
    fecha: fecha.value,
    descripcion: descripcion.value
  })

  updatePresupuesto(presupuesto.id, presupuestoEdit.value)
  localStorage.removeItem('presupuesto')

  setTimeout(() => {
    router.push('/presupuestos')
  }, 2000)
}
</script>

<style scoped></style>
