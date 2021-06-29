<template>
    <div id="app">
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="@/assets/img/cabecera1.gif" alt="Lightweight UI components for Vue.js based on Bulma">
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
                <b-navbar-item>
                    <b-dropdown v-model="navigation" position="is-bottom-left" append-to-body aria-role="menu">
                        <template #trigger>
                            <div class="buttons">
                                <b-button type="is-light" icon-left="account-group" size="is-default">
                                    <strong>Communities</strong>
                                    <b-icon icon="menu-down"></b-icon>
                                </b-button>
                            </div>
                        </template>
                        <b-dropdown-item
                            v-for="(menu, index) in menus"
                            :key="index"
                            :value="menu" aria-role="listitem">
                            <div class="media">
                                <b-icon class="media-left" :icon="menu.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{menu.text}}</h3>
                                </div>
                            </div>
                        </b-dropdown-item>
                    </b-dropdown>
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item>
                    <b-field>
                        <b-input placeholder="Search..." type="search" icon="magnify" icon-clickable>
                        </b-input>
                    </b-field>
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
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                navigation: 'home',
                isScrollable: false,
                maxHeight: 200,
                menus: [
                    { icon: 'state-machine', text: 'Machine Learning' },
                    { icon: 'xml', text: 'Software' },
                    { icon: 'biohazard', text: 'Bioengineering' },
                    { icon: 'math-compass', text: 'Aplied Maths' },
                    { icon: 'robot', text: 'Robotics' },
                    { icon: 'cog', text: 'Operations' },
                    { icon: 'security', text: 'Cibersecurity' },
                    { icon: 'microsoft-visual-studio-code', text: 'Wolfcode' },
                    { icon: 'google-controller', text: 'Games' }
                ]
            }
        }
    }
</script>

<style>
@import "~bulma/css/bulma.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>