<template>
    <div v-if="produtos.length != 0" id="compra-carrinho">
        <div id="card-varios-produtos">

            <CardCarrinho v-for="produto in produtos" :key="produto.product" :image="produto.image" :nome="produto.name"
                :id="produto.product" :quantidade="produto.quantity" :preco="produto.unit_price"
                :quantidadeMax="produto.available" />
        </div>

        <div class="separador"></div>
        <DadosDaCompra :valorSub="subtotal" :valorEntrega="entrega" :valorTotal="total" />

        <div v-if="isLogged">
            <router-link :to="{name:'FinalizarCompraEndereco'}">
                <BotaoLaranja :acao="'Finalizar Compra'" />
            </router-link>
        </div>

        <div v-if="!isLogged">
            <router-link :to="{name:'CadastroLogin'}">
                <BotaoLaranja :acao="'Finalizar Compra'" />
            </router-link>
        </div>
    </div>
    <div v-if="produtos.length == 0" id="compra-carrinho">
        <img src="../assets/carrinhovazio.png" alt="" id="carrinho-vazio">
    </div>
    <NavbarInferior />
</template>
<script setup>
import { useUserStore } from '../store'

import { toRaw, computed } from "vue";
const store = useUserStore()


const precos = computed(() => {
    return toRaw(store.cartProducts)
})


const produtos = precos.value
var entrega = 0

var subtotal = 0
for (var i = 0; i < precos.value.length; i++) {
    subtotal = subtotal + (precos.value[i].unit_price * precos.value[i].quantity)
}

var total = subtotal + entrega

const isLogged = store.isLogged


</script>
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

#card-varios-produtos {
    margin: 0 auto;
}

#carrinho-vazio {
    margin-top: 200px;
}
</style>