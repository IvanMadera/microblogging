<template>
    <div class="hero is-primary is-fullheight is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-size-1"><strong>{{title}}</strong></h1>
                <p class=is-size-5>{{subtitle}}</p>
                <div class="buttons mt-5 is-centered">
                    <b-button rounded inverted outlined icon-left="plus-thick" type="is-primary" tag="router-link" :to="{ path: '/' }">
                        Unirse
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bienvenida',
    props: {
        title: String,
        subtitle: String
    }
}
</script>