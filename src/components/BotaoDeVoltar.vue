<template>
    <button id="voltar" v-on:click="goBack">
        <img src="../assets/setadevoltar.png" alt="">
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
#voltar {
    transition: 0.5s;
    background-color: transparent;
    position: absolute;
    width: 50px;
    height: 50px;
    border: none;
    left: 10px;
    top: 20px;
    border-radius: 50%;
}

#voltar:hover {
    filter: opacity(0.4);
}

#voltar img {
    margin-top: 6px;
}
</style>
