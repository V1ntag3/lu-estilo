<template>

    <div class="pop-up-true">
        <Transition name="fade">
            <PopUp :dados="'Produto adicionado ao carrinho'" v-if="store.comprou" />
        </Transition>
    </div>

    <div id="container-principal">
        <p id="tituloCar" class="letra-700-32-36-001">Carrinho</p>
    </div>
    <CompraCarrinho />
</template>
<script setup>
const store = useUserStore()
if (store.comprou == true) {
    setTimeout(function () {
        store.comprou = false
    }, 1500);
}
</script>
<script>
import { useUserStore } from "../store";
import CompraCarrinho from "../components/CompraCarrinho.vue";
import PopUp from "../components/PopUp.vue"
export default {
    components: {
        CompraCarrinho
    }
}
</script>

<style>
#container-principal {
    margin: 0 20px;
}

#tituloCar {
    margin-top: 60px;
    text-align: left;
    margin-bottom: 30px;
    color: #FFFFFF;
}
</style>