<template>

    <div id="fundo">
        <Banner :image="dadosDaLoja.banner" />

        <Pesquisar />

        <Categoria v-for="categoria in categorias" :key="categoria.id" :categories="categoria.description"
            :products="categoria.products" />
    </div>

    <NavbarInferior id="navbar" />
</template>

<script>
import Banner from "@/components/Banner.vue";
import Pesquisar from "@/components/Pesquisar.vue"
import Lojas from '../services/lojasGET'
import Categoria from "@/components/Categoria.vue";
import NavbarInferior from "../components/NavbarInferior.vue";

export default {
    name: 'App',
    components: {
        Banner,
        Pesquisar,
        Categoria,
        NavbarInferior
    },
    data() {
        return {
            slug_da_loja: this.$route.params,
            dadosDaLoja: [],
            categorias: []
        }
    },
    created() {
        console.log("odfd")
        Lojas.dadosDaLoja(this.slug_da_loja.slug).then(resposta => {
            this.dadosDaLoja = resposta.data
        },
            Lojas.listarCategorias(this.slug_da_loja.slug).then(
                resposta => { this.categorias = resposta.data }
            )

        )

    }
}
</script>

<style>
#navbar #carrinho h5,
#minha-conta h5 {
    color: #395BB9;
    filter: opacity(0.4)
}

#navbar #carrinho,
#minha-conta {
    filter: opacity(0.4)
}

#navbar #carrinho:hover,
#minha-conta:hover {
    width: 33.3%;
    display: inline-block;
    filter: opacity(1)
}

#fundo {
    padding-bottom: 100px;
}
</style>