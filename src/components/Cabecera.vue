<template>
    <div class="container has-text-left">
        <div class="m-10">
            <h1 class="title">{{ title }}</h1>
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