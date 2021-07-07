<template>
    <div class="container">
        <br>
        <div class="card">
            <div class="card-header p-2">
                <figure class="image is-48x48">
                   <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p class="card-header-title">
                    Ivan Madera Torres
                </p>
                <span class="tag is-warning mr-1 mt-1"><b-icon icon="lifebuoy" size="is-small" /><p>Ayuda</p></span>
                <b-dropdown v-model="Muro" class="is-align-items-center">
                    <template #trigger>
                        <b-button type="is-light" icon-left="dots-horizontal"/>
                    </template>
                    <b-dropdown-item>
                        <div class="media">
                            <b-icon class="media-left" icon="alert-octagon"></b-icon>
                                <div class="media-content">
                                    <h3>Reportar</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <div class="media">
                            <b-icon class="media-left" icon="eye-off"></b-icon>
                                <div class="media-content">
                                    <h3>Ocultar</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="card-content has-text-left">
                <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
                </div>
            </div>
            <hr class="dropdown-divider">
            <div class="is-flex is-justify-content-space-between m-2">
                <div>
                    <span class="tag is-success mr-1"><b-icon icon="thumb-up" size="is-small" /><p>150</p></span>
                    <span class="tag is-danger"><b-icon icon="thumb-down" size="is-small" /><p>150</p></span>
                </div>
                <div>
                    <b-dropdown v-model="nameTag" aria-role="list" append-to-body>
                        <template #trigger>
                            <b-button class="is-small" type="is-blue" :label="nameTag.text" :icon-right="nameTag.icon"/>
                        </template>
                        <b-dropdown-item v-for="(etiqueta, index) in etiquetas" :key="index" :value="etiqueta" aria-role="listitem">
                        <div class="media">
                            <b-icon class="media-left" :icon="etiqueta.icon"></b-icon>
                            <div class="media-content">
                                <h3>{{etiqueta.text}}</h3>
                            </div>
                        </div>
                    </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            
            <footer class="card-footer">
                    <b-button expanded class="is-success" label="Like" type="is-light" icon-left="thumb-up-outline"/>
                    <b-button expanded class="is-danger" label="Dislike" type="is-light" icon-left="thumb-down-outline"/>
                    <b-button expanded class="is-info" label="Discuss" type="is-light" icon-left="comment-multiple-outline"/>
                    <b-button expanded class="is-link" label="Share" type="is-light" icon-left="share-all-outline"/>      
            </footer>
        </div>
    </div>
</template>

<style scoped>
    .is-blue {
        background-color: #ffa500;
        color: whitesmoke;
    }
</style>

<script>
export default {
    name: 'Muro',
    data() {
        return {
            nameTag: { icon: 'gift', text: 'Premios'},
            etiquetas:[
                { icon: 'hexagon-outline', text: '20 Exp'},
                { icon: 'hexagon-slice-1', text: '50 Exp'},
                { icon: 'hexagon-slice-2', text: '100 Exp'},
                { icon: 'hexagon-slice-3', text: '200 Exp'},
                { icon: 'hexagon-slice-4', text: '500 Exp'},
                { icon: 'hexagon-slice-5', text: '1000 Exp'},
                { icon: 'hexagon-slice-6', text: '5000 Exp'}
            ]
        }
    }
}
</script>