<template>
    <div class="container">
        <br><div class="card">
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Muro</p>
                    <p class="subtitle">¡Ve lo que piensan los demás!</p>
                </div>
            </section>
        </div><br>
        <div class="card">
            <div class="card-header p-2">
                <figure class="image is-48x48">
                   <img class="is-rounded mlt" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p class="card-header-title">
                    Ivan Gabriel Madera Torres
                </p>
                <span class="tag is-warning mr-1 mt-1">
                    Ayuda
                </span>
                <b-dropdown v-model="Muro" class="is-align-items-center">
                    <template #trigger>
                        <b-button type="is-light" :icon-left="Dots.icon"/>
                    </template>
                    <b-dropdown-item v-for="(opcion, index) in opciones" :key="index">
                        <div class="media">
                            <b-icon class="media-left" :icon="opcion.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{opcion.text}}</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="card-content has-text-left">
                <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
                </div>
                <hr class="dropdown-divider">
                <span class="tag is-success mr-1"><b-icon icon="thumb-up" size="is-small" /><p>150</p></span>
                <span class="tag is-danger"><b-icon icon="thumb-down" size="is-small" /><p>150</p></span>
            </div>
            <footer class="card-footer is-justify-content-space-around">
                    <b-button expanded class="is-success" :label="Like.text" type="is-light" :icon-left="Like.icon"/>
                    <b-button expanded class="is-danger" :label="Dislike.text" type="is-light" :icon-left="Dislike.icon"/>
                    <b-button expanded class="is-info" :label="Comment.text" type="is-light" :icon-left="Comment.icon"/>
                    <b-button expanded class="is-link" :label="Share.text" type="is-light" :icon-left="Share.icon"/>      
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Murov2',
    data() {
        return {
            Like: { icon: 'thumb-up-outline', text: 'Like'},
            Dislike: { icon: 'thumb-down-outline', text: 'Dislike'},
            Dots: { icon: 'dots-horizontal', text: 'Dislike'},
            Share: { icon: 'share-all-outline', text: 'Share'},
            Comment: { icon: 'comment-multiple-outline', text: 'Coment'},
            opciones: [
                {icon: 'alert-octagon', text: 'Reportar'},
                {icon: 'eye-off', text: 'Ocultar'}
            ]
        }
    },
}
</script>