<template>
    <BotaoDeVoltarBranco />
    <TituloPaginas :titulo="'Finalizar compra'"
        :subtitulo="'confira as informações abaixo antes de finalizar a compra do produto'" :tituloForm="' '" />
    <div id="finalizar-compra">
        <div id="subtitulo-finalizar">
            <p>
                Pagar pelo app
            </p>
        </div>
    </div>
    <CheckedBox :titulo="'PIX'" />

    <div id="finalizar-compra">
        <div id="subtitulo-finalizar">
            <p>
                Pagar na entrega
            </p>
        </div>
    </div>

    <CheckedBox :titulo="'Cartão de crédito'" />
    <CheckedBox :titulo="'Dinheiro'" />
    <router-link :to="{name: 'FinalizarCompraConferir'}">
        <BotaoLaranja :acao="'Avançar'" />
    </router-link>

</template>

<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import TituloPaginas from '@/components/TituloPaginas.vue';
import BotaoLaranja from '@/components/BotaoLaranja.vue';
import CheckedBox from '@/components/CheckedBox.vue';
export default {
    components: {
        BotaoDeVoltarBranco,
        TituloPaginas,
        BotaoLaranja,
        CheckedBox
    }
}
</script>
<style>
#finalizar-compra {
    margin: 20px;
    margin-top: 30px;
}

#subtitulo-finalizar {
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
}
</style>