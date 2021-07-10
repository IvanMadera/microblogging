<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Anime" icono="face-recognition"
        subtitle="Comunidad dedicada a los seguidores de la animación de origen japonés que se caracteriza
        por su grafismo crudo y argumentos con tematicas fantásticas o futuristas."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Anime',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>