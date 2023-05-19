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
        <td>{{ gasto.tipoDePago }}</td>
        <td>{{ gasto.fecha }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
interface Gasto {
  categoria: string
  cantidad: number
  fecha: string
  tipoDePago: string
}
const gastos: Array<Gasto> = [
{
  categoria: 'Alimento',
  cantidad: 1500,
  fecha: '18/05/2023',
  tipoDePago: 'Efectivo'
  }
]
</script>

<style scoped></style>
