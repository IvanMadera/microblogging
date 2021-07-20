<template>
    <div>
        <div class="card">
            <section class="hero is-primary back">
                <div class="hero-body">
                    <p class="is-size-2 is-size-2-mobile has-text-weight-bold"><b-icon size="is-medium" :icon="icono"/> {{community}}</p>
                    <p class="is-size-4 is-size-5-mobile">¡Ve lo que piensan los demás!</p>
                    <div class="buttons is-centered mt-2">
                        <b-button
                        label="Salir"
                        rounded
                        inverted
                        outlined
                        icon-left="minus-thick"
                        type="is-primary"
                        tag="router-link"
                        :to="{ path: '/about' }"/>
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
    name: 'MuroCabecera',
    props: {
        community: String,
        icono: String
    }
}
</script>