<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">
                    <div class="image is-48x48 mt-custom">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Profile Image">
                    </div>
                    <b-button
                    class="ml-2 is-justify-content-left is-gray"
                    type="is-light"
                    expanded
                    rounded
                    @click="isModalActive = !isModalActive">Platicanos que piensas</b-button>
                </div>
            </div>
        </div>
        <b-collapse v-model="isModalActive">
            <Publication/>
        </b-collapse>
    </div>
</template>

<script>
import Publication from '@/components/Publication.vue'

export default {
    name: 'PubInput',
    data() {
        return {
            isModalActive: false
        }
    },
    components: {
        Publication
    }
}
</script>