<template>
    <div>
        <Navbar></Navbar>
        <Cabecera title="Reportes"></Cabecera>
        <div class="container has-text-left">
            <b-table striped hoverable :data="data">
                <b-table-column field="data.id" label="ID" v-slot="props">
                    {{props.row.id}}
                </b-table-column>
                <b-table-column field="data.f_name" label="Nombre" v-slot="props">
                    {{props.row.f_name}}
                </b-table-column>
                <b-table-column field="data.l_name" label="Apellido" v-slot="props">
                    {{props.row.l_name}}
                </b-table-column>
                <b-table-column field="data.date" label="Fecha" v-slot="props" centered>
                    <span class="tag is-success">
                        {{props.row.date}}
                    </span>
                </b-table-column>
                <b-table-column field="data.reports" label="Reportes" v-slot="props" centered>
                    <span class="tag is-warning">
                        {{props.row.reports}}
                    </span>
                </b-table-column>
                <b-table-column field="data.content" label="Contenido" v-slot="props">
                    {{props.row.content}}
                </b-table-column>
                <b-table-column>
                    <b-button class="is-fullwidth" type="is-danger" icon-right="delete" size="is-small"/>
                </b-table-column>
            </b-table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cabecera from '@/components/Cabecera.vue'

export default {
    name: 'Report',
    components: {
        Navbar,
        Cabecera
    },
    data() {
        return {
            data: [
                { id: '1', f_name: 'Ivan', l_name: 'Madera', date: '2016-10-15', reports: 10, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, voluptatibus.'},
                { id: '2', f_name: 'Carlos', l_name: 'Moo', date: '2018-08-13', reports: 15, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias doloremque.'},
                { id: '3', f_name: 'Chris', l_name: 'Ruz', date: '2020-01-22', reports: 24, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, blanditiis.'},
                { id: '4', f_name: 'Andres', l_name: 'Ortiz', date: '2019-12-06', reports: 2, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, enim.'},
                { id: '5', f_name: 'Fernando', l_name: 'Herrera', date: '2017-04-19', reports: 21, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut.'}
            ]
        }
    }    
}
</script>