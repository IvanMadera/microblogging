<template>
    <div class="card">
        <b-button
        v-model="showMostrar"
        type="is-text"
        v-show="showMostrar"
        label="Mostrar los comentarios"
        @click="showMostrar = !showMostrar, showSubComment = !showSubComment"/>
        <div v-show="showSubComment">
            <CommentUnit/>
            <CommentUnit/>
            <CommentUnit/>
        </div>
        <div class="mt-3 is-flex is-flex-direction-row p-1">
            <figure class="media-left image is-48x48">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
            </figure>
            <div class="media-content">
                <b-field class="mt-1">
                    <b-input  class="is-flex is-flex-wrap-wrap" expanded placeholder="Escribe un comentario" maxlength="140"></b-input>
                    <p class="control">
                        <b-button
                        class="button is-ocean"
                        type="is-light"
                        icon-right="send"/>
                    </p>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
import CommentUnit from '@/components/CommentUnit.vue'

export default {
    name: 'Comments',
    data() {
        return {
            showMostrar: true,
            showSubComment: false,
        }
    },
    components: {
        CommentUnit
    }
}
</script>