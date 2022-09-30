<template>
    <BotaoDeVoltarBranco />
    <TituloPaginas :titulo="'Finalizar compra'"
        :subtitulo="'confira as informações abaixo antes de finalizar a compra do produto'" :tituloForm="' '" />
    <div id="finalizar-compra">
        <div id="subtitulo-finalizar">
            <p>
                Onde você quer receber?
            </p>
        </div>
    </div>
    <CheckedBox :titulo="'Retirar na loja'" />
    <CheckedBox :titulo="'Rua Coelho resende, 2345 - 64000-200/Teresina - PI'" />


    <div id="adicionar-endereco">
        <img src="../assets/mais.png" alt="">
        <p>
            Adicionar endereço
        </p>
    </div>
    <div></div>
    <router-link :to="{name: 'FinalizarCompraTipoPagamento'}">
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
#adicionar-endereco {
    transition: 00.5s;
    cursor: pointer;
    margin: 0px auto;
    margin-top: 30px;
    width: 382px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 4px;
}

#adicionar-endereco p {
    display: inline-block;
    position: relative;
    left: 10px;
    top: 15px;
    width: 200px;
}

#adicionar-endereco img {
    position: relative;
    top: 15px;
}

#adicionar-endereco:hover {
    filter: opacity(0.4);
}
</style>