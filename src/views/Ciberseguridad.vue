<template>
    <div>
        <Bienvenida title="Ciberseguridad" icono="security"
        subtitle="Comunidad dedicada a los seguidores de la seguridad tecnologica de la información,
        relacionada con el enfoque de protección de la infraestructura computacional, especialmente
        la información contenida en una computadora o circulante a través de una red."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Ciberseguridad',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>