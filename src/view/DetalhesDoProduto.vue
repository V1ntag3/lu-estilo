<template>
    <div>
        <BotaoDeVoltar />
        <BannerProduto />
        <DescricaoDoProduto />
        <BarraInferiorCompra />
    </div>


</template>
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