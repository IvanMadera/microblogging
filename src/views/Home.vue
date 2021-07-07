<template>
  <div class="home">
    <Navbar></Navbar>
    <Cabecera title="Muro"></Cabecera>
    <Publicacion></Publicacion>
    <MuroCabecera></MuroCabecera>
    <Muro></Muro>
    <Muro></Muro>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Cabecera from '@/components/Cabecera.vue'
import Publicacion from '@/components/Publicacion.vue'
import MuroCabecera from '@/components/MuroCabecera.vue'
import Muro from '@/components/Muro.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Cabecera,
    Publicacion,
    MuroCabecera,
    Muro
  }
}
</script>
