<template>
    <div id="observacao">
        <h5 id="observacao-prod">{{titulo}}</h5>
        <input type="text" placeholder="Digite aqui...">
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
    /* identical to box height, or 171% */

    letter-spacing: 0.0075em;

    /* White / 100% */

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
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #6E7191;
}
</style>