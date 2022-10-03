<template>

    <div id="fundo">
        <Banner :image="dadosDaLoja.banner" />

        <div id="pesquisar-container">

            <i class="bi bi-search" id="icon-pesquisar" style=" color: #395BB9"></i>
            <input type="search" name="pesquisar" id="pesquisar" placeholder="Digite a busca aqui" v-model="pesquisa">

        </div>

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
import Categoria from "@/components/Categoria.vue";
import NavbarInferior from "../components/NavbarInferior.vue";

export default {
    components: {
        Banner, Categoria, NavbarInferior
    }, data() {
        return {
            pesquisa: ''
        }
    }
}
</script>

<style>
#fundo {
    padding-bottom: 100px;
}

#pesquisar-container {
    background-size: 100%;
    background-color: #FFFFFF;

    margin-top: 20px;
    margin-bottom: 20px;

    width: 382px;
    height: 56px;

    display: inline-block;

    border-radius: 8px
}

#icon-pesquisar {
    margin: 10px 0px -5px 20px;
    display: inline-block;

}

#icon-pesquisar i {
    color: #395BB9;
}

#pesquisar {
    margin-top: 0px;
    margin-left: 10px;
    padding: 0 10px;

    display: inline-block;

    width: 330px;
    height: 56px;

    background: white;

    border: none;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;

}

#pesquisar:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
</style>