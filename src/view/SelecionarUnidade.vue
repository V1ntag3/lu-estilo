
<template>
    <Logo :image="image" />
    <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street" :number="loja.number"
        :loja="loja"></LocalizacaoItem>
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
            lojas: [],
            image: {}
        }
    },
    created() {
        Lojas.listarLojas().then(resposta => {
            console.log(resposta.data)
            this.lojas = resposta.data.stores
            this.image = resposta.data.banner
        },
            this.listar

        )
    },
    methods: {

    }
}
</script>