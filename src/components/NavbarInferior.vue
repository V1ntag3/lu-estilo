<template>

    <div id="navbar">
        <router-link :to="{name:'PaginaLojaVoltar'}">
            <div id="home">
                <div id="icon-home"></div>
                <h5>Página inicial</h5>
            </div>
        </router-link>

        <router-link :to="{ name: 'CarrinhoDeProdutos'}">
            <div id="carrinho">
                <div id="icon-carrinho"></div>
                <h5>Carrinho</h5>
            </div>
        </router-link>

        <router-link :to="{ name: 'CadastroLogin'}">
            <div id="minha-conta">
                <div id="icon-conta"></div>
                <h5>Conta</h5>
            </div>
        </router-link>

    </div>
</template>

<script setup>

import { useUserStore } from "../store";
import { toRaw } from 'vue'

const store = useUserStore()
const isLogged = toRaw(store.isLogged)
console.log(toRaw(isLogged).value)
</script>

<style>
#home,
#carrinho,
#minha-conta {
    color: #395BB9;
    filter: opacity(0.4)
}



#home:hover,
#carrinho:hover,
#minha-conta:hover {
    width: 33.3%;
    display: inline-block;
    filter: opacity(1)
}





#navbar {
    text-align: left;
    bottom: 0;
    position: fixed;
    padding: 0px;
    width: 100%;
    height: 56px;
    background: #FFFFFF;
}

#home,
#carrinho,
#minha-conta {
    transition: 0.5s;
    width: 33.3%;
    display: inline-block;
    height: 100%;
}

#carrinho,
#minha-conta,
#home {
    cursor: pointer;
}

#navbar h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.0075em;
    color: #395BB9;
}

#icon-home {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/home.png);
    width: 16px;
    height: 18.59px;
}

#icon-carrinho {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/carrinho.png);
    width: 20px;
    height: 19px;
}

#icon-conta {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/conta.png);
    width: 16px;
    height: 19px;
}
</style>