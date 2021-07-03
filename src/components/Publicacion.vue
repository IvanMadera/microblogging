<template>
    <div class="container">
        <div class="card">
            <b-field class="mlr-10" >
                <b-input type="textarea" placeholder="Platicanos que piensas" minlength="1" maxlength="140"></b-input>
            </b-field>
            <div class="buttons ml-10">
                <b-button type="is-success">Publicar</b-button>
                    <b-dropdown v-model="nameTag" aria-role="list" append-to-body>
                        <template #trigger>
                                    <b-button :label="nameTag.text" type="is-primary" :icon-left="nameTag.icon" icon-right="menu-down" />
                                <!-- <b-button type="is-light" icon-left="tag-multiple" size="is-default">
                                    <strong>Tags</strong>
                                    <b-icon icon="menu-down"></b-icon>
                                </b-button> -->
                        </template>
                        <b-dropdown-item v-for="(etiqueta, index) in etiquetas" :key="index" :value="etiqueta" aria-role="listitem">
                            <div class="media">
                                <b-icon class="media-left" :icon="etiqueta.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{etiqueta.text}}</h3>
                                    <small>{{ etiqueta.description }}</small>
                                </div>
                            </div>
                        </b-dropdown-item>
                    </b-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Publicacion',
        data() {
            return {
                nameTag: { icon: 'tag-multiple', text: 'Tags' },
                etiquetas:[
                    { icon: 'lifebuoy', text: 'Ayuda', description: 'Solicitar apoyo con respecto a lo que refleja el post'},
                    { icon: 'head-question', text: 'Duda', description: 'Pregunta con respecto al post'},
                    { icon: 'boomerang', text: 'Offtopic', description: 'Tema fuera de los tags predeterminados'},
                    { icon: 'note-multiple', text: 'Trámites', description: 'Duda respecto a los trámites'},
                    { icon: 'bookshelf', text: 'Materias', description: 'Publicaciones sobre materias de la carrera'}
                ]
            }
        },
    }
</script>

<style scoped>
    .mlr-10 {
        margin: 30px 10px 0 10px;
    }
    .ml-10 {
        margin-left: 10px;
    }
</style>