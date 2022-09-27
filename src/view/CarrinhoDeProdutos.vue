<template>
    <div id="container-principal">
        <h2 id="tituloCar">Carrinho</h2>
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
    margin: 0 15px;
}

#tituloCar {
    margin-top: 60px;
    text-align: left;
    margin-bottom: 15px;

    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}
</style>