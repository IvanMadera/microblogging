<template>
    <div>
        <div class="card">
            <div class="modal-card" style="width: auto;" scroll="keep">
                <header class="modal-card-head is-ocean-background">
                    <p class="modal-card-title has-text-weight-bold has-text-white">Perfil de usuario</p>
                </header>
            </div>
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Perfil">
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
    </div>
</template>

<script>
export default {
    name: 'ProfileModal'
}
</script>