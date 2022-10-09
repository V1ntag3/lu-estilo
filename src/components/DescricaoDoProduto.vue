<template>
    <div id="descricao">
        <h1 id="nome-do-produto" class="letra-700-32-36-001">{{nome}}</h1>

        <h5 id="opcoes-prod" class="letra-600-14-24-00075">Opções</h5>

        <div id="opcoes">
            <button v-for="opcao in opcoes" :key="opcao.unit_price" v-on:click="preco =
            opcao.unit_price; available = opcao.available" class="letra-600-14-24-00075">{{opcao.unit_price}} </button>
        </div>

        <div class="separador"></div>

        <h5 id="descricao-prod" class="letra-600-14-24-00075">Descrição</h5>
        <h5 class="letra-400-16-28-00075 ">{{descricao}}</h5>
        <div class="separador"></div>

        <div id="observacao-input">
            <h5 id="observacao-prod" class="letra-600-14-24-00075">Você quer adicionar alguma observação?</h5>
            <input type="text" class="letra-400-14-24-00075" placeholder="Digite aqui...">
        </div>

    </div>

    <BarraInferiorCompra v-if="preco === 0" :preco="preco" />
    <router-link :to="{ name: 'CarrinhoDeProdutos' }">
        <BarraInferiorCompra v-if="preco !== 0" :preco="preco" v-on:click="colocarNoCarrinho" />
    </router-link>

</template>

<script>
import BarraInferiorCompra from "./BarraInferiorCompra.vue";
import { useUserStore } from '../store'
import { toRaw } from 'vue'
export default {
    name: "DescricaoDoProdutoItem",
    props: {
        id: {
            type: Number
        },
        nome: {
            type: String
        },
        opcoes: {
            type: Array,
        },
        descricao: {
            type: String
        },
        produto: {
            Type: Array
        },
    }, data() {
        return {
            preco: 0,
            available: 0,
            pedido: {
                unit_price: 0,
                product: this.produto.id,
                quantity: 1,
                image: this.produto.images[0].image,
                name: this.produto.short_description,
                available: 0
            }
        }
    },
    components: { BarraInferiorCompra },
    methods: {
        mudancas(quantidadeMax, preco) {
            this.available = quantidadeMax
            this.unit_price = preco
        },
        colocarNoCarrinho() {
            const store = useUserStore()
            store.comprou = true
            const produto = toRaw(this.pedido)
            produto.unit_price = this.preco
            produto.available = this.available
            var verificador = false
            for (var i = 0; i < store.cartProducts.length; i++) {

                if (store.cartProducts[i].product === produto.product &&
                    store.cartProducts[i].unit_price === produto.unit_price) {

                    store.cartProducts[i].quantity += 1
                    verificador = true
                }
            }
            if (verificador === false) {
                store.cartProducts.push(produto)
            }

        }
    }
}
</script>
<style>
#descricao {
    margin: 0 15px;
    padding-bottom: 150px;
    color: #FFFFFF;
}

#nome-do-produto {
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;

}

#descricao h5 {
    text-align: left;
}

#opcoes {
    text-align: left;
    display: block;
}

#opcoes-prod {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 15px;
}

#opcoes button {
    cursor: pointer;
    transition: 0.5s;
    border: none;
    background: rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 16px 22px;
    height: 56px;
    color: #FFFFFF;
}

#opcoes button:focus {
    background: rgba(0, 0, 0, 0.50);
}

#descricao-prod {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
}


#observacao-input input {
    margin-top: 10px;
    padding-left: 20px;
    width: 100%;
    height: 52px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    color: #6E7191;
}

#observacao-input {
    margin: 0px 0px;
    margin-right: 40px;
}
</style>