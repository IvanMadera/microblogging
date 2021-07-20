<template>
    <div>
        <Navbar></Navbar>
            <section class="hero is-white is-fullheight">
                <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered reverse-columns">
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
                            <b-button icon-left= "face-recognition" tag="router-link" to="/anime">Anime</b-button>
                            <b-button icon-left= "poker-chip" tag="router-link" to="/gaming">Gaming</b-button>
                            <b-button icon-left= "laptop" tag="router-link" to="/tecnologia">Tecnología</b-button>
                            <b-button icon-left= "xml" tag="router-link" to="/programacion">Programación</b-button>
                            <b-button icon-left= "state-machine" tag="router-link" to="/ia">Inteligencia Artificial</b-button>
                            <b-button icon-left= "trophy-variant" tag="router-link" to="/deportes">Deportes</b-button>
                            <b-button icon-left= "security" tag="router-link" to="/ciberseguridad">Ciberseguridad</b-button>
                            <b-button icon-left= "monitor-edit" tag="router-link" to="/s&h">Software & Hardware</b-button>
                            <b-button icon-left= "memory" tag="router-link" to="/electronica">Electrónica</b-button>
                            <b-button icon-left= "music" tag="router-link" to="/musica">Música</b-button>
                            <b-button icon-left= "card-account-details-star-outline" tag="router-link" to="/itm">Instituto Tecnológico</b-button>
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

import Navbar from '@/components/Navbar.vue'
import Bienvenida from '@/components/Bienvenida.vue'
import CommunitiesNav from '@/components/CommunitiesNav.vue'

export default {
    name: 'HomeNew',
    components: {
        Navbar,
        Bienvenida,
        CommunitiesNav
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.b-tooltips {
        margin: center
}
</style>