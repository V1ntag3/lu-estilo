<template>
    <button id="voltar-branco" v-on:click="goBack">
        <img src="../assets/botaodevoltarbranco.png" alt="">
    </button>

</template>

<script>
export default {
    methods: {
        goBack: function () {
            window.history.back()
        }
    }
}
</script>
<style>
#voltar-branco {
    transition: 0.5s;
    background: transparent;
    position: absolute;
    width: 50px;
    height: 50px;
    border: none;
    left: 10px;
    top: 20px;
}

#voltar-branco:hover {
    filter: opacity(0.4);
}

#voltar-branco img {
    margin-top: 6px;
}
</style>
