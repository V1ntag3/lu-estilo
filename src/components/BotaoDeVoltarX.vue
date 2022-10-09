<template>
    <button id="voltar-x" v-on:click="goBack">
        <i class="bi bi-x-lg" style="color:#FFFFFF;"></i>
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
#voltar-x {
    background-color: transparent;
    transition: 0.5s;
    position: fixed;
    width: 40px;
    height: 40px;
    border: none;
    left: 10px;
    top: 10px;
    border-radius: 50%;
}

#voltar-x:hover {
    background-color: rgba(0, 0, 0, 0.50);
}
</style>
