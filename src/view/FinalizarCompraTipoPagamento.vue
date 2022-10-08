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
    <Transition name="list">
        <div id="chekeds" v-if="currentLoja.payment_pix">
            <input type="radio" name="endereco" value="3" id="" v-model="pagamentoValor" />
            <label for="">PIX</label>
        </div>
    </Transition>
    <div id="finalizar-compra">
        <div id="subtitulo-finalizar">
            <p>
                Pagar na entrega
            </p>
        </div>
    </div>
    <Transition name="list">
        <div id="chekeds" v-if="currentLoja.payment_debit">
            <input type="radio" name="endereco" value="0" id="" v-model="pagamentoValor" />
            <label for="">Cartão de Débito</label>
        </div>

    </Transition>
    <Transition name="list">
        <div id="chekeds" v-if="currentLoja.payment_credit">
            <input type="radio" name="endereco" value="1" id="" v-model="pagamentoValor" />
            <label for="">Cartão de Crédito</label>
        </div>

    </Transition>
    <Transition name="list">
        <div id="chekeds" v-if="currentLoja.payment_money">
            <input type="radio" name="endereco" value="2" id="" v-model="pagamentoValor" />
            <label for="">Dinheiro</label>
        </div>
    </Transition>
    <router-link :to="{name: 'FinalizarCompraConferir'}">

        <BotaoLaranja :acao="'Avançar'" v-if="pagamentoValor != '' && pagamentoValor !='2'"
            @click="salvarPagamento()" />

    </router-link>

    <router-link :to="{name: 'FinalizarCompraDinheiro'}">

        <BotaoLaranja :acao="'Avançar'" v-if="pagamentoValor != '' && pagamentoValor == '2' "
            @click="salvarPagamento()" />

    </router-link>
    <div id="inativo">

        <BotaoLaranja :acao="'Avançar'" v-if="pagamentoValor == '' " />

    </div>

</template>

<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import TituloPaginas from '@/components/TituloPaginas.vue';
import BotaoLaranja from '@/components/BotaoLaranja.vue';
import { useUserStore } from "../store";

export default {
    components: {
        BotaoDeVoltarBranco,
        TituloPaginas,
        BotaoLaranja
    }, data() {
        const store = useUserStore();

        return {
            pagamentoValor: "",
            currentLoja: store.currentLoja
        }
    }, methods: {
        salvarPagamento() {
            const store = useUserStore();
            store.pedido.payment = parseInt(this.pagamentoValor, 10)
        }
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