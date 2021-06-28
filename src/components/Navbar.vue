<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
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
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    <div class="buttons">
                        <b-button type="is-light" icon-left="account-group" size="is-default">
                            <strong>Communities</strong>
                        </b-button>
                    </div>
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item>
                    <b-field>
                        <b-input placeholder="Search..." type="search" icon="magnify" icon-clickable
                            @icon-click="searchIconClick">
                        </b-input>
                    </b-field>
                </b-navbar-item>
                <b-navbar-item tag="div">
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
        name: 'Navbar'
    }
</script>