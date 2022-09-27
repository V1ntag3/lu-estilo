<template>

    <div id="fundo">
        <Banner :image="dadosDaLoja.banner" />

        <Pesquisar />

        <Categoria v-for="categoria in categorias" :key="categoria.id" :categories="categoria.description"
            :products="categoria.products" />
    </div>

    <NavbarInferior id="navbar" />

</template>

<script setup>

import { useUserStore } from "../store";
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
const route = useRoute();
const store = useUserStore()
const dadosDaLoja = computed(() => {
    return store.getCurrentLoja
})
const categorias = computed(() => {
    return store.getCategorias
})
onMounted(() => {
    store.fetchDadosDaLoja(route.params.slug);
    store.fetchCategorias(route.params.slug)
})
</script>
<script >

import Banner from "@/components/Banner.vue";
import Pesquisar from "@/components/Pesquisar.vue"

import Categoria from "@/components/Categoria.vue";
import NavbarInferior from "../components/NavbarInferior.vue";
export default {
    name: 'App',
    components: {
        Banner, Pesquisar, Categoria, NavbarInferior
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