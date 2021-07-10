<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Instituto Tecnológico" icono="card-account-details-star-outline"
        subtitle="Comunidad dedicada a los estudiantes como medio para dar a conocer rápidamente avisos
        relacionados con diferentes tematicas de la carrera, de manera que puedan interactuar ágilmente
        a la hora de cualquier duda o asunto importante que puera darse del ITM."></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'ITM',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>