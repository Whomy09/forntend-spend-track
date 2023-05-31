<template>
  <table class="container-fluid">
    <thead>
      <tr>
        <th class="border-bottom border-black">#</th>
        <th class="border-bottom border-black">DESCRIPCION</th>
        <th class="border-bottom border-black">CATEGORIA</th>
        <th class="border-bottom border-black">FECHA</th>
        <th class="border-bottom border-black">CANTIDAD</th>
        <th class="border-bottom border-black">OPCIONES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(presupuesto, index) in presupuestos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ presupuesto.descripcion }}</td>
        <td>{{ presupuesto.categoria }}</td>
        <td>{{ presupuesto.fecha }}</td>
        <td>${{ presupuesto.cantidad }}</td>
        <td class="d-flex gap-2">
          <button class="btn btn-danger" @click="eliminarPresupuesto(presupuesto.id)">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-warning" @click="editarPresupuesto(presupuesto)">
            <i class="fa-solid fa-pencil text-white"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { IPresupuesto } from '../../interfaces/IPresupuesto'
import { ref } from 'vue'
import type { Ref } from 'vue'
import getAllPresupuestos from '../../helpers/services/getAllPresupuestos/getAllPresupuestos'
import deletePresupuesto from '@/helpers/services/deletePresupuesto/deletePresupuesto'
import { useRouter } from 'vue-router'

let presupuestos: Ref<IPresupuesto[]> = ref([])

const usuarioJSON = localStorage.getItem('usuario')
const jsonObj = JSON.parse(usuarioJSON)
const router = useRouter()

async function llenarTablaPresupuestos(id: number) {
  presupuestos.value = await getAllPresupuestos(id)
}

function eliminarPresupuesto(id: number) {
  deletePresupuesto(id)
  location.reload()
}

function editarPresupuesto(presupuesto: IPresupuesto) {
  localStorage.setItem('presupuesto', JSON.stringify(presupuesto))
  router.push('/editar-presupuesto')
}

llenarTablaPresupuestos(jsonObj.id)
</script>

<style scoped>
#contenedor-tabla {
  overflow-y: scroll;
}
</style>
