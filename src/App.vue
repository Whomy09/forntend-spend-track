<script setup lang="ts">
import Navegation from './components/Navegation/NavegationBar.vue';
</script>
<!--
<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 w-100">
      <div class="d-flex flex-column justify-content-center col-2 h-100">
        <Navegation/>
      </div>
      <div class="col-10 h-100">
        <RouterView />
      </div>
    </div>
  </div>
</template>
-->

<template>
    <RouterView />
</template>


<style>
body {
  font-family: inter;
}
</style>
