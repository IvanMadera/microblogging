<template>
    <div>
        <Navbar></Navbar>
        <Bienvenida title="Software & Hardware" icono="monitor-edit"
        subtitle="Comunidad dedicada a los seguidores de los componentes fisicos y tangibles que forman
        parte de una computadora como la CPU o la placa base, y del equipamento lógico e intangible como
        lo son los programas y datos que almacena la computadora"></Bienvenida>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
    name: 'S&H',
    components: {
        Navbar,
        Bienvenida
    }
}
</script>