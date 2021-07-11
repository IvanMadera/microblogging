<template>
    <div>
        <Bienvenida title="Electrónica" icono="memory"
        subtitle="Comunidad dedicada a los seguidores de la rama de la física que comprende todo lo
        relacionado con la ingeniería, física, tecnología y aplicaciones que traten la emisión, el flujo
        y el control de electrones u otras particulas cargadas eléctricamente en el vacío y la materia."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Electronica',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>