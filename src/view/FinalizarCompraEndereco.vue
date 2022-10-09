<template>
    <div id="container-finalizar-endereco">

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
            <input type="radio" name="endereco" value="1" id="" v-model="store.enderecoValor" />
            <label for="">Retirar na loja</label>
        </div>

        <div id="chekeds" v-for="endereco in enderecos" :key="endereco.number">
            <input type="radio" name="endereco" value="2" v-model="store.enderecoValor" />
            <label>{{endereco.street}}, {{endereco.number}} - {{endereco.cep}} / {{endereco.city.name}} -
                {{endereco.city.uf}}</label>
        </div>

        <div id="adicionar-endereco">
            <img src="../assets/mais.png" alt="">
            <p>
                Adicionar endereço
            </p>
        </div>

        <router-link :to="{name: 'FinalizarCompraTipoPagamento'}">
            <BotaoLaranja :acao="'Avançar'" v-if="store.enderecoValor != '' " @click="salvarEndereco()" />
        </router-link>


        <div id="inativo">
            <button id="botao-laranja-endereco" class="letra-600-14-24-00075"
                v-if="store.enderecoValor == '' ">Avançar</button>

        </div>

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

        }
    }, methods: {
        salvarEndereco() {
            const store = useUserStore();

            if (store.enderecoValor == '1') {
                store.pedido.delivery = false
            }
            else {
                store.pedido.address = store.enderecoUser[parseInt(store.enderecoValor, 10) - 2].id
                store.pedido.delivery = true
            }
        }
    }
}
</script>
<style>
#container-finalizar-endereco {
    padding-bottom: 50px;
}

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
    width: 382px;
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
    cursor: auto;
}

#botao-laranja-endereco {
    transition: 0.5s;
    color: white;
    border: none;
    background: #E74845;
    border-radius: 4px;
    width: 381px;
    height: 56px;
    margin-top: 30px;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>