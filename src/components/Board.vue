<template>
    <div v-show="showPublication">
        <div class="card pb-2 mt-2 content-border" v-for="(p, index) in post" :key="index">
            <div class="card-header p-2">
                <figure class="image is-48x48">
                   <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p class="card-header-title">
                    {{p.user}}
                </p>
                <b-dropdown v-model="reports" class="is-align-items-center">
                    <template #trigger>
                        <b-button type="is-light" icon-left="dots-horizontal"/>
                    </template>
                    <b-dropdown-item value="1">
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
                    {{p.content}}
                    <span class="tag is-blue-ocean-tag mr-1 mt-1"><b-icon icon="tag" size="is-small" /><p>{{p.tag}}</p></span>
                </div>
            </div>
            <hr class="dropdown-divider">
            <div class="is-flex is-justify-content-space-between m-2">
                <div>
                    <span class="tag is-light-ocean-tag mr-1"><b-icon icon="thumb-up" size="is-small" /><p>{{p.like_q}}</p></span>
                    <span class="tag is-light-ocean-tag mr-1"><b-icon icon="thumb-down" size="is-small" /><p>{{p.dislike_q}}</p></span>
                    <span class="tag is-light-ocean-tag"><b-icon icon="comment" size="is-small" /><p>{{p.comment_q}}</p></span>
                </div>
                <div>
                    <div class="is-flex">
                        <b-button v-show="showtag" class="is-small dis-button mr-2" disabled>{{selected}} Exp</b-button>
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

                            <b-dropdown-item v-for="(gift, index) in gifts" :key="index" :value="gift.val" @click="showtag= true" aria-role="listitem">
                                <div class="media has-text-left">
                                    <b-icon class="media-left" :icon="gift.icon"></b-icon>
                                    <div class="media-content">
                                        <h3>{{gift.val}} Exp</h3>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <b-button expanded class="is-gray-reaction" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                <b-button expanded class="is-gray-reaction" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                <b-button expanded class="is-gray-reaction" label="Discuss" type="is-light" @click="showComment = !showComment" v-model="showComment" icon-left="comment-multiple-outline"/>
                <b-button expanded class="is-gray-reaction" label="Share" type="is-light" icon-left="share-all-outline"/> 
            </footer>
        </div>
        <div class="card p-2" v-show="showComment">
            <Comments/>
        </div>
    </div>
</template>

<script>
import Comments from '@/components/Comments.vue'
import axios from 'axios';
import {mapState} from 'vuex';

export default {
    name: 'Muro',
    data() {
        return {
            showComment: false,
            showPublication: true,
            showtag: false,
            selected: '',
            reports: 0,
            nameGift: { icon: 'gift', text: 'Premios'},
            gifts:[
                { icon: 'hexagon-outline', val: 20},
                { icon: 'hexagon-slice-1', val: 50},
                { icon: 'hexagon-slice-2', val: 100},
                { icon: 'hexagon-slice-3', val: 200},
                { icon: 'hexagon-slice-4', val: 500},
                { icon: 'hexagon-slice-5', val: 1000},
                { icon: 'hexagon-slice-6', val: 5000}
            ],
            post: []
        }
    },
    components: {
      Comments  
    },
    computed: {
        ...mapState(['tareas'])
    },
    methods:{
        refreshData(){
            axios.get("http://localhost:8000/post")
            .then((response)=>{
                this.post=response.data;
            })
        }
    },
    mounted:function(){
        this.refreshData();
    } 
}
</script>