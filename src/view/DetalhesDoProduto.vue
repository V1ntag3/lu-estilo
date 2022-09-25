<template>

    <BotaoDeVoltar />
    <BannerProduto />
    <DescricaoDoProduto />

</template>
<script>
import BotaoDeVoltar from "../components/BotaoDeVoltar.vue";
import BannerProduto from "../components/BannerProduto.vue";
import DescricaoDoProduto from "../components/DescricaoDoProduto.vue"

export default {
    components: {
        BotaoDeVoltar,
        BannerProduto, DescricaoDoProduto
    }
}
</script>
<style>

</style>