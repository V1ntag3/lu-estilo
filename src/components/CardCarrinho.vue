<template>
    <div id="card-item">

        <img v-bind:src="image" alt="" id="card-imagem">

        <div id="card-descricao">
            <h4 id="nome">{{nome}}</h4>
            <h4 id="preco" v-bind="formatarDinheiro(preco)">{{precoFormat}}</h4>
            <select name="" id="quantidade" v-model="quantidadeMudar" @change="mudarQuantidade(quantidadeMudar)">
                <option v-for="index in quantidadeMaximaReal" :key="index">{{index}}</option>
            </select>
        </div>
        <router-link :to="{name:'CarrinhoDeProdutos'}">
            <img src="../assets/delete.png" alt="" id="card-delete" @click="deleteItem()" />
        </router-link>
    </div>
</template>
<script>
import { useUserStore } from '../store'
import { toRaw } from 'vue'

export default {

    props: {

        image: {
            Type: String
        },
        preco: {
            Type: Number
        },
        nome: {
            Type: String
        },
        quantidade: {
            Type: Number
        }, id: {
            Type: Number
        }, quantidadeMax: {
            Type: Number
        }

    }, data() {
        var valor
        if (this.quantidadeMax >= 0) {
            valor = 20
        }
        else {
            valor = this.quantidadeMax
        }
        return {
            quantidadeMudar: this.quantidade,
            precoFormat: 0,

            quantidadeMaximaReal: valor
        }

    }, methods: {
        formatarDinheiro(money) {
            this.precoFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money);
        }, mudarQuantidade(valor) {
            const store = useUserStore()
            const produtos = toRaw(store.cartProducts)

            for (var i = 0; i < produtos.length; i++) {
                console.log(produtos[i])
                if (produtos[i].product === this.id && produtos[i].unit_price === this.preco) {
                    store.cartProducts[i].quantity = parseInt(valor, 10)
                }
            }

        },
        deleteItem() {
            const store = useUserStore()

            const produtos = toRaw(store.cartProducts)
            for (var i = 0; i < produtos.length; i++) {
                if (produtos[i].product === this.id && produtos[i].unit_price === this.preco) {
                    var array1 = produtos.splice(0, i)
                    var array2 = produtos.splice(i + 1, produtos.length)
                    store.cartProducts = array1.concat(array2)

                }
            }
            console.log('aq')
            this.$router.push({
                name: 'CarrinhoDeProdutosReload',
                query: this.$route.query,
                hash: this.$route.hash,
            });
        }
    }, setup() {

    }
}
</script>
<style>
#card-item {
    margin: 20px auto;
    max-width: 382px;
    max-height: 116px;
    background: #FFFFFF;
    border-radius: 4px;
    background-color: white;
    text-align: left;
}

#card-imagem {
    display: inline-block;
    margin-top: 20px;
    margin-left: 15px;

    width: 80px;
    height: 80px;
    border-radius: 8px;

}

#card-descricao {
    margin-bottom: 20px;
    display: inline-block;
    margin-left: 20px;
}

#nome {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #263E80;
}

#preco {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #4E4B66;
}

#quantidade {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    width: 100px;
    height: 20px;
    color: #6E7191;
}

#quantidade:after {
    border: 0;
    outline: none;
}

#card-delete {
    transition: 0.5s;
    margin-left: 115px;
    margin-bottom: 30px;
}

#card-delete:hover {
    cursor: pointer;
    filter: opacity(0.4)
}

#quantidade select {
    border: none;
    border-style: none;
    outline: none;
}
</style>