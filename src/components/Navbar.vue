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
                        <b-button type="is-light" icon-left="home" size="is-default">
                            <strong>Home</strong>
                        </b-button>
                    </div>
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/report' }">
                    <div class="buttons">
                        <b-button type="is-light" icon-left="flag" size="is-default">
                            <strong>Reportes</strong>
                        </b-button>
                    </div>
                </b-navbar-item>
                <b-navbar-item class="has-text-left">
                    <b-dropdown aria-role="list">
                        <template #trigger="{ active }">
                            <div class="buttons">
                                <b-button
                                class="has-text-weight-bold"
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
                        <b-button type="is-success" icon-left="account-circle" size="is-default" @click="isCardModalActive = true, isImageModalActive = true">
                            <strong>Profile</strong>
                        </b-button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
            <b-modal v-model="isImageModalActive">
                <div class="card">
                    <div class="modal-card" style="width: auto">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Perfil</p>
                            <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                        </header>
                    </div>
                    <p class="image">
                        <img src="@/assets/ZeroTwoWindowsTerminal.png" width="900" height="600">
                    </p>
                        <div class="media-content">
                                <p class="title is-4">Zero Two</p>
                                <p class="subtitle is-6">002</p>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <br>
                            <a>Octavo Semestre</a>
                            <br>
                            <a>Ingeniería en Sistemas Computacionales</a>
                            <br>
                            <a>Tecnologías e Innovación</a>
                            <br>
                        </div>
                        <footer>1200 XP</footer>
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
                isImageModalActive: false,
                menus: [
                    { icon: 'face-recognition', text: 'Anime', ref: '/' },
                    { icon: 'poker-chip', text: 'Gaming', ref: '/about' },
                    { icon: 'laptop', text: 'Tecnología', ref: '/report' },
                    { icon: 'xml', text: 'Programación' },
                    { icon: 'state-machine', text: 'Inteligencia Artificial' },
                    { icon: 'trophy-variant', text: 'Deportes' },
                    { icon: 'security', text: 'Ciberseguridad' },
                    { icon: 'monitor-edit', text: 'Software & Hardware' },
                    { icon: 'memory', text: 'Electronica' },
                    { icon: 'music', text: 'Música' },
                    { icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico' },
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
                name: '',
                selected: null
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