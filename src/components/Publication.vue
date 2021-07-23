<template>
    <div>
        <div class="card">
            <div class="card-header p-2 is-flex is-flex-direction-column">
                <div>
                    <b-field>
                        <b-input type="textarea" minlength="1" maxlength="140" v-model="pub"></b-input>
                    </b-field>
                </div>
                <div class="buttons">
                    <b-button type="is-light" @click="addPub">Publicar</b-button>
                    <b-dropdown
                        v-model="selected"
                        aria-role="list">
                        <template #trigger="{ active }">
                            <b-button
                                icon-left="tag"
                                type="is-light"
                                :icon-right="active ? 'menu-up' : 'menu-down'">
                                Tag
                            </b-button>
                        </template>

                        <b-dropdown-item v-for="(etiqueta, index) in etiquetas" :key="index" :value="etiqueta.text" @click="showtag= true" aria-role="listitem">
                            <div class="media has-text-left">
                                <b-icon class="media-left" :icon="etiqueta.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{etiqueta.text}}</h3>
                                    <small>{{ etiqueta.description }}</small>
                                </div>
                            </div>
                        </b-dropdown-item>
                    </b-dropdown>
                    <b-button v-show="showtag" class="ml-2 dis-button" disabled>{{selected}}</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .is-light, .is-light:active {
        background-color: #51C4D3;
        color: white !important;
    }
    .is-light:hover {
        background-color: #126E82;
    }
    .dis-button {
        background-color: #126E82 ;
        color: white !important;
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Publicacion',
        data() {
            return {
                nameTag: { icon: 'tag-multiple', text: 'Tags' },
                etiquetas:[
                    {id: '1', icon: 'lifebuoy', text: 'Ayuda', description: 'Solicitar apoyo con respecto a lo que refleja el post'},
                    {id: '2', icon: 'head-question', text: 'Duda', description: 'Pregunta con respecto al post'},
                    {id: '3', icon: 'boomerang', text: 'Offtopic', description: 'Tema fuera de los tags predeterminados'},
                    {id: '4', icon: 'note-multiple', text: 'Trámites', description: 'Duda respecto a los trámites'},
                    {id: '5', icon: 'bookshelf', text: 'Materias', description: 'Publicaciones sobre materias de la carrera'},
                    {id: '6', icon: 'brain', text: 'Interesante', description: 'Publicaciones sobre cosas curiosas'},
                    {id: '7', icon: 'alert-decagram', text: 'Spoiler', description: 'Publicaciones que contiene spoilers de un tema'},
                    {id: '8', icon: 'newspaper', text: 'Cursos', description: 'Publicaciones sobre cursos y material autodidáctico'},
                    {id: '9', icon: 'new-box', text: 'Novedad', description: 'Publicaciones sobre novedades respecto a cualquier tema'}
                ],
                showtag: false,
                pub: '',
                selected: ''
            }
        },
        computed: {
            ...mapState(['tareas'])
        },
        methods: {
            addPub() {
                this.tareas.push({
                    pub: this.pub
                });
                this.pub = '';
            }
        }
    }
</script>