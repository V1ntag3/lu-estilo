<template>

    <div v-if="store.cartProducts.length != 0" id="compra-carrinho">
        <div id="card-varios-produtos">

            <CardCarrinho v-for="produto in store.cartProducts" :key="produto.product" :image="produto.image"
                :nome="produto.name" :id="produto.product" :quantidade="produto.quantity" :preco="produto.unit_price"
                :quantidadeMax="produto.available" />
        </div>

        <div class="separador"></div>
        <DadosDaCompra :valorSub="sub()" :valorEntrega="entrega()" :valorTotal="total()" />

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
    <div v-if="store.cartProducts.length == 0" id="compra-carrinho">
        <img src="../assets/carrinhovazio.png" alt="" id="carrinho-vazio">
    </div>

    <NavbarInferior />
</template>
<script setup>
const store = useUserStore()

const isLogged = store.isLogged

</script>

<script >
import CardCarrinho from "./CardCarrinho.vue";
import NavbarInferior from "./NavbarInferior.vue";
import BotaoLaranja from "./BotaoLaranja.vue";
import DadosDaCompra from "./DadosDaCompra.vue";
import { useUserStore } from '../store'

export default {
    components: {
        CardCarrinho,
        NavbarInferior,
        BotaoLaranja,
        DadosDaCompra
    }, methods: {
        total() {
            const store = useUserStore()
            var entrega = 0
            var subtotal = 0
            for (var i = 0; i < store.cartProducts.length; i++) {
                subtotal = subtotal + (store.cartProducts[i].unit_price * store.cartProducts[i].quantity)
            }
            var total = subtotal + entrega
            return total
        },
        entrega() {
            return 0
        },
        sub() {
            const store = useUserStore()
            var subtotal = 0
            for (var i = 0; i < store.cartProducts.length; i++) {
                subtotal = subtotal + (store.cartProducts[i].unit_price * store.cartProducts[i].quantity)
            }
            return subtotal
        }
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
    margin-top: 120px;
}
</style>