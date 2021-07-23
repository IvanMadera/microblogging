<template>
    <div>
         <section>
            <p v-show="showtag" class="tag is-success content">{{ selectedOptions }}</p>
            <b-dropdown
                v-model="selectedOptions"
                aria-role="list">
                <template #trigger>
                    <b-button
                        type="is-light"
                        icon-right="menu-down">
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
        </section>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data() {
            return {
                selectedOptions: '',
                showtag: false,
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
            }
        }
}
</script>