<template>
    <div id="titulo-informacoes">
        <p>{{titulo}}</p>
    </div>

    <div id="container-informacoes">
        <p>{{dados}}</p>
    </div>
</template>
<script>
export default {
    name: 'InformacoesItem',
    props: {
        titulo: {
            Type: String
        }, dados: {
            Type: String
        }
    }

}
</script>
<style>
#titulo-informacoes {
    margin: 0px 20px;
    margin-bottom: 5px;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
}

#container-informacoes {
    text-align: left;
    margin: auto;
    background: #FFFFFF;
    border-radius: 4px;
    width: 382px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #4E4B66;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;

}

#container-informacoes p {
    margin: 0px 20px;
}
</style>