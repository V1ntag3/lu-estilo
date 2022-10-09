<template>
    <div id="finalizar-compra-conferir">
        <BotaoDeVoltarBranco />
        <TituloPaginas :titulo="'Finalizar compra'"
            :subtitulo="'confira as informações abaixo antes de finalizar a compra do produto'" :tituloForm="' '" />
        <TransitionGroup name="list">
            <CardCarrinho v-for="produto in store.cartProducts" :key="produto.product" :image="produto.image"
                :nome="produto.name" :id="produto.product" :quantidade="produto.quantity" :preco="produto.unit_price"
                :quantidadeMax="produto.available" />
        </TransitionGroup>
        <div class="separador"></div>


        <div v-if="store.pedido.payment  != 2">

            <InformacoesItem :titulo="'Endereço de entrega'" :dados="endereco" />

            <div class="separador"></div>

            <InformacoesItem :titulo="'pagamento pelo app'" :dados="pagamento" v-if="store.pedido.payment == 3" />

            <InformacoesItem :titulo="'pagamento na entrega'" :dados="pagamento" v-if="store.pedido.payment != 3" />

        </div>




        <div v-if="store.pedido.payment  == 2">


            <div id="titulo-informacoes" class="letra-600-16-28-00075">
                <p>Endereço de entrega</p>
            </div>
            <div id="container-info-dinheiro">
                <div>
                    <img src="../assets/icon-point.png" alt="" id="icon-point">
                </div>
                <div id="subcontainher-info-dinheiro">
                    <p class="letra-600-16-28-00075" v-if="endereco != 'Retirar na loja'">Casa</p>
                    <p class="letra-600-16-28-00075" v-if="endereco == 'Retirar na loja'">Loja</p>
                    <p class="letra-400-14-24-00075">
                        {{endereco}}
                    </p>
                </div>
            </div>
            <div class="separador"></div>


            <div id="titulo-informacoes" class="letra-600-16-28-00075">
                <p>pagamento na entrega</p>
            </div>

            <div id="container-info-dinheiro">
                <div>
                    <img src="../assets/icon-point.png" alt="" id="icon-point">
                </div>
                <div id="subcontainher-info-dinheiro">
                    <p class="letra-600-16-28-00075">Dinheiro</p>

                    <p v-if="store.troco.precisa != 'false'" class="letra-400-14-24-00075">
                        Troco para R$ {{store.troco.quanto}}
                    </p>
                </div>
            </div>



            <div class="separador"></div>
            <div id="titulo-informacoes" class="letra-600-16-28-00075">
                <p>Deseja adicionar alguma observação?</p>
                <div id="observacao">
                    <input type="text" placeholder="Digite aqui sua observação...">
                </div>
            </div>
        </div>


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




var endereco
if (store.pedido.address == 1) {
    endereco = "Retirar na loja"
}
else {
    endereco = store.enderecoUser[0].street + ", " + store.enderecoUser[0].number + " - " + store.enderecoUser[0].cep + " / "
        + store.enderecoUser[0].city.name + " - " + store.enderecoUser[0].city.uf
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
        pagamento = ""
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

                var entrega = 0
                var subtotal = 0
                for (var j = 0; j < store.cartProducts.length; j++) {
                    subtotal = subtotal + (store.cartProducts[j].unit_price * store.cartProducts[j].quantity)
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
                store.finalizou = true
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

#icon-point {
    margin-bottom: 4px;
    width: 14px;
    height: 14px;
}

#container-info-dinheiro {
    color: #FFFFFF;
    text-align: left;
    margin: 0px 40px;
}

#container-info-dinheiro div {
    display: inline-block;
}

#subcontainher-info-dinheiro {
    max-width: 270px;
    margin-left: 25px;
    margin-top: 10px;
}

#titulo-informacoes p {
    margin-bottom: 10px;
}
</style>