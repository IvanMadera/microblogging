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
                <b-navbar-item align="left">
                    <b-dropdown v-model="navigation" position="is-bottom-left" append-to-body aria-role="menu">
                        <template #trigger>
                            <div class="buttons">
                                <b-button type="is-light" icon-left="account-group" size="is-default">
                                    <strong>Communities</strong>
                                    <b-icon icon="menu-down"></b-icon>
                                </b-button>
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
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <div class="buttons">
                        <b-button type="is-success" icon-left="account-circle" size="is-default">
                            <strong>Profile</strong>
                        </b-button>
                    </div>
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
                    { icon: 'state-machine', text: 'Machine Learning', ref: '/' },
                    { icon: 'xml', text: 'Software', ref: '/about' },
                    { icon: 'biohazard', text: 'Bioengineering' },
                    { icon: 'math-compass', text: 'Aplied Maths' },
                    { icon: 'robot', text: 'Robotics' },
                    { icon: 'cog', text: 'Operations' },
                    { icon: 'security', text: 'Cibersecurity' },
                    { icon: 'microsoft-visual-studio-code', text: 'Wolfcode' },
                    { icon: 'google-controller', text: 'Games' }
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