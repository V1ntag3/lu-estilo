<template>

    <div v-for="item in produtos" :key="item.length">
        <Carousel :slides="item.images" :interval="30000" controls indicators />
    </div>
    <BotaoDeVoltar />
    <DescricaoDoProduto v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.short_description"
        :opcoes="produto.stocks" :descricao="produto.description" :produto="produto" />
</template>

<script setup>

import { useUserStore } from "../store";
import { useRoute } from 'vue-router';
import { onMounted, computed, toRaw } from 'vue';

const route = useRoute();

const store = useUserStore()

onMounted(() => {
    store.fetchCurrentProduto(route.params.id);
})

const produtos = computed(() => {
    return toRaw(store.currentProduto);
})
</script>

<script>
import BotaoDeVoltar from "../components/BotaoDeVoltar.vue";
import Carousel from "../components/carousel/Carousel.vue"
import DescricaoDoProduto from "../components/DescricaoDoProduto.vue"
export default {
    components: {
        BotaoDeVoltar,
        Carousel,
        DescricaoDoProduto
    }
}
</script>