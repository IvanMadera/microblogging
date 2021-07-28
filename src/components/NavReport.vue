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
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <div class="buttons">
                        <b-button class="is-ocean-inverted" type="is-light" icon-left="home" size="is-default">
                            <strong class="has-text-italic">Home</strong>
                        </b-button>
                    </div>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/report' }">
                    <div class="buttons">
                        <b-button class="is-ocean-inverted" type="is-light" icon-left="flag" size="is-default">
                            <strong>Reportes</strong>
                        </b-button>
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
                            v-for="(menu, index) in menus"
                            :key="index"
                            :value="menu" aria-role="listitem" tag="router-link" :to="'/community/'+menu.id">
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
import ProfileModal from '@/components/ProfileModal.vue'

    export default {
        name: 'Navbar',
        data() {
            return {
                navigation: 'home',
                isScrollable: false,
                maxHeight: 200,
                isCardModalActive: false,
                menus: [
                    { id: 'anime', icon: 'face-recognition', text: 'Anime'},
                    { id: 'gaming', icon: 'poker-chip', text: 'Gaming'},
                    { id: 'tecnologia', icon: 'laptop', text: 'Tecnología'},
                    { id: 'programacion', icon: 'xml', text: 'Programación'},
                    { id: 'ia', icon: 'state-machine', text: 'Inteligencia Artificial'},
                    { id: 'deportes', icon: 'trophy-variant', text: 'Deportes'},
                    { id: 'ciberseguridad', icon: 'security', text: 'Ciberseguridad'},
                    { id: 'sw&hw', icon: 'monitor-edit', text: 'Software & Hardware'},
                    { id: 'electronica', icon: 'memory', text: 'Electrónica'},
                    { id: 'musica', icon: 'music', text: 'Música'},
                    { id: 'itm', icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico'}
                ],
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
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>