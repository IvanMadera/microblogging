<template>
    <div class="hero is-fullheight is-info is-bold back">
        <div class="hero-body">
            <div class="container has-text-centered">
                <b-icon
                    class="mb-3"
                    :icon="icono"
                    size="is-large">
                </b-icon>
                <h1 class="title is-size-1"><strong>{{title}}</strong></h1>
                <p class=is-size-5>{{subtitle}}</p>
                <div class="buttons mt-5 is-centered">
                    <b-button rounded inverted outlined icon-left="plus-thick" type="is-primary" tag="router-link" :to="{ path: '/' }">
                        Unirse
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .back {
        background-image: linear-gradient(141deg, red 0%, #167df0 71%, #2868f7 100%) !important;
    }
</style>

<script>
export default {
    name: 'Bienvenida',
    props: {
        title: String,
        subtitle: String,
        icono: String
    }
}
</script>