<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Programación" icono="xml" bg="is-info"
        subtitle="Comunidad dedicada a los seguidores del arte de crear procesos utilizados para idear y
        ordenar acciones necesarias para la realicación de proyectos, preparación de máquinas o aparatos
        para su correcto funcionamineto en la forma deseada o elaboración de programas para su empleo en
        computadoras."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Programacion',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>