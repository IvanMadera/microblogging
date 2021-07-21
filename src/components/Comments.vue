<template>
    <div>
        <b-button
            v-model="showMostrar"
            type="is-text"
            v-show="showMostrar"
            @click="showMostrar = !showMostrar, showSubComment = !showSubComment">Mostrar los comentarios</b-button>
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
                        <b-button class="button is-light is-blue-ocean" icon-right="send"></b-button>
                    </p>
                </b-field>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .is-blue-ocean {
        background-color: #126E82;
        color: white !important;
    }
    .is-blue-ocean:hover {
        background-color: #51C4D3;
    }
</style>

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