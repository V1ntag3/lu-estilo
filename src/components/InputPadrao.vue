<template>
    <div id="observacao">
        <h5 id="observacao-prod" class="letra-600-14-24-00075">{{titulo}}</h5>
        <input type="text" class="letra-400-14-24-00075" placeholder="Digite aqui...">
    </div>

</template>
<script>
export default {
    props: {
        titulo: {
            Type: String
        }
    }
}
</script>
<style>
#observacao-prod {
    color: #FFFFFF;
    margin-bottom: 10px;
}

#observacao input {
    padding-left: 20px;
    width: 96%;
    height: 52px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    color: #6E7191;
}
</style>