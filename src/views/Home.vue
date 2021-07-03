<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="mt-20"></div>
    <Cabecera title="Home / Muro"></Cabecera>
    <Publicacion></Publicacion>
    
    <Muro></Muro>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Cabecera from '@/components/Cabecera.vue'
import Publicacion from '@/components/Publicacion.vue'
import Muro from '@/components/Muro.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Cabecera,
    Publicacion,
    Muro
  }

}
</script>
