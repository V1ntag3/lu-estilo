<template>
    <div id="card-item">

        <img v-bind:src="image" alt="" id="card-imagem">

        <div id="card-descricao">
            <h4 id="nome" class="letra-600-16-28-00075">{{nome}}</h4>
            <h4 id="preco" class="letra-600-14-24-00075" v-bind="formatarDinheiro(preco)">{{precoFormat}}</h4>
            <p id="unidade" class="letra-400-14-24-00075" v-if="quantidadeMudar == 1">unidade</p>
            <p id="unidade" class="letra-400-14-24-00075" v-if="quantidadeMudar != 1">unidades</p>
            <select name="" id="quantidade" class="letra-400-14-24-00075" v-model="quantidadeMudar"
                @change="mudarQuantidade(quantidadeMudar)">
                <option v-for="index in quantidadeMaximaReal" :key="index">{{index}}</option>
            </select>
        </div>

        <img src="../assets/delete.png" alt="" id="card-delete" @click="deleteItem()" />

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
    color: #263E80;
}

#preco {
    color: #4E4B66;
}

#quantidade {
    width: 120px;
    height: 20px;
    color: #6E7191;
}

select:focus {
    border: 0 none;
    outline: 0;
    box-shadow: 0 0 0 0;
}

select {
    background-color: transparent;
    border-radius: 8px;
    border: 0px none;
    outline: 0;
    box-shadow: 0 0 0 0;
}

option:focus {
    border: 0 none;
    outline: 0;
    box-shadow: 0 0 0 0;
}


#card-delete {
    transition: 0.5s;
    margin-left: 110px;
    margin-bottom: 30px;
}

#unidade {
    color: #6E7191;
    width: 30px;
    position: relative;
    margin-top: -15px;
    top: 25px;
    left: 20px;
}

#card-delete:hover {
    cursor: pointer;
    filter: opacity(0.4)
}
</style>