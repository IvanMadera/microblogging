<template>
    <div class="container">
        <div class="card">
            <b-field class="mlr-10" >
                <b-input type="textarea" placeholder="Platicanos que piensas" minlength="1" maxlength="140"></b-input>
            </b-field>
            <div class="buttons ml-10">
                <b-button type="is-success">Publicar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Publicacion',
    }
</script>

<style scoped>
    .mlr-10 {
        margin: 30px 10px 0 10px;
    }
    .ml-10 {
        margin-left: 10px;
    }
</style>