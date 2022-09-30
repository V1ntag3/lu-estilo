<template>
    <button id="botao-laranja">{{acao}}</button>
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
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
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