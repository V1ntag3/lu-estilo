<template>
    <div id="container-finalizar-dinheiro">
        <BotaoDeVoltarBranco />

        <TituloPaginas :titulo="'Dinheiro'"
            :subtitulo="'Complemente a informação abaixo para finalizarmos a sua compra.'"
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

        <div id="finalizar-compra-dinheiro" v-if="troco.precisa != '' && troco.precisa != 'false'">
            <div id="observacao">
                <h5 id="observacao-prod">Troco para quanto?</h5>
                <input type="text" min="0" max="200" class="letra-400-14-24-00075" placeholder="R$ 0,00"
                    v-maska="mascara" v-model="troco.quanto" @keyup="verificar()">
            </div>
        </div>

        <div id="finalizar-compra-dinheiro" class="input-desativado"
            v-if="troco.precisa == '' || troco.precisa == 'false' ">
            <div id="observacao">
                <h5 id="observacao-prod">Troco para quanto?</h5>
                <input type="text" min="0" max="200" class="letra-400-14-24-00075" v-model="troco.quanto"
                    placeholder="R$ 0,00" disabled="disabled" v-maska="mascara">
            </div>
        </div>

        <router-link :to="{name: 'FinalizarCompraConferir'}">
            <BotaoLaranja :acao="'Avançar'"
                v-if="(troco.precisa != '' && troco.quanto !='') || troco.precisa == 'false'" @click="salvarTroco()" />
        </router-link>

        <div id="inativo">
            <BotaoLaranja :acao="'Avançar'"
                v-if="(troco.precisa == '' || troco.quanto == '') && troco.precisa != 'false' " />
        </div>
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
            mascara: '["R$ ,#","R$ ,##","R$ #,##","R$ ##,##", "R$ ###,##"]',
            troco: {
                precisa: "",
                quanto: ""
            }
        }
    }, methods: {
        verificar() {
            var numero = this.troco.quanto
            numero = numero.replace('R', '')
            numero = numero.replace('$', '')
            numero = numero.replace(' ', '')
            numero = numero.replace(',', '.')
            numero = parseFloat(numero, 10)
            if (numero > 100) {
                this.troco.quanto = "R$ 100,00"
            }
            console.log(numero)
        },
        salvarTroco() {
            const store = useUserStore();
            var numero = this.troco.quanto
            numero = numero.replace('R', '')
            numero = numero.replace('$', '')
            numero = numero.replace(' ', '')
            numero = numero.replace(',', '.')
            numero = parseFloat(numero)
            store.troco.precisa = this.troco.precisa
            store.troco.quanto = numero
        }
    }
}
</script>
<style>
#container-finalizar-dinheiro {
    padding-bottom: 50px;
}

#finalizar-compra-dinheiro {
    text-align: left;
    margin: 20px auto;
    margin-top: 50px;
}

#margem-top {
    margin-top: 50px;
}

#observacao-prod {
    color: #FFFFFF;
    margin-bottom: 10px;
}

#observacao input {
    padding-left: 20px;
    width: 100%;
    height: 52px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    color: #6E7191;
}

#observacao {
    margin: 0px 20px;
    margin-right: 40px;
}
</style>