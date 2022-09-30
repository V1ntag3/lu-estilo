<template>
    <div id="observacao">
        <h5 id="observacao-prod">{{titulo}}</h5>
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
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
    margin-bottom: 10px;
}

#observacao input {
    padding: 12px 0px 12px 16px;
    gap: 10px;
    width: 96%;
    height: 48px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    color: #6E7191;
}
</style>