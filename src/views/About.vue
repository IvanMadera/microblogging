<template>
  <div>
    <NavAdmin/>
    <div class="container">
      <Cabecera title="Prueba"/>
      <Publicacion/>
      <div class="columns mt-2 is-desktop">
        <div class="column is-3 is-hidden-touch">
          <CommunitiesNav/>
        </div>
        <div class="column is-9">
          <div class="mb-2">
            <MuroCabecera/>
          </div>
          <Muro/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from '@/components/NavAdmin.vue'
import Cabecera from '@/components/Cabecera.vue'
import Publicacion from '@/components/Publicacion.vue'
import MuroCabecera from '@/components/MuroCabecera.vue'
import CommunitiesNav from '@/components/CommunitiesNav.vue'
import Muro from '@/components/Muro.vue'


export default {
  name: 'About',
  components: {
    NavAdmin,
    Cabecera,
    Publicacion,
    MuroCabecera,
    Muro,
    CommunitiesNav
  }
}
</script>
