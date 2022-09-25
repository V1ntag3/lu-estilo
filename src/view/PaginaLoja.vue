<template>
    <Banner :image="dadosDaLoja.banner" />
    <Pesquisar />

    <Categoria v-for="categoria in categorias" :key="categoria.id" :categories="categoria.description"
        :products="categoria.products" />


</template>

<script>
import Banner from "@/components/Banner.vue";
import Pesquisar from "@/components/Pesquisar.vue"
import Lojas from '../services/lojasGET'
import Categoria from "@/components/Categoria.vue";

export default {
    name: 'App',
    components: {
        Banner,
        Pesquisar,
        Categoria
    }, props: {

    },
    data() {
        return {
            //tem que se retirado da url de alguma maneira
            slug_da_loja: "lu_estilo",
            dadosDaLoja: [],
            categorias: []
        }
    },
    created() {

        Lojas.dadosDaLoja(this.slug_da_loja).then(resposta => {
            this.dadosDaLoja = resposta.data
        },
            Lojas.listarCategorias(this.slug_da_loja).then(
                resposta => { this.categorias = resposta.data, console.log(resposta.data) }
            )

        )

    },
    methods: {

    }
}
</script>