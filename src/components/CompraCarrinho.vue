<template>
    <div id="compra-carrinho">
        <div id="cardvariosprodutos">
            <CardCarrinho />
        </div>

        <div class="separador"></div>
        <DadosDaCompra />
        <router-link :to="{name:'FinalizarCompraEndereco'}">
            <BotaoLaranja :acao="'Finalizar Compra'" />
        </router-link>
    </div>

    <NavbarInferior />
</template>
<script >
import CardCarrinho from "./CardCarrinho.vue";
import NavbarInferior from "./NavbarInferior.vue";
import BotaoLaranja from "./BotaoLaranja.vue";
import DadosDaCompra from "./DadosDaCompra.vue";
export default {
    components: {
        CardCarrinho,
        NavbarInferior,
        BotaoLaranja,
        DadosDaCompra
    }
}
</script>
<style>
#compra-carrinho {
    padding-bottom: 100px;
}

#cardvariosprodutos {
    margin: 0 auto;
}
</style>