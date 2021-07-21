<template>
    <div>
        <div class="card">
            <section class="hero is-primary back">
                <div class="hero-body">
                    <p class="is-size-2 is-size-2-mobile has-text-weight-bold"><b-icon size="is-medium" :icon="icono"/> {{community}}</p>
                    <p class="is-size-4 is-size-5-mobile">¡Ve lo que piensan los demás!</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
    .back {
        background-image: linear-gradient(141deg, #334257 0%, #548CA8 71%, #EEEEEE 100%) !important;
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