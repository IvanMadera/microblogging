<template>
    <div>
        <div class="card" v-for="(u, index) in user" :key="index">
            <div class="modal-card" style="width: auto;" scroll="keep">
                <header class="modal-card-head is-ocean-background">
                    <p class="modal-card-title has-text-weight-bold has-text-white">Perfil de usuario</p>
                </header>
            </div>
            <figure class="image is-4by3">
                <img :src="u.avatar" alt="Perfil">
            </figure><br>
            <div class="media-content mb-1">
                <b-tag class="m-1 is-blue-ocean-tag" size="is-medium">{{u.full_name}} {{u.first_lastname}} {{u.second_lastname}}</b-tag>
                <b-tag class="m-1 is-light-ocean-tag"  size="is-medium">E17081441</b-tag>
            </div>
            <div class="content m-1">
                <div> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
                <div class="has-text-info m-1">
                    <div><b-icon class="mr-1" icon="email-outline" size="is-small"/>{{u.email}}</div>
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
import axios from 'axios';

export default {
    name: 'ProfileModal',
    data() {
        return {
            user: []
        }
    },
    methods:{
        refreshData(){
            axios.get("http://localhost:8000/user")
            .then((response)=>{
                this.user=response.data;
            })
        }
    },
    mounted:function(){
        this.refreshData();
    } 
}
</script>