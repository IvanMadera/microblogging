<template>
    <div>
        <Bienvenida title="Gaming" icono="poker-chip"
        subtitle="Comunidad dedicada a los jugadores y amantes de los juegos electrónicos en diferentes
        de sus plataformas, como consolas X-Box, Playstation, Nintendo, plataformas móviles como celulares
        o simplemente en computadoras personales con rgb para más fps."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Gaming',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>