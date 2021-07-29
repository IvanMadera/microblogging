<template>
    <div>
        <div class="card">
            <section class="hero is-primary back-gradient">
                <div class="hero-body">
                    <p class="is-size-2 is-size-2-mobile has-text-weight-bold">
                        <b-icon size="is-medium" :icon="currentCommunity.icon"/>
                        {{currentCommunity.text}}
                    </p>
                    <p class="is-size-4 is-size-5-mobile">¡Ve lo que piensan los demás!</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'MuroCabecera',
    props: {
        community: String,
        icono: String
    },
    computed: {
        ...mapState(['currentCommunity'])
    }
}
</script>