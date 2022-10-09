<template>
    <div id="navbar">

        <router-link :to="{name:'PaginaLojaVoltar'}">
            <div id="home">
                <i class="bi bi-house" id="icon-home"></i>

                <h5>Página inicial</h5>
            </div>
        </router-link>

        <router-link :to="{ name: 'CarrinhoDeProdutos'}">
            <div id="carrinho">

                <div id="icone-quantidade" v-if="store.cartProducts.length != 0">
                    {{store.cartProducts.length}}
                </div>
                <i class="bi bi-cart" id="icon-carrinho"></i>

                <h5>Carrinho</h5>
            </div>
        </router-link>

        <router-link :to="{ name: 'DadosDaConta'}">
            <div id="minha-conta" v-if="isLogged">
                <i class="bi bi-person"></i>
                <h5>Conta</h5>
            </div>
        </router-link>
        <router-link :to="{ name: 'CadastroLogin'}">
            <div id="minha-conta" v-if="!isLogged">
                <i class="bi bi-person"></i>
                <h5>Conta</h5>
            </div>
        </router-link>
    </div>
</template>

<script setup>


import { useUserStore } from "../store";
const store = useUserStore();
const isLogged = store.isLogged
</script>

<script>

</script>

<style>
#navbar {

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
    color: #395BB9;
    filter: opacity(0.4);
    transition: 0.5s;
    width: 33.3%;
    display: inline-block;
    height: 100%;
    cursor: pointer;
}

#home:hover,
#carrinho:hover,
#minha-conta:hover {
    width: 33.3%;
    display: inline-block;
    filter: opacity(1)
}

#navbar h5 {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.0075em;
    color: #395BB9;
}

.bi::before {
    margin-top: 10px;
}

#icone-quantidade {
    font-weight: 600;
    font-size: 10px;
    line-height: 18px;
    color: #FFFFFF;
    position: fixed;
    top: 3px;
    left: 50%;
    right: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #E74845;
}
</style>