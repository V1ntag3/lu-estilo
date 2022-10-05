<template>
    <div id="descricao">
        <h1 id="nome-do-produto">{{nome}}</h1>

        <h5 id="opcoes-prod">Opções</h5>

        <div id="opcoes">
            <button v-for="opcao in opcoes" :key="opcao.unit_price" v-on:click="preco =
            opcao.unit_price; available = opcao.available">{{opcao.unit_price}} </button>
        </div>

        <div id="separador-prod"></div>

        <h5 id="descricao-prod">Descrição</h5>
        <h5 id="descricao-prod-sub">{{descricao}}</h5>
        <div id="separador-prod"></div>

        <InputPadrao :titulo="'Você quer adicionar alguma observação?'" />

    </div>
    <BarraInferiorCompra v-if="preco === 0" :preco="preco" />
    <router-link :to="{ name: 'PaginaLojaVoltar' }">
        <BarraInferiorCompra v-if="preco !== 0" :preco="preco" v-on:click="colocarNoCarrinho" />
    </router-link>

</template>

<script>
import BarraInferiorCompra from "./BarraInferiorCompra.vue";
import InputPadrao from "./InputPadrao.vue";
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
    components: { BarraInferiorCompra, InputPadrao },
    methods: {
        mudancas(quantidadeMax, preco) {
            this.available = quantidadeMax
            this.unit_price = preco
        },
        colocarNoCarrinho() {
            const store = useUserStore()
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
}

#nome-do-produto {
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}

#descricao h5 {
    text-align: left;
}

#opcoes {
    text-align: left;
    display: block;
}

#opcoes-prod {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 15px;
}

#opcoes button {
    transition: 0.5s;
    border: none;
    background: rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 16px 22px;
    height: 56px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
}

#opcoes button:focus {
    background: rgba(0, 0, 0, 0.50);
}

#separador-prod {
    background: #343435;
    height: 1px;
    margin: 25px auto;
    width: 96%;
}

#descricao-prod {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
}

#descricao-prod-sub {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
}
</style>