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
                    :to="{path: menu.ref}"
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
                { icon: 'face-recognition', text: 'Anime', ref: '/community/anime' },
                { icon: 'poker-chip', text: 'Gaming', ref: '/community/gaming' },
                { icon: 'laptop', text: 'Tecnología', ref: '/community/tecnologia' },
                { icon: 'xml', text: 'Programación', ref: '/community/programacion' },
                { icon: 'state-machine', text: 'Inteligencia Artificial', ref: '/community/ia' },
                { icon: 'trophy-variant', text: 'Deportes', ref: '/community/deportes' },
                { icon: 'security', text: 'Ciberseguridad', ref: '/community/ciberseguridad' },
                { icon: 'monitor-edit', text: 'Software & Hardware', ref: '/community/sw&hw' },
                { icon: 'memory', text: 'Electrónica', ref: '/community/electronica' },
                { icon: 'music', text: 'Música', ref: '/community/musica' },
                { icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico', ref: '/community/itm' },
            ],
        }
    }
}
</script>