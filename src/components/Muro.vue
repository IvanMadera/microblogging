<template>
    <div class="container" v-show="showPublication">
        <br>
        <div class="card pb-2">
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
                            <b-button class="is-small" type="is-light is-gold" :label="nameGift.text" :icon-right="nameGift.icon"/>
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
                <b-button expanded class="is-green" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                <b-button expanded class="is-red" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                <b-button expanded class="is-blue" label="Discuss" type="is-light" @click="showComment = !showComment" v-model="showComment" icon-left="comment-multiple-outline"/>
                <b-button expanded class="is-purple" label="Share" type="is-light" icon-left="share-all-outline"/> 
            </footer>
        </div>
        <div class="card p-2" v-show="showComment">
             <b-button
                    v-model="showMostrar"
                    type="is-text"
                    v-show="showMostrar"
                    @click="showMostrar = !showMostrar, showSubComment = !showSubComment">Mostrar los comentarios</b-button>
            <div v-show="showSubComment">
                <div class="media has-background-white-ter p-1 borde">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content has-text-left">
                        <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                        <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    </div>
                </div>
                <div class="media has-background-white-ter p-1 borde">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content has-text-left">
                        <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                        <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    </div>
                </div>
                <div class="media has-background-white-ter p-1 borde">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content has-text-left">
                        <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                        <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                    </div>
                </div>
            </div>
            <div class="mt-3 is-flex is-flex-direction-row p-1">
                <figure class="media-left image is-48x48">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
                </figure>
                <div class="media-content">
                    <b-field class="mt-1">
                        <b-input  class="is-flex is-flex-wrap-wrap" expanded placeholder="Escribe un comentario" maxlength="140"></b-input>
                        <p class="control">
                            <b-button class="button is-success" icon-right="send"></b-button>
                        </p>
                    </b-field>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .is-gold{
        background-color: #ffa500;
        color: white !important;
    }
    .is-gold:hover{
        background-color: #ffbf00;
    }
    .is-green {
        border-radius: 0;
        background-color: #effaf5 ;
        color: #257953 !important;
    }
    .is-green:hover {
        background-color: #e6f7ef;
    }
    .is-green:active {
        background-color: #dcf4e9;
    }
    .is-red {
        border-radius: 0;
        background-color: #feecf0 ;
        color: #cc0f35 !important;
    }
    .is-red:hover {
        background-color: #fde0e6;
    }
    .is-red:active {
        background-color: #fcd4dc;
    }
    .is-blue {
        border-radius: 0;
        background-color: #ecf4fe;
        color: #0d68ce !important;
    }
    .is-blue:hover {
        background-color: #dae9f6;
    }
    .is-blue:active {
        background-color: #d4e7fc;
    }
    .is-purple {
        border-radius: 0;
        background-color: #f2effb;
        color: #552fbc !important;
    }
    .is-purple:hover {
        background-color: #eae4f8;
    }
    .is-purple:active {
        background-color: #e2daf6;
    }
    .borde {
        border-radius: 15px;
    }
</style>

<script>
export default {
    name: 'Muro',
    data() {
        return {
            showComment: false,
            showPublication: true,
            showMostrar: true,
            showSubComment: false,
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