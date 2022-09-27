<template>
    <button id="voltar">
        <img src="../assets/fechar.png" alt="">
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
    background-color: transparent;
    transition: 0.5s;
    position: absolute;
    width: 50px;
    height: 50px;
    border: none;
    left: 10px;
    top: 20px;
    border-radius: 50%;
}

#voltar:hover {
    background-color: rgba(0, 0, 0, 0.50);
}
</style>
