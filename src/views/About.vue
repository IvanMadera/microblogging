<template>
  <div class="about">
    <Navbar class="absolute"></Navbar>
    <Bienvenida title="Software" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eligendi eos accusamus suscipit deleniti explicabo pariatur id, iure ratione aspernatur impedit sequi nisi esse eius officia consectetur laboriosam dolor incidunt repudiandae aperiam tempore maiores. Vitae quasi repudiandae aperiam recusandae excepturi odit, iure accusantium aliquid libero molestiae ut nobis, reprehenderit nihil!"></Bienvenida>
  </div>
</template>

<style scoped>
  .absolute {
    position: absolute;
    width: 100%;
  }
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    Bienvenida
  }
}
</script>
