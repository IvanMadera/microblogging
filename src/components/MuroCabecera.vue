<template>
    <div>
        <div class="card">
            <section class="hero is-primary back">
                <div class="hero-body">
                    <p class="title">Muro</p>
                    <p class="subtitle">¡Ve lo que piensan los demás!</p><div class="buttons mt-5 is-centered">
                    <b-button rounded inverted outlined icon-left="minus-thick" type="is-primary" tag="router-link" :to="{ path: '/about' }">
                        Salirse
                    </b-button>
                </div>
                </div>
            </section>
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
    name: 'MuroCabecera'
}
</script>