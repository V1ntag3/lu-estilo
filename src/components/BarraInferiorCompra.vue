<template>
    <div id="barra-inferior">
        <div id="valores">
            <h2 id="preco-produto">R$ {{preco}}</h2>
            <h4 id="oferta">Ou até 3x de {{preco/3}} sem juros</h4>
        </div>
        <h3 id="acao">
            Comprar
        </h3>
    </div>
</template>

<script>
export default {
    props: {
        preco: {
            Type: Number
        }
    }
}
</script>
<style>
#barra-inferior {
    color: white;
    text-align: left;
    bottom: 0;
    position: fixed;
    padding: 0px;
    width: 100%;
    height: 80px;
    background: #E74845;
}

#valores {
    margin-top: 10px;
    margin-left: 15px;
    display: inline-block;
}

#preco-produto {
    color: white;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 5px;
}

#oferta {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}

#acao {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    position: fixed;
    right: 20px;
    bottom: 25px;
    display: inline-block;
}
</style>
