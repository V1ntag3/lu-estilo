<template>
    <div id="finalizar-compra-conferir">
        <BotaoDeVoltarBranco />
        <TituloPaginas :titulo="'Finalizar compra'"
            :subtitulo="'confira as informações abaixo antes de finalizar a compra do produto'" :tituloForm="' '" />

        <CardCarrinho v-for="produto in store.cartProducts" :key="produto.product" :image="produto.image"
            :nome="produto.name" :id="produto.product" :quantidade="produto.quantity" :preco="produto.unit_price"
            :quantidadeMax="produto.available" />
        <div class="separador"></div>

        <InformacoesItem :titulo="'Endereço de entrega'" :dados="endereco" />

        <div class="separador"></div>

        <InformacoesItem :titulo="'pagamento na entrega'" :dados="pagamento" />

        <div class="separador"></div>

        <DadosDaCompra :valorSub="sub()" :valorEntrega="entrega()" :valorTotal="total()" />

        <BotaoLaranja :acao="'Finalizar compra'" @click="enviarPedido()" v-if="store.cartProducts.length != 0" />
        <div id="finalizar">
            <button id="botao-inativo" class="letra-600-14-24-00075" v-if="store.cartProducts.length == 0">
                Finalizar compra
            </button>
        </div>

        <NavbarInferior />
    </div>
</template>


<script setup>


const store = useUserStore()


var item = {
    unit_price: null,
    product: null,
    quantity: null
}
for (var i = 0; i < store.cartProducts.length; i++) {

    item.unit_price = store.cartProducts[i].unit_price
    item.product = store.cartProducts[i].product
    item.quantity = store.cartProducts[i].quantity

    store.pedido.items.push(item)
}

var endereco
if (store.pedido.address == 1) {
    endereco = "Retirar na loja"
}
else {
    endereco = store.enderecoUser[0].street + ", " + store.enderecoUser[0].number + " - " + store.enderecoUser[0].cep + " / "
        + store.enderecoUser[0].city.name + " - " + store.enderecoUser[0].city.uf
    console.log("aqui")
}

var pagamento
switch (store.pedido.payment) {
    case 0:
        pagamento = "Cartão de Débito"
        break;
    case 1:
        pagamento = "Cartão de Crédito"
        break;
    case 2:
        pagamento = "Dinheiro"
        break;
    case 3:
        pagamento = "PIX"
        break;
    case 4:
        pagamento = "Cartão"
        break;
}

store.pedido.consumer = store.dataUser.id
store.pedido.phone = store.dataUser.phone
store.pedido.store = store.slug


</script>
<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import TituloPaginas from '@/components/TituloPaginas.vue';
import BotaoLaranja from '@/components/BotaoLaranja.vue';
import CardCarrinho from '../components/CardCarrinho.vue';
import DadosDaCompra from '../components/DadosDaCompra.vue';
import InformacoesItem from '@/components/InformacoesItem.vue';
import NavbarInferior from '@/components/NavbarInferior.vue';
import { useUserStore } from '../store'
import { http } from '../services/config'
export default {
    components: {
        BotaoDeVoltarBranco,
        TituloPaginas,
        BotaoLaranja,
        CardCarrinho,
        DadosDaCompra,
        InformacoesItem,
        NavbarInferior
    }, methods: {
        async enviarPedido() {

            try {
                const store = useUserStore()
                var entrega = 0
                var subtotal = 0
                for (var i = 0; i < store.cartProducts.length; i++) {
                    subtotal = subtotal + (store.cartProducts[i].unit_price * store.cartProducts[i].quantity)
                }
                var total = subtotal + entrega

                store.pedido.total_price = total
                const pedido = store.pedido
                var json = JSON.stringify(pedido)
                await http.post('pedidos/', json, {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }
                )
                store.pedido = store.pedidoNull
                store.cartProducts = []

                this.$router.push(this.$route.query.from || "/loja");

            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
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
#finalizar-compra-conferir {
    padding-bottom: 100px;
}

#finalizar {
    margin: 0px 10px;
}
</style>