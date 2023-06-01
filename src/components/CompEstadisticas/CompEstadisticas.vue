<template>
  <div class="w-100 d-flex justify-content-center align-items-center h-100 p-5">
    <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'BarChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Comida', 'Transporte', 'Servicios'],
        datasets: [{ data: [12000, 10000, 110000], backgroundColor: ['#DCF9E4', '#FAFCAF', '#256'] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped></style>
