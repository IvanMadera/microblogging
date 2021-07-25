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
                                tag="router-link"
                                :to="{path: menu.ref}"
                                class="is-bg-white"
                                type="is-light"
                                size="is-default"
                                :icon-left="menu.icon"
                                :label="menu.text"/>
                            </div>
                        </div>
                    </div>
                    <!-- hola -->
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

import NavAdmin from '@/components/NavAdmin.vue'

export default {
    name: 'home',
    components: {
        NavAdmin
    },
    data() {
        return {
            communities: [
                { icon: 'face-recognition', text: 'Anime', ref: '/community' },
                { icon: 'poker-chip', text: 'Gaming', ref: '/' },
                { icon: 'laptop', text: 'Tecnología', ref: '/' },
                { icon: 'xml', text: 'Programación', ref: '/' },
                { icon: 'state-machine', text: 'Inteligencia Artificial', ref: '/' },
                { icon: 'trophy-variant', text: 'Deportes', ref: '/' },
                { icon: 'security', text: 'Ciberseguridad', ref: '/' },
                { icon: 'monitor-edit', text: 'Software & Hardware', ref: '/' },
                { icon: 'memory', text: 'Electrónica', ref: '/' },
                { icon: 'music', text: 'Música', ref: '/' },
                { icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico', ref: '/' },
            ],
        }
    },
}
</script>

<style scoped>
.b-tooltips {
        margin: center
}
</style>