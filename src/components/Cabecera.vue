<template>
    <div class="container has-text-left">
        <h1 class="title">{{ title }}</h1>
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