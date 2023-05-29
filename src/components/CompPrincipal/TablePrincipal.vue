<template>
  <table class="container-fluid">
    <thead>
      <tr>
        <th class="border-bottom border-black">#</th>
        <th class="border-bottom border-black">CATEGORIA</th>
        <th class="border-bottom border-black">CANTIDAD</th>
        <th class="border-bottom border-black">TIPO DE PAGO</th>
        <th class="border-bottom border-black">FECHA</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(gasto, index) in gastos" :key="index">
        <td>{{ (index + 1) }}</td>
        <td>{{ gasto.categoria }}</td>
        <td>{{ gasto.cantidad }}</td>
        <td>{{ gasto.tipoPago }}</td>
        <td>{{ gasto.fecha }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {Ref} from "vue"
import type {IGasto} from '../../interfaces/IGasto'
import getAllGastos from "../../helpers/services/getAllGastos/getAllGastos"



let gastos:Ref<IGasto[]> = ref([]);


 async function llenarTablagastos() {
  gastos.value = await getAllGastos(); 

   
}

llenarTablagastos();

</script>

<style scoped></style>
