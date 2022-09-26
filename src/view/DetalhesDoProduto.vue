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
import Lojas from '../services/lojasGET'
export default {
    components: {
        BotaoDeVoltar,
        BannerProduto,
        DescricaoDoProduto,
        BarraInferiorCompra
    }, data() {
        return {
            slug_da_loja: {},
            produtoId: [],
            produto: []
        }
    }, created() {
        Lojas.dadosDaLoja(this.slug_da_loja, this.produtoId).then(resposta => {
            this.produto = resposta.data
        })
    }
}
</script>
<style>

</style>