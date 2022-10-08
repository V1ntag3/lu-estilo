<template>

    <div class="pop-up-true">
        <Transition name="fade">
            <PopUp :dados="'Compra realizada com sucesso'" v-if="store.finalizou" />
        </Transition>
    </div>

    <div id="fundo">

        <Banner :image="dadosDaLoja.banner" />

        <div id="pesquisar-container">
            <i class="bi bi-search" id="icon-pesquisar" style=" color: #395BB9"></i>
            <input type="search" name="pesquisar" id="pesquisar" class="letra-400-16-28-00075"
                placeholder="Digite a busca aqui" v-model="store.pesquisa" @keyup="itemsPesquisa()">
        </div>


        <Transition name="fade">
            <div v-if="store.pesquisa != '' && vazio == true" id="pesquisa-nao-encontrada">
                <img src="../assets/pesquisavazia.png" alt="">
                <p>Não encontramos nenhum resultado.</p>
            </div>
        </Transition>

        <div v-if="store.pesquisa != ''">
            <Categoria v-for="categoria in itemsNaPesquisa" :key="categoria.id" :categories="categoria.description"
                :products="categoria.products" />
        </div>


        <div v-if="store.pesquisa == ''">

            <Categoria v-for="categoria in categorias" :key="categoria.id" :categories="categoria.description"
                :products="categoria.products" />

        </div>

    </div>
    <NavbarInferior id="navbar" />

</template>

<script setup>

import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';


const route = useRoute();
const store = useUserStore()



const dadosDaLoja = computed(() => {
    return store.getCurrentLoja
})

const categorias = computed(() => {
    return store.getCategorias
})

onMounted(() => {
    store.fetchDadosDaLoja(route.params.slug);
    store.fetchCategorias(route.params.slug)
})

if (store.finalizou == true) {
    setTimeout(function () {
        store.finalizou = false
    }, 1500);
}
</script>

<script >
import Banner from "@/components/Banner.vue";
import Categoria from "@/components/Categoria.vue";
import NavbarInferior from "../components/NavbarInferior.vue";
import { useUserStore } from "../store";
import { http } from "../services/config";
import PopUp from "../components/PopUp.vue"


let categoria = "categorias/";

let pesquisar = "?search=";


export default {
    components: {
        Banner, Categoria, NavbarInferior
    }, data() {
        return {

            itemsNaPesquisa: {},
            vazio: false
        }
    }, methods: {
        async itemsPesquisa() {
            const store = useUserStore()
            try {
                const data = await http.get(categoria + store.slug + '/' + pesquisar + store.pesquisa);
                this.itemsNaPesquisa = data.data;
                if (data.data.length == 0) {
                    this.vazio = true
                } else {
                    this.vazio = false
                }
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

    }
}
</script>

<style>
#fundo {
    padding-bottom: 100px;
}

#pesquisar-container {
    background-size: 100%;
    background-color: #FFFFFF;

    margin-top: 20px;
    margin-bottom: 20px;

    width: 382px;
    height: 56px;

    display: inline-block;

    border-radius: 8px
}

#icon-pesquisar {
    margin: 10px 0px -5px 20px;
    display: inline-block;

}

#icon-pesquisar i {
    color: #395BB9;
}

#pesquisar {
    margin-top: 0px;
    margin-left: 10px;
    padding: 0 10px;

    display: inline-block;

    width: 330px;
    height: 56px;

    background: white;

    border: none;
    border-radius: 8px;

}

#pesquisar:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

#pesquisa-nao-encontrada p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #FFFFFF;
}

#pesquisa-nao-encontrada {
    width: 100%;
    margin: 0px auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>