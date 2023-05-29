<template>
  <table class="container-fluid">
    <thead>
      <tr>
        <th class="border-bottom border-black">#</th>
        <th class="border-bottom border-black">DESCRIPCION</th>
        <th class="border-bottom border-black">CATEGORIA</th>
        <th class="border-bottom border-black">FECHA</th>
        <th class="border-bottom border-black">CANTIDAD</th>
      </tr>
    </thead>
    <tbody>
     
        <tr v-for="(presupuesto,index) in presupuestos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ presupuesto.descripcion }}</td>
          <td>{{presupuesto.categoria }}</td>
          <td>{{ presupuesto.fecha }}</td>
          <td>{{ presupuesto.cantidad }}</td>
        </tr>
       
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type {IPresupuesto} from "../../interfaces/IPresupuesto"
import {ref} from "vue";
import type {Ref} from "vue";
import getAllPresupuestos from '../../helpers/services/getAllPresupuestos/getAllPresupuestos'

let presupuestos:Ref<IPresupuesto[]> = ref([]);

const usuarioJSON = localStorage.getItem('usuario');
const jsonObj = JSON.parse(usuarioJSON);

 async function llenarTablaPresupuestos(id:number) {
   presupuestos.value = await getAllPresupuestos(id); 
}

llenarTablaPresupuestos(jsonObj.id);




</script>

<style scoped>
#contenedor-tabla {
  overflow-y: scroll;
}
</style>