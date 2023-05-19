<template>
  <router-link :to=props.ruta class="btn btn-light btn-lg fw-normal shadow-sm d-flex justify-content-start align-items-center gap-2 text-secondary">
    <i :class=props.icono></i>{{ props.content }}
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  icono: String,
  content: String,
  ruta: String
})
</script>
