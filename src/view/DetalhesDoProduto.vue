<template>
    <div>

        <BotaoDeVoltar />
        <BannerProduto />
        <DescricaoDoProduto />
        <BarraInferiorCompra />
    </div>


</template>
<script setup>







import { useUserStore } from "../store";
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const store = useUserStore()

// eslint-disable-next-line no-unused-vars
const slug_da_loja = store.slug

// eslint-disable-next-line no-unused-vars
const produto = store.getCurrentProduto

onMounted(() => {

    store.fetchCurrentProduto(route.params.id, slug_da_loja);
})

</script>
<script>
import BotaoDeVoltar from "../components/BotaoDeVoltar.vue";
import BannerProduto from "../components/BannerProduto.vue";
import DescricaoDoProduto from "../components/DescricaoDoProduto.vue"
import BarraInferiorCompra from "../components/BarraInferiorCompra.vue"
export default {
    components: {
        BotaoDeVoltar,
        BannerProduto,
        DescricaoDoProduto,
        BarraInferiorCompra
    }
}
</script>


<style>

</style>