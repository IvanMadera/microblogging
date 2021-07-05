<template>
    <div class="container">
        <br>
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
                        <b-button type="is-light" icon-left="dots-horizontal"/>
                    </template>
                    <b-dropdown-item>
                        <div class="media">
                            <b-icon class="media-left" icon="alert-octagon"></b-icon>
                                <div class="media-content">
                                    <h3>Reportar</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <div class="media">
                            <b-icon class="media-left" icon="eye-off"></b-icon>
                                <div class="media-content">
                                    <h3>Ocultar</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="card-content has-text-left">
                <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
                </div>
            </div>
            <hr class="dropdown-divider">
            <div class="m-2 has-text-left">
                <span class="tag is-success mr-1"><b-icon icon="thumb-up" size="is-small" /><p>150</p></span>
                <span class="tag is-danger"><b-icon icon="thumb-down" size="is-small" /><p>150</p></span>
            </div>
            <footer class="card-footer is-justify-content-space-around">
                    <b-button expanded class="is-success" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                    <b-button expanded class="is-danger" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                    <b-button expanded class="is-info" label="Comment" type="is-light" icon-left="comment-multiple-outline"/>
                    <b-button expanded class="is-link" label="Share" type="is-light" icon-left="share-all-outline"/>      
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Murov2',
    data() {
        return {
        }
    },
}
</script>