<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="@/assets/img/cabecera1.gif"
                        alt="Lightweight UI components for Vue.js based on Bulma">
                </b-navbar-item>
            </template>

            <template #start>
                <b-navbar-item>
                    <div class="buttons">
                        <b-button
                        tag="router-link" :to="{ path: '/' }"
                        class="is-ocean-inverted has-text-weight-bold"
                        type="is-light"
                        icon-left="home"
                        size="is-default"
                        label="Home"/>
                    </div>
                </b-navbar-item>
                <b-navbar-item>
                    <div class="buttons">
                        <b-button
                        tag="router-link"
                        :to="{ path: '/report' }"
                        class="is-ocean-inverted has-text-weight-bold"
                        type="is-light"
                        icon-left="flag"
                        size="is-default"
                        label="Reportes"/>
                    </div>
                </b-navbar-item>
                <b-navbar-item class="has-text-left">
                    <b-dropdown aria-role="list">
                        <template #trigger="{ active }">
                            <div class="buttons">
                                <b-button
                                class="has-text-weight-bold is-ocean-inverted"
                                type="is-light"
                                size="is-default"
                                icon-left="account-group"
                                label="Comunidades"
                                :icon-right="active ? 'menu-up' : 'menu-down'" />
                            </div>
                        </template>
                        <b-navbar-item
                            v-for="(menu, index) in communities"
                            :key="index"
                            :value="menu"
                            aria-role="listitem"
                            @click="sendCommunity(menu)">
                            <div class="media">
                                <b-icon class="media-left" :icon="menu.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{menu.text}}</h3>
                                </div>
                            </div>
                        </b-navbar-item>
                    </b-dropdown>
                </b-navbar-item>
            </template>
            <template #end>
                <b-navbar-item>
                    <b-autocomplete
                        class="has-text-left"
                        rounded
                        v-model="name"
                        :data="filteredDataArray"
                        placeholder="Search..."
                        icon="magnify"
                        clearable
                        @select="option => selected = option">
                        <template #empty>No results found</template>
                    </b-autocomplete>
                </b-navbar-item>
                <b-navbar-item>
                    <div class="buttons">
                        <b-button
                        class="has-text-weight-bold is-ocean"
                        type="is-light"
                        icon-left="account-circle"
                        label="Perfil"
                        size="is-default"
                        @click="isCardModalActive = true"/>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <b-modal v-model="isCardModalActive">
            <ProfileModal/>
        </b-modal>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import ProfileModal from '@/components/ProfileModal.vue'

    export default {
        name: 'Navbar',
        data() {
            return {
                navigation: 'home',
                isScrollable: false,
                maxHeight: 200,
                isCardModalActive: false,
                data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: ''
            }
        },
        components: {
            ProfileModal
        },
        methods: {
            sendCommunity(menu){
                this.$store.commit('setCommunity', menu)
                this.$router.push('/community/'+menu.id)
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            },
            ...mapState(['communities'])
        }
    }
</script>