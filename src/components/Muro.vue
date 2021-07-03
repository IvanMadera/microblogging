<template>
  <div class="container">
    <div class="card">
      <br />
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Muro
          </p>
          <p class="subtitle">
            ¡Ve lo que piensan los demás!
          </p>
        </div>
      </section>
      <br />
    </div>
    <div class="card">
      <br />
        <article class="container">
            <div class="card" align = "justify" style = "width: 700px">
            <header class="card-header">
                <figure class="image is-48x48">
                   <img class="is-rounded mlt" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p class="card-header-title">Carlos Iván Moo Barrera &nbsp;&nbsp;&nbsp;&nbsp;<b-button type="is-primary" icon-left="tag-multiple">Tag</b-button> </p>
                <b-dropdown v-model="Muro">
                    <template #trigger>
                        <b-button type="is-light" :icon-left="Dots.icon"/>
                    </template>
                    <b-dropdown-item v-for="(Opcione, index) in Opciones" :key="index">
                        <div class="media">
                            <b-icon class="media-left" :icon="Opcione.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{Opcione.text}}</h3>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </header>
            <div class="card-content">
                <div class="content">Estoy cansado de las tareas, de verdad es mucho lo que marcan las tareas hola xdxdxdxd me llamo
                <br />
                </div>
            </div>
            <footer class="card-footer">
                <div class="wb">
                    <b-button class="is-success" :label="Like.text" type="is-light" :icon-left="Like.icon"/>
                    <b-button class="is-danger" :label="Dislike.text" type="is-light" :icon-left="Dislike.icon"/>
                    <b-button class="is-info" :label="Comment.text" type="is-light" :icon-left="Comment.icon"/>
                    <b-button class="is-link" :label="Share.text" type="is-light" :icon-left="Share.icon"/>
                </div>
            </footer>
            </div>
        </article>
    </div>
  </div>
</template>

<style scoped>
    .wb {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mlt{
        margin: 7px 0 0 10px;
    }
</style>

<script>
export default {
    name: 'Muro',
    data() {
        return {
            Like: { icon: 'thumb-up-outline', text: 'Like'},
            Dislike: { icon: 'thumb-down-outline', text: 'Dislike'},
            Dots: { icon: 'dots-horizontal', text: 'Dislike'},
            Share: { icon: 'share-all-outline', text: 'Compartir'},
            Comment: { icon: 'comment-multiple-outline', text: 'Comentar'},
            Opciones: [
                {icon: 'alert-octagon', text: 'Reportar Publicación'},
                {icon: 'eye-off', text: 'Ocultar Publicación'}
            ]
        }
    },
}
</script>