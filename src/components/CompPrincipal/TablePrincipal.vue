<template>
  <table class="container-fluid table table-striped">
    <thead class="table-dark">
      <tr>
        <th class="border-bottom border-black">#</th>
        <th class="border-bottom border-black">DESCRIPCION</th>
        <th class="border-bottom border-black">CATEGORIA</th>
        <th class="border-bottom border-black">CANTIDAD</th>
        <th class="border-bottom border-black">TIPO DE PAGO</th>
        <th class="border-bottom border-black">FECHA</th>
        <th class="border-bottom border-black">OPCIONES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(gasto, index) in gastos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ gasto.descripcion }}</td>
        <td>{{ gasto.categoria }}</td>
        <td>${{ gasto.cantidad }}</td>
        <td>{{ gasto.tipoPago }}</td>
        <td>{{ gasto.fecha }}</td>
        <td class="d-flex gap-2">
          <button class="btn btn-danger" @click="eliminarGasto(gasto.id)">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-warning" @click="editarGasto(gasto)">
            <i class="fa-solid fa-pencil text-white"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { IGasto } from '../../interfaces/IGasto'
import getAllGastos from '../../helpers/services/getAllGastos/getAllGastos'
import deleteGasto from '@/helpers/services/deleteGasto/deleteGasto'
import { useRouter } from 'vue-router'

let gastos: Ref<IGasto[]> = ref([])
const usuarioJSON = localStorage.getItem('usuario')
const jsonObj = JSON.parse(usuarioJSON)
const router = useRouter()

async function llenarTablagastos(id: number) {
  gastos.value = await getAllGastos(id)
}

function eliminarGasto(id: number) {
  deleteGasto(id)
  location.reload()
}

function editarGasto(gasto: IGasto) {
  localStorage.setItem('gasto', JSON.stringify(gasto))
  router.push('/editar-gasto')
}

llenarTablagastos(jsonObj.id)
</script>

<style scoped></style>
