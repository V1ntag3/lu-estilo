<template>
    <div id="itens">
        <p class="card-titulo">{{categories}}</p>
    </div>
</template>

<script>

export default {
    name: 'CardItem',
    props: {
        categories: {
            type: String
        }
    }
}


</script>

<style>
.card-titulo {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
