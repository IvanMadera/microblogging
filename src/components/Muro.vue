<template>
    <div class="container" v-show="showPublication">
        <br>
        <div class="card">
        <div class="card pb-2">
            <div class="card-header p-2">
                <figure class="image is-48x48">
                   <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                <div>
                    <b-dropdown v-model="nameGift" aria-role="list" append-to-body>
                        <template #trigger>
                            <b-button class="is-small" type="is-gold" :label="nameGift.text" :icon-right="nameGift.icon"/>
                            <b-button class="is-small" type="is-success is-gold" :label="nameGift.text" :icon-right="nameGift.icon"/>
                        </template>
                        <b-dropdown-item v-for="(gift, index) in gifts" :key="index" :value="gift" aria-role="listitem">
                        <div class="media">
                    <b-button @click="showComment = !showComment" v-model="showComment" expanded class="is-info" label="Discuss" type="is-light" icon-left="comment-multiple-outline"/>
                    <b-button expanded class="is-link" label="Share" type="is-light" icon-left="share-all-outline"/>      
        </div><br>
        <div class="media m-2" v-show="showComment">
            <figure class="media-left image is-48x48">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
            </figure>
            <div class="media-content">
                <b-field class="mt-1">
                    <b-input  class="is-flex is-flex-wrap-wrap" expanded placeholder="Escribe un comentario" maxlength="140"></b-input>
                    <p class="control">
                        <b-button class="button is-success" icon-right="send"></b-button>
                    </p>
                </b-field>
        </div>
        <div class="card p-2" v-show="showComment">
            <div class="media has-background-white-ter p-1 borde">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content has-text-left">
                    <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                    <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                </div>
            </div>
            <div class="media has-background-white-ter p-1 borde">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content has-text-left">
                    <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                    <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                </div>
            </div>
            <div class="media has-background-white-ter p-1 borde">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content has-text-left">
                    <p class="title is-6 mt-1">Ivan Gabriel Madera Torres</p>
                    <p class="subtitle is-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc</p>
                </div>
            </div>
            <div class="is-flex is-flex-direction-row">
                <figure class="media-left image is-48x48">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
                </figure>
                <div class="media-content">
                    <b-field class="mt-1">
                        <b-input  class="is-flex is-flex-wrap-wrap" expanded placeholder="Escribe un comentario" maxlength="140"></b-input>
                        <p class="control">
                            <b-button class="button is-success" icon-right="send"></b-button>
                        </p>
                    </b-field>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .is-gold {
        background-color: #ffa500;
        color: whitesmoke;
        background-color: #ffa500 !important;
    }
    .borde {
        border-radius: 15px;
    }
</style>

