<template>
  <div>
    <NavAdmin/>
    <div class="container">
      <Cabecera title="Prueba"/>
      <Publicacion/>
      <div class="columns mt-2 is-hidden-mobile is-hidden-tablet-only">
        <div class="column is-3">
          <communitiesNav/>
        </div>
        <div class="column is-9">
          <div class="mb-2">
            <MuroCabecera/>
          </div>
          <Muro/>
        </div>
      </div>
      <div class="is-hidden-fullhd is-hidden-widescreen">
        <div class="my-2">
            <MuroCabecera/>
        </div>
        <Muro/>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from '@/components/NavAdmin.vue'
import Cabecera from '@/components/Cabecera.vue'
import Publicacion from '@/components/Publicacion.vue'
import MuroCabecera from '@/components/MuroCabecera.vue'
import communitiesNav from '@/components/communitiesNav.vue'
import Muro from '@/components/Muro.vue'


export default {
  name: 'About',
  components: {
    NavAdmin,
    Cabecera,
    Publicacion,
    MuroCabecera,
    Muro,
    communitiesNav
  }
}
</script>
