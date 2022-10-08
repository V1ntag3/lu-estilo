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
    <div id="chekeds">
        <input type="radio" name="endereco" value="1" id="" v-model="enderecoValor" />
        <label for="">Retirar na loja</label>
    </div>

    <div id="chekeds" v-for="endereco in enderecos" :key="endereco.number">
        <input type="radio" name="endereco" value="2" v-model="enderecoValor" />
        <label for="">{{endereco.street}}, {{endereco.number}} - {{endereco.cep}} / {{endereco.city.name}} -
            {{endereco.city.uf}}</label>
    </div>





    <div id="adicionar-endereco">
        <img src="../assets/mais.png" alt="">
        <p>
            Adicionar endereço
        </p>
    </div>

    <router-link :to="{name: 'FinalizarCompraTipoPagamento'}">
        <BotaoLaranja :acao="'Avançar'" v-if="enderecoValor != '' " @click="salvarEndereco()" />
    </router-link>


    <div id="inativo">
        <BotaoLaranja :acao="'Avançar'" v-if="enderecoValor == '' " />
    </div>



</template>
<script setup>
import { onMounted, computed } from 'vue';




const store = useUserStore();

const enderecos = computed(() => {
    return store.enderecoUser
})


onMounted(() => {
    store.fetchEndereco(store.dataUser.id);
})
</script>


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
        return {
            enderecoValor: ""
        }
    }, methods: {
        salvarEndereco() {
            const store = useUserStore();
            store.pedido.address = parseInt(this.enderecoValor, 10)
            if (this.enderecoValor == '1') {
                store.pedido.delivery = false
            }
            else {
                store.pedido.delivery = true
            }
        }
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


#chekeds {
    display: block;

    width: 381px;

    background: #FFFFFF;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 10px;
}

#chekeds input {
    width: 16px;
    display: inline-block;
    position: relative;
    top: 5px;
    cursor: pointer;

}

#chekeds label {
    padding: 10px 0px;
    margin-left: 25px;
    position: relative;
    width: 300px;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #4E4B66;
    top: 2px;
    text-align: left;
}

#inativo {
    opacity: 0.4;
    cursor: default;
}
</style>