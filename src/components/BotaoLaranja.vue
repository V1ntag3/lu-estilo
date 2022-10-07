<template>
    <button id="botao-laranja" class="letra-600-14-24-00075">{{acao}}</button>
</template>
<script>
export default {
    props: {
        acao: {
            Type: String
        }

    }
}
</script>
<style>
#botao-laranja {
    transition: 0.5s;
    cursor: pointer;
    color: white;
    border: none;
    background: #E74845;
    border-radius: 4px;
    width: 381px;
    height: 56px;
    margin-top: 30px;
}

#botao-laranja:hover {
    filter: opacity(0.4);
}
</style>