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
                <b-navbar-item class="has-text-left is-hidden-desktop">
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
                            :value="menu" aria-role="listitem" tag="router-link" :to="{path: menu.ref}">
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
            <div class="card">
                <div class="modal-card" style="width: auto;" scroll="keep">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Perfil</p>
                    </header>
                </div>
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Perfil">
                </figure><br>
                <div class="media-content mb-1">
                    <b-tag class="m-1" type="is-dark" size="is-medium">Carlos Iván Moo Barrera</b-tag>
                    <b-tag class="m-1" type="is-info" size="is-medium">E17081431</b-tag>
                </div>
                <div class="content m-1">
                    <div> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                    <div class="has-text-primary m-1">
                        <div><b-icon class="mr-1" icon="email-outline" size="is-small"/>LE17081431@merida.tecnm.mx</div>
                        <div><b-icon class="mr-1" icon="school-outline" size="is-small"/>Ingenieria en Sistemas Computacionales</div>
                        <div><b-icon class="mr-1" icon="book-account-outline" size="is-small"/>Noveno ingreso</div>
                        <div><b-icon class="mr-1" icon="arrange-send-backward" size="is-small"/>Tecnologías e Innovación</div>
                    </div>
                </div>
                <footer><b-tag class="mt-1 mb-2" type="is-success" size="is-medium">1200 XP</b-tag></footer>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                navigation: 'home',
                isScrollable: false,
                maxHeight: 200,
                isCardModalActive: false,
                menus: [
                    { icon: 'face-recognition', text: 'Anime', ref: '/community' },
                    { icon: 'poker-chip', text: 'Gaming', ref: '/' },
                    { icon: 'laptop', text: 'Tecnología', ref: '/' },
                    { icon: 'xml', text: 'Programación', ref: '/' },
                    { icon: 'state-machine', text: 'Inteligencia Artificial', ref: '/' },
                    { icon: 'trophy-variant', text: 'Deportes', ref: '/' },
                    { icon: 'security', text: 'Ciberseguridad', ref: '/' },
                    { icon: 'monitor-edit', text: 'Software & Hardware', ref: '/' },
                    { icon: 'memory', text: 'Electrónica', ref: '/' },
                    { icon: 'music', text: 'Música', ref: '/' },
                    { icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico', ref: '/' },
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