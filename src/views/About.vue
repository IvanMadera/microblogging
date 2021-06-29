<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'About',
  components: {
    Navbar
  }
}
</script>
