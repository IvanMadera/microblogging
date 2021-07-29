<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title color-header">
                    <span><b-icon class="mr-2" icon="account-group"/>Comunidades</span>
                </div>
            </div>
            <div class="card-content content-border">
                <div class="content">
                    <b-button
                    expanded
                    v-for="(menu, index) in communities"
                    :key="index"
                    class="has-text-weight-bold is-justify-content-left is-bg-white"
                    type="is-light"
                    size="is-default"
                    :icon-left="menu.icon"
                    :label="menu.text" @click="sendCommunity(menu)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'communitiesNav',
    data() {
        return {
            
        }
    },
    methods: {
        sendCommunity(menu){
            this.$store.commit('setCommunity', menu)
            this.$router.push('/community/'+menu.id)
            console.log(menu);
        }
    },
    computed: {
        ...mapState(['communities'])
    }
}
</script>