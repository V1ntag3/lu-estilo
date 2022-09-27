<template>
    <div id="cardvariosprodutos">
        <CardCarrinho />
    </div>

    <div id="separador"></div>
    <div id="containercompra">
        <p id="c-compra1">Resumo da Compra</p>
        <div id="subcontainercompra1">
            <p id="c-compra2">Subtotal </p>
            <p id="c-compra3">Preco</p>
        </div>
        <div id="subcontainercompra2">
            <p id="c-compra4">Valor da entrega </p>
            <p id="c-compra5">A calcular</p>
        </div>
        <div id="subcontainercompra2">
            <p id="c-compra6">Valor total </p>
            <p id="c-compra7">preco</p>
        </div>

    </div>

    <button id="finalizar">Finalizar Compra</button>
    <NavbarInferior />
</template>
<script >
import CardCarrinho from "./CardCarrinho.vue";
import NavbarInferior from "./NavbarInferior.vue";
export default {
    components: {
        CardCarrinho,
        NavbarInferior
    }
}
</script>
<style>
#cardvariosprodutos {
    margin: 0 auto;
}

#separador {
    margin-top: 60px;
    margin-bottom: 60px;
}

#containercompra {
    margin: 0 15px;
    text-align: left;
}

#c-compra1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    letter-spacing: 0.0075em;

    /* White / 80% */

    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
}

#subcontainercompra1 {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    letter-spacing: 0.0075em;

    /* White / 100% */

    color: #FFFFFF;

    display: inline-block;
    margin-bottom: 0px;

}

#subcontainercompra2 {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    letter-spacing: 0.0075em;

    /* White / 100% */

    color: #FFFFFF;
    display: inline-block;
    margin-bottom: 20px;
}

#subcontainercompra3 {
    width: 100%;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    letter-spacing: 0.0075em;

    /* White / 100% */

    color: #FFFFFF;
    display: inline-block;
    margin-bottom: 20px;
}

#c-compra2,
#c-compra4,
#c-compra6 {

    width: 50%;
    display: inline-block;
}

#c-compra3,
#c-compra5,
#c-compra7 {

    text-align: right;
    width: 50%;
    display: inline-block;
}


#finalizar {
    transition: 0.5s;
    cursor: pointer;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: white;
    border: none;
    background: #E74845;
    border-radius: 4px;
    width: 381px;
    height: 56px;
}

#finalizar:hover {
    filter: opacity(0.4);
}
</style>