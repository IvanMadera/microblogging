<template>
    <div class="container has-text-left">
        <div class="is-size-5 title m-10">
            <b-icon icon="home"/> > {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cabecera',
    props: {
        title: String
    }
}
</script>

<style scoped>
.m-10{
    margin: 10px
}
</style>