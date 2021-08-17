<template>
    <div>
        <div class="card">
            <section class="hero is-primary back-gradient border-card">
                <div class="hero-body">
                    <p class="is-size-2 is-size-2-mobile has-text-weight-bold">
                        <b-icon size="is-medium" :icon="currentCommunity.icon"/>
                        {{currentCommunity.text}}
                    </p>
                    <p class="is-size-4 is-size-5-mobile">¡Ve lo que piensan los demás!</p>
                    <div class="buttons is-justify-content-center mt-2">
                        <b-button
                        class="has-text-weight-bold is-ocean-inverted"
                        type="is-light"
                        size="is-small"
                        icon-left="check-circle"
                        label="Unirse"
                        v-show="!isActive"
                        @click="isActive = !isActive"
                        rounded/>
                         <b-button
                        class="has-text-weight-bold is-ocean-inverted"
                        type="is-light"
                        size="is-small"
                        icon-left="close-circle"
                        label="Salirse"
                        v-show="isActive"
                        @click="isActive = !isActive"
                        rounded/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'MuroCabecera',
    data() {
        return {
            isActive: false
        }
    },
    props: {
        community: String,
        icono: String
    },
    computed: {
        ...mapState(['currentCommunity'])
    }
}
</script>