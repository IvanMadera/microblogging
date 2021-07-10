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
                <b-navbar-item class="has-text-left">
                    <b-button
                    class="has-text-weight-bold"
                    type="is-success"
                    icon-left="account-circle"
                    label="Perfil"
                    size="is-default"/>
                </b-navbar-item>
            </template>
        </b-navbar>
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
                menus: [
                    { icon: 'face-recognition', text: 'Anime', ref: '/anime' },
                    { icon: 'poker-chip', text: 'Gaming', ref: '/gaming' },
                    { icon: 'laptop', text: 'Tecnología', ref: '/tecnologia' },
                    { icon: 'xml', text: 'Programación', ref: '/programacion' },
                    { icon: 'state-machine', text: 'Inteligencia Artificial', ref: '/ia' },
                    { icon: 'trophy-variant', text: 'Deportes', ref: '/deportes' },
                    { icon: 'security', text: 'Ciberseguridad', ref: '/ciberseguridad' },
                    { icon: 'monitor-edit', text: 'Software & Hardware', ref: '/s&h' },
                    { icon: 'memory', text: 'Electrónica', ref: '/electronica' },
                    { icon: 'music', text: 'Música', ref: '/musica' },
                    { icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico', ref: '/itm' },
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