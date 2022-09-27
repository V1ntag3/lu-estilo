<template>

    <div id="fundo">
        <Banner :image="dadosDaLoja.banner" />

        <PesquisarItem />

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
import PesquisarItem from "@/components/PesquisarItem.vue"
import Categoria from "@/components/Categoria.vue";
import NavbarInferior from "../components/NavbarInferior.vue";

export default {
    components: {
        Banner, PesquisarItem, Categoria, NavbarInferior
    }
}
</script>

<style>
#fundo {
    padding-bottom: 100px;
}
</style>