<template>
    <div>
        <Bienvenida title="Música" icono="music"
        subtitle="Comunidad dedicada a los seguidores del arte de arreglar los sonidos en el tiempo para
        producir una composición a través de los elementos de melodía, armonía, ritmo y timbre. "></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Musica',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>