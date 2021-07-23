<template>
    <div v-show="showPublication">
        <div class="card pb-2 mt-2 border-card">
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vero laboriosam earum molestiae doloribus eum nemo possimus iusto nesciun.
                    <span class="tag is-blue-ocean mr-1 mt-1"><b-icon icon="lifebuoy" size="is-small" /><p>Interesante</p></span>
                </div>
            </div>
            <hr class="dropdown-divider">
            <div class="is-flex is-justify-content-space-between m-2">
                <div>
                    <span class="tag is-light-blue mr-1"><b-icon icon="thumb-up" size="is-small" /><p>150</p></span>
                    <span class="tag is-light-blue"><b-icon icon="thumb-down" size="is-small" /><p>150</p></span>
                </div>
                <div>
                    <div class="is-flex">
                        <b-button v-show="showtag" class="is-small dis-button mr-2" disabled>{{selected}}</b-button>
                        <b-dropdown
                            v-model="selected"
                            aria-role="list">
                            <template #trigger>
                                <b-button
                                    class="is-small"
                                    type="is-light is-deep-ocean"
                                    icon-right="gift">
                                    Premios
                                </b-button>
                            </template>

                            <b-dropdown-item v-for="(gift, index) in gifts" :key="index" :value="gift.text" @click="showtag= true" aria-role="listitem">
                                <div class="media has-text-left">
                                    <b-icon class="media-left" :icon="gift.icon"></b-icon>
                                    <div class="media-content">
                                        <h3>{{gift.text}}</h3>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
            
            <footer class="card-footer">
                <b-button expanded class="is-color-button" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                <b-button expanded class="is-color-button" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                <b-button expanded class="is-color-button" label="Discuss" type="is-light" @click="showComment = !showComment" v-model="showComment" icon-left="comment-multiple-outline"/>
                <b-button expanded class="is-color-button" label="Share" type="is-light" icon-left="share-all-outline"/> 
            </footer>
        </div>
        <div class="card p-2" v-show="showComment">
            <Comments/>
        </div>
    </div>
</template>

<style scoped>
    .is-deep-ocean, .is-deep-ocean:active{
        background-color: #132C33;
        color: white !important;
    }
    .is-deep-ocean:hover{
        background-color: #51C4D3;
    }
    .is-color-button, .is-color-button:active {
        border-radius: 0;
        background-color: #D8E3E7 ;
        color: #126E82 !important;
    }
    .is-color-button:hover {
        background-color: #c8d0d3;
    }
    .is-light-blue {
        background-color: #51C4D3;
        color: white;
    }
    .is-blue-ocean {
        background-color: #126E82;
        color: white;
    }
    .border-card {
        border: 1px solid #51C4D3;
    }
    .dis-button {
        background-color: #126E82 ;
        color: white !important;
    }
</style>

<script>
import Comments from '@/components/Comments.vue'

import {mapState} from 'vuex';

export default {
    name: 'Muro',
    data() {
        return {
            showComment: false,
            showPublication: true,
            showtag: false,
            selected: '',
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
    },
    components: {
      Comments  
    },
    computed: {
        ...mapState(['tareas'])
    }
}
</script>