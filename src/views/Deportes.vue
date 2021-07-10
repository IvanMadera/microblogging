<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Deportes" icono="trophy-variant"
        subtitle="Comunidad dedicada a los seguidores de aquella actividad física que involucra una serie
        de reglas o normas a desempeñar dentro de un espacio o área determinada, como lo pueden ser un campo
        de juego, cancha, pista, etc. a menudo asociada a la competitividad deportiva."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Deportes',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>