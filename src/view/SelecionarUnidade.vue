
<template>
    <Logo />
    <router-link to="/loja">
        <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street"
            :number="loja.number"></LocalizacaoItem>
    </router-link>
    <Localizacao />
    <router-view />

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