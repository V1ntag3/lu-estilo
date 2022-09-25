
<template>
    <Logo />

    <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street" :number="loja.number">
    </LocalizacaoItem>


    <Localizacao />
</template>

<script>
import Logo from "../components/Logo.vue";
import Lojas from '../services/lojasGET'

export default {
    name: 'App',
    components: {
        Logo
    },
    data() {
        return {
            lojas: []
        }
    },
    created() {
        Lojas.listar().then(resposta => {
            console.log(resposta.data)
            this.lojas = resposta.data.stores
        },
            this.listar

        )
    },
    methods: {
        listar() {
            Lojas.listar().then(resposta => {
                this.lojas = resposta.data.stores
            })
        }
    }
}
</script>