<template>
  <div>
    <NavAdmin/>
    <div class="container">
      <Cabecera title="Home"/>
      <PubInput/>
      <div class="columns mt-2 is-desktop">
        <div class="column is-3 is-hidden-touch">
          <CommunitiesNav/>
        </div>
        <div class="column is-9">
          <div class="mb-2">
            <MuroCabecera icono="face-recognition" community="Anime"/>
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
import PubInput from '@/components/PubInput.vue'
import Publicacion from '@/components/Publicacion.vue'
import MuroCabecera from '@/components/MuroCabecera.vue'
import CommunitiesNav from '@/components/CommunitiesNav.vue'
import Muro from '@/components/Muro.vue'

export default {
  name: 'Home',
  components: {
    NavAdmin,
    Cabecera,
    PubInput,
    Publicacion,
    MuroCabecera,
    Muro,
    CommunitiesNav
  }
}
</script>
