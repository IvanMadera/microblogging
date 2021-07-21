<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title color-header">
                    <span><b-icon class="mr-2" icon="podium"/>Líderes de Exp</span>
                </div>
            </div>
            <div class="card-content content-border">
                <div v-for="(usuario, index) in usuarios" :key="index" class="py-1">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Usuario</p>
                        <p class="subtitle is-6">Cant. Exp</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .color-header {
        background-color: #334257;
        color: white !important;
    }
    .content-border {
        border: 1px solid #334257;
    }
</style>

<script>
export default {
    name: 'TopLeader',
    data() {
        return {
            usuarios: [
                {nombre: 'Usuario', experiencia: 'Cant. Exp'},
                {nombre: 'Usuario', experiencia: 'Cant. Exp'},
                {nombre: 'Usuario', experiencia: 'Cant. Exp'}
            ]
        }
    }
}
</script>