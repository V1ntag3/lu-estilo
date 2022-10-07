<template>
    <div id="container-principal">
        <p id="tituloCar" class="letra-700-32-36-001">Carrinho</p>
    </div>
    <CompraCarrinho />
</template>

<script>
import CompraCarrinho from "../components/CompraCarrinho.vue";
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