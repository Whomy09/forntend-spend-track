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
       <!-- 
        <tr v-for="">
          <td>{{ index }}</td>
          <td>{{ elm.description }}</td>
          <td>{{ index }}</td>
          <td>{{ index }}</td>
          <td>{{ index }}</td>
        </tr>
        -->
      <tr>
        <td>1</td>
        <td>Compre arroz</td>
        <td>alimento</td>
        <td>10/05/2023</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import getAllPresupuestos from '../../helpers/services/getAllPresupuestos/getAllPresupuestos'
let presupuestos = [];
 function llenarTablaPresupuestos() {
   presupuestos = getAllPresupuestos(); 
}
llenarTablaPresupuestos();
</script>

<style scoped>
#contenedor-tabla {
  overflow-y: scroll;
}
</style>