<template>
    <Logo :image="image" />

    <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street" :number="loja.number"
        :loja="loja"></LocalizacaoItem>

    <router-view />
</template>

<script >

import Logo from "../components/Logo.vue";
import Lojas from '../services/lojasGET'
import LocalizacaoItem from '../components/Localizacao.vue'
export default {
    name: 'App',
    components: {
        Logo, LocalizacaoItem
    },
    data() {
        return {
            lojas: [],
            image: {}
        }
    },
    created() {
        Lojas.listarLojas().then(resposta => {
            this.lojas = resposta.data.stores
            this.image = resposta.data.banner
        },


        )
    },
    setup() {


    },
}
</script>