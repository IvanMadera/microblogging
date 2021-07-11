<template>
    <div>
        <Bienvenida title="Inteligencia Artificial" icono="state-machine"
        subtitle="Comunidad dedicada a los seguidores de la inteligencia expresada por máquinas, sus procesadores
        y sus softwares, análogos al cuerpo, el cerebro y la mente, respectivamente, a diferencia de la
        inteligencia natural demostrada por humanos y ciertos animales con cerebros complejos."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'IA',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>