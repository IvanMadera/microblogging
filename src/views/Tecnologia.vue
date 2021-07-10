<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Tecnología" icono="laptop" bg="is-info"
        subtitle="Comunidad dedicada a los seguidores de la ciencia que se encarga de la resolución
        de problemas concretos, que permiten diseñar y crear bienes o servicios que facilitan la satisfacción
        de necesidades escenciales y aspiraciones de la humanidad."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'Tecnologia',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>