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
        }
    }
}
</script>