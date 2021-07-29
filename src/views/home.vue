<template>
    <div>
        <NavAdmin/>
            <section class="hero is-white is-fullheight">
                <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered reverse-columns is-desktop">
                    <div class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-5-desktop is-offset-1-desktop
                    is-5-widescreen is-offset-1-widescreen
                    is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                        <h1 class="title titled is-1 mb-6">
                        Digital Window Blog
                        </h1>
                            <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                            Expresa tus ideas y gustos con personas de tu misma comunidad estudiantil.
                            </h2>
                            <h2 class="subtitled subtitle is-3 mb-5">
                            Nuestras Comunidades:
                            </h2>
                        <div class="buttons">
                            <div class="center">
                                <b-button
                                v-for="(menu, index) in communities"
                                :key="index"
                                class="is-bg-white"
                                type="is-light"
                                size="is-default"
                                :icon-left="menu.icon"
                                :label="menu.text" @click="sendCommunity(menu)"/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-4-desktop is-offset-1-desktop
                    is-4-widescreen is-offset-1-widescreen
                    is-4-fullhd is-offset-1-fullhd">
                        <figure class="image is-square">
                        <img src="../assets/img/undraw_Swipe_profiles_re_tvqm.svg">
                        </figure>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import NavAdmin from '@/components/NavAdmin.vue'

export default {
    name: 'home',
    components: {
        NavAdmin
    },
    data() {
        return {

        }
    },
    methods: {
        sendCommunity(menu){
            this.$store.commit('setCommunity', menu)
            this.$router.push('/community/'+menu.id)
        }
    },
    computed: {
        ...mapState(['communities'])
    }
}
</script>