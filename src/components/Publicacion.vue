<template>
    <div class="container">
        <div class="card">
            <b-field class="mt-4 mx-2" >
                <b-input type="textarea" placeholder="Platicanos que piensas" minlength="1" maxlength="140" v-model="pub"></b-input>
            </b-field>
            <div class="buttons ml-2">
                <b-button type="is-success" @click="addPub">Publicar</b-button>
                <b-dropdown v-model="nameTag" aria-role="list" append-to-body>
                    <template #trigger>
                        <b-button :label="nameTag.text" type="is-primary" :icon-left="nameTag.icon" icon-right="menu-down"/>
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
    import {mapState} from 'vuex';

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
                    { icon: 'bookshelf', text: 'Materias', description: 'Publicaciones sobre materias de la carrera'},
                    { icon: 'brain', text: 'Interesante', description: 'Publicaciones sobre cosas curiosas'},
                    { icon: 'alert-decagram', text: 'Spoiler', description: 'Publicaciones que contiene spoilers de un tema'},
                    { icon: 'newspaper', text: 'Cursos', description: 'Publicaciones sobre cursos y material autodidáctico'},
                    { icon: 'new-box', text: 'Novedad', description: 'Publicaciones sobre novedades respecto a cualquier tema'}
                ],
                pub: '',
                icono: '',
                tag: ''
            }
        },
        computed: {
            ...mapState(['tareas'])
        },
        methods: {
            addPub() {
                this.tareas.push({
                    pub: this.pub,
                    tag: this.tag
                });
                this.pub = '';
            }
        }
    }
</script>