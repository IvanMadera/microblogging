<template>
    <div class="is-flex is-justify-content-center">
        <div class="modal-card">
            <header class="modal-card-head is-ocean-background">
                <p class="modal-card-title has-text-weight-bold has-text-white">Perfil de Usuario</p>
            </header>
            <section class="modal-card-body">
                <p class="image is-4by3">
                    <img src="https://buefy.org/static/img/placeholder-1280x960.png" alt="profile user">
                </p>
                <div class="p-2">
                    <b-tag class="m-1 is-blue-ocean-tag" size="is-medium">Ivan Gabriel Madera Torres</b-tag>
                    <b-tag class="m-1 is-light-ocean-tag"  size="is-medium">E17081441</b-tag>
                </div>
                <div> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
                <div class="has-text-info m-1">
                    <div><b-icon class="mr-1" icon="email-outline" size="is-small"/>LE17081441@merida.tecnm.mx</div>
                    <div><b-icon class="mr-1" icon="school-outline" size="is-small"/>Ingenieria en Sistemas Computacionales</div>
                    <div><b-icon class="mr-1" icon="book-account-outline" size="is-small"/>Noveno ingreso</div>
                    <div><b-icon class="mr-1" icon="arrange-send-backward" size="is-small"/>Tecnologías e Innovación</div>
                </div>
                <div>
                    <b-tag class="mt-1 mb-2 is-deep-ocean-tag" size="is-medium">1200 XP</b-tag>
                </div>
            </section>
        </div>
    </div>
    <!-- <div>
        <div class="card" style="width: 640px;">
            <div class="modal-card" scroll="keep">
                <header class="modal-card-head is-ocean-background">
                    <p class="modal-card-title has-text-weight-bold has-text-white">Perfil de usuario</p>
                </header>
            </div>
            <figure class="image is-4by3">
                <img src="https://buefy.org/static/img/placeholder-1280x960.png" alt="Perfil">
            </figure><br>
            <div class="media-content mb-1">
                <b-tag class="m-1 is-blue-ocean-tag" size="is-medium">Ivan Gabriel Madera Torres</b-tag>
                <b-tag class="m-1 is-light-ocean-tag"  size="is-medium">E17081441</b-tag>
            </div>
            <div class="content m-1">
                <div> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
                <div class="has-text-info m-1">
                    <div><b-icon class="mr-1" icon="email-outline" size="is-small"/>LE17081441@merida.tecnm.mx</div>
                    <div><b-icon class="mr-1" icon="school-outline" size="is-small"/>Ingenieria en Sistemas Computacionales</div>
                    <div><b-icon class="mr-1" icon="book-account-outline" size="is-small"/>Noveno ingreso</div>
                    <div><b-icon class="mr-1" icon="arrange-send-backward" size="is-small"/>Tecnologías e Innovación</div>
                </div>
            </div>
            <footer><b-tag class="mt-1 mb-2 is-deep-ocean-tag" size="is-medium">1200 XP</b-tag></footer>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'ProfileModal',
    data() {
        return {
            
        }
    }
}
</script>