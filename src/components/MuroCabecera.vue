<template>
    <div class="container">
        <br>
        <div class="card">
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Muro</p>
                    <p class="subtitle">¡Ve lo que piensan los demás!</p><div class="buttons mt-5 is-centered">
                    <b-button rounded inverted outlined icon-left="minus-thick" type="is-primary" tag="router-link" :to="{ path: '/about' }">
                        Salirse
                    </b-button>
                </div>
                </div>
            </section>
        </div>
    </div>
</template>