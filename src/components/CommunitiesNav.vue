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
                    tag="router-link"
                    :to="'/community/'+menu.id"
                    class="has-text-weight-bold is-justify-content-left is-bg-white"
                    type="is-light"
                    size="is-default"
                    :icon-left="menu.icon"
                    :label="menu.text"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'communitiesNav',
    data() {
        return {
            communities: [
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
        }
    }
}
</script>