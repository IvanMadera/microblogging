<template>
    <div class="container" v-show="showPublication">
        <br>
        <div class="card">
            <div class="card-header p-2">
                <figure class="image is-48x48">
                   <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p class="card-header-title">
                    Ivan Gabriel Madera Torres
                </p>
                <b-dropdown class="is-align-items-center">
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
                        <div class="media" @click="showPublication = !showPublication">
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
                    <span class="tag is-warning mr-1 mt-1"><b-icon icon="lifebuoy" size="is-small" /><p>Interesante</p></span>
                </div>
            </div>
            <hr class="dropdown-divider">
            <div class="is-flex is-justify-content-space-between m-2">
                <div>
                    <span class="tag is-success mr-1"><b-icon icon="thumb-up" size="is-small" /><p>150</p></span>
                    <span class="tag is-danger"><b-icon icon="thumb-down" size="is-small" /><p>150</p></span>
                </div>
                <div>
                    <b-dropdown v-model="nameGift" aria-role="list" append-to-body>
                        <template #trigger>
                            <b-button class="is-small" type="is-gold" :label="nameGift.text" :icon-right="nameGift.icon"/>
                        </template>
                        <b-dropdown-item v-for="(gift, index) in gifts" :key="index" :value="gift" aria-role="listitem">
                        <div class="media">
                            <b-icon class="media-left" :icon="gift.icon"></b-icon>
                            <div class="media-content">
                                <h3>{{gift.text}}</h3>
                            </div>
                        </div>
                    </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            
            <footer class="card-footer">
                    <b-button expanded class="is-success" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                    <b-button expanded class="is-danger" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                    <b-button @click="showComment = !showComment" v-model="showComment" expanded class="is-info" label="Discuss" type="is-light" icon-left="comment-multiple-outline"/>
                    <b-button expanded class="is-link" label="Share" type="is-light" icon-left="share-all-outline"/>      
            </footer>
        </div>
        <div>
            <div class="media m-2" v-show="showComment">
                <div class>
                    <b-button
                    v-model="showMostrar"
                    type="is-text"
                    v-show="showMostrar"
                    @click="showMostrar = !showMostrar, showSubComment = !showSubComment">Mostrar los comentarios de la publicación</b-button>
                </div>
                <div>
                    <figure class="media-left image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
                    </figure>
                </div>
                <div class="media-content">
                    <b-field class="mt-1">
                        <b-input  class="is-flex is-flex-wrap-wrap" expanded placeholder="Escribe un comentario" maxlength="140"></b-input>
                        <p class="control">
                            <b-button class="button is-success" icon-right="send"></b-button>
                        </p>
                    </b-field>
                </div>
                    <article class="media"  v-show="showSubComment">
                        <figure class="media-left">
                            <p class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Carlos Iván Moo Barrera</strong>
                                    <br>
                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                    <br>
                                </p>
                            </div>
                        </div>
                    </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .is-gold {
        background-color: #ffa500;
        color: whitesmoke;
    }
</style>

<script>
export default {
    name: 'Muro',
    data() {
        return {
            showComment: false,
            showPublication: true,
            showSubComment: false,
            showMostrar: true,
            nameGift: { icon: 'gift', text: 'Premios'},
            gifts:[
                { icon: 'hexagon-outline', text: '20 Exp'},
                { icon: 'hexagon-slice-1', text: '50 Exp'},
                { icon: 'hexagon-slice-2', text: '100 Exp'},
                { icon: 'hexagon-slice-3', text: '200 Exp'},
                { icon: 'hexagon-slice-4', text: '500 Exp'},
                { icon: 'hexagon-slice-5', text: '1000 Exp'},
                { icon: 'hexagon-slice-6', text: '5000 Exp'}
            ]
        }
    }
}
</script>