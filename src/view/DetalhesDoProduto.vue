<template>
    <div>

        <BotaoDeVoltar />
        <BannerProduto />
        <DescricaoDoProduto v-for="produto in produtos" :key="produto.id" :id="produto.id"
            :nome="produto.short_description" :opcoes="produto.stocks" :descricao="produto.description"
            :produto="produto" />

    </div>


</template>
<script setup>



import { useUserStore } from "../store";
import { useRoute } from 'vue-router';
import { onMounted, computed, toRaw } from 'vue';

const route = useRoute();
const store = useUserStore()

// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars
const inter = computed(() => {
    return store.currentProduto
}
)

onMounted(() => {
    store.fetchCurrentProduto(route.params.id);

})

const produtos = toRaw(inter.value)
console.log(produtos)
</script>
<script>
import BotaoDeVoltar from "../components/BotaoDeVoltar.vue";
import BannerProduto from "../components/BannerProduto.vue";
import DescricaoDoProduto from "../components/DescricaoDoProduto.vue"
export default {
    components: {
        BotaoDeVoltar,
        BannerProduto,
        DescricaoDoProduto
    }
}
</script>


<style>

</style>