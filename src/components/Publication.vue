<template>
    <div>
        <div class="card">
            <div class="card-header p-2 is-flex is-flex-direction-column">
                <div>
                    <b-field>
                        <b-input type="textarea" minlength="1" maxlength="140" v-model="content"></b-input>
                    </b-field>
                </div>
                <div class="buttons">
                    <b-button class="is-light-ocean" type="is-light">Publicar</b-button>
                    <b-dropdown
                        v-model="tag"
                        aria-role="list">
                        <template #trigger="{ active }">
                            <b-button
                                class="is-light-ocean"
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
                    <b-button v-show="showtag" class="ml-2 dis-button" disabled>{{tag}}</b-button>
                </div>
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
                content: "",
                tag: "",
                nameTag: { icon: 'tag-multiple', text: 'Tags' },
                etiquetas:[
                    {icon: 'lifebuoy', text: 'Ayuda', description: 'Solicitar apoyo con respecto a lo que refleja el post'},
                    {icon: 'head-question', text: 'Duda', description: 'Pregunta con respecto al post'},
                    {icon: 'boomerang', text: 'Offtopic', description: 'Tema fuera de los tags predeterminados'},
                    {icon: 'note-multiple', text: 'Trámites', description: 'Duda respecto a los trámites'},
                    {icon: 'bookshelf', text: 'Materias', description: 'Publicaciones sobre materias de la carrera'},
                    {icon: 'brain', text: 'Interesante', description: 'Publicaciones sobre cosas curiosas'},
                    {icon: 'alert-decagram', text: 'Spoiler', description: 'Publicaciones que contiene spoilers de un tema'},
                    {icon: 'newspaper', text: 'Cursos', description: 'Publicaciones sobre cursos y material autodidáctico'},
                    {icon: 'new-box', text: 'Novedad', description: 'Publicaciones sobre novedades respecto a cualquier tema'}
                ],
                showtag: false
            }
        },
        computed: {
            ...mapState(['tareas'])
        }
    }
</script>