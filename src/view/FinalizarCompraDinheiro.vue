<template>
    <BotaoDeVoltarBranco />


    <TituloPaginas :titulo="'Dinheiro'" :subtitulo="'Complemente a informação abaixo para finalizarmos a sua compra.'"
        :tituloForm="'Você irá precisar de troco?'" />


    <div id="margem-top"></div>
    <div id="chekeds">
        <input type="radio" value="true" v-model="troco.precisa" />
        <label for="">Sim</label>
    </div>

    <div id="chekeds">
        <input type="radio" value="false" v-model="troco.precisa" />
        <label for="">Não</label>
    </div>




    <div id="finalizar-compra-dinheiro">
        <div id="observacao">
            <h5 id="observacao-prod">Troco para quanto?</h5>
            <input type="number" min="0" max="200" class="letra-400-14-24-00075" placeholder="Digite aqui..."
                v-model="troco.quanto">
        </div>
    </div>





    <router-link :to="{name: 'FinalizarCompraConferir'}">
        <BotaoLaranja :acao="'Avançar'" v-if="(troco.precisa != '' && troco.quanto !='') || troco.precisa == 'false'"
            @click="salvarTroco()" />
    </router-link>

    <div id="inativo">
        <BotaoLaranja :acao="'Avançar'"
            v-if="(troco.precisa == '' || troco.quanto == '') && troco.precisa != 'false' " />
    </div>
</template>
<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import TituloPaginas from "@/components/TituloPaginas.vue";
import BotaoLaranja from "@/components/BotaoLaranja.vue"
import { useUserStore } from "../store";
export default {
    components: {
        BotaoDeVoltarBranco,
        TituloPaginas,
        BotaoLaranja
    }, data() {
        return {
            troco: {
                precisa: '',
                quanto: ''
            }
        }
    }, methods: {
        salvarTroco() {
            const store = useUserStore();
            store.troco.precisa = this.troco.precisa
            store.troco.quanto = parseInt(this.troco.quanto, 10)
        }
    }
}
</script>
<style>
#finalizar-compra-dinheiro {
    text-align: left;
    margin: 20px;
    margin-top: 50px;
}

#margem-top {
    margin-top: 50px;
}
</style>