<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title color-header">
                    <span><b-icon class="mr-2" icon="podium"/>Líder de Experiencia</span>
                </div>
            </div>
            <div class="card-content content-border">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content has-text-left">
                        <p class="title is-5">Usuario</p>
                        <p class="subtitle is-italic is-6">Experiencia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .color-header {
        background-color: #126E82;
        color: white !important;
    }
    .content-border {
        border: 1px solid #51C4D3;
    }
</style>

<script>
export default {
    name: 'TopLeader'
}
</script>