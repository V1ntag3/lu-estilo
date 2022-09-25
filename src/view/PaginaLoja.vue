<template>
    <Banner :image="dadosDaLoja.banner" />
    <Pesquisar />
</template>

<script>
import Banner from "@/components/Banner.vue";
import Pesquisar from "@/components/Pesquisar.vue"
import Lojas from '../services/lojasGET'
export default {
    name: 'App',
    components: {
        Banner, Pesquisar
    }, props: {
        id: {
            type: String
        }

    },
    data() {

        return {
            //tem que se retirado da url de alguma maneira
            slug_da_loja: "lu_estilo_filial",
            dadosDaLoja: []
        }
    },
    created() {

        Lojas.dadosDaLoja(this.slug_da_loja).then(resposta => {
            this.dadosDaLoja = resposta.data
        },

        )

    },
    methods: {

    }
}
</script>