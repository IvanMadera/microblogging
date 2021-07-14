<template>
  <div class="about">
    <NavAdmin></NavAdmin>
    <div class="title">Ruta de pruebas</div>
  </div>
</template>

<style scoped>
  .absolute {
    position: absolute;
    width: 100%;
  }
</style>

<script>
import NavAdmin from '@/components/NavAdmin.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'About',
  components: {
    NavAdmin,
    Bienvenida
  }
}
</script>
