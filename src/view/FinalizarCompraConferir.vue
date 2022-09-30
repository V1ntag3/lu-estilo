<template>
    <div id="finalizar-compra-conferir">
        <BotaoDeVoltarBranco />
        <TituloPaginas :titulo="'Finalizar compra'"
            :subtitulo="'confira as informações abaixo antes de finalizar a compra do produto'" :tituloForm="' '" />
        <CardCarrinho />
        <div class="separador"></div>
        <InformacoesItem :titulo="'Endereço de entrega'"
            :dados="'Rua coelho resende, 2137 - 64000-200 / Teresina - PI'" />
        <div class="separador"></div>
        <InformacoesItem :titulo="'pagamento na entrega'" :dados="'Cartão de crédito'" />
        <div class="separador"></div>
        <DadosDaCompra />
        <BotaoLaranja :acao="'Finalizar compra'" />
    </div>
</template>
<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import TituloPaginas from '@/components/TituloPaginas.vue';
import BotaoLaranja from '@/components/BotaoLaranja.vue';
import CardCarrinho from '../components/CardCarrinho.vue';
import DadosDaCompra from '../components/DadosDaCompra.vue';
import InformacoesItem from '@/components/InformacoesItem.vue';
export default {
    components: {
        BotaoDeVoltarBranco,
        TituloPaginas,
        BotaoLaranja,
        CardCarrinho,
        DadosDaCompra,
        InformacoesItem
    }
}
</script>
<style>
#finalizar-compra-conferir {
    padding-bottom: 100px;
}
</style>