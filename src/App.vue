<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navegation from './components/Navegation/NavegationBar.vue';
</script>

<template>
  <div class="container-fluid vh-100">
    <div class="row vh-100">
      <div class="d-flex flex-column justify-content-center col-2">
        <Navegation/>
      </div>
      <div class="col-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: inter;
}
</style>
