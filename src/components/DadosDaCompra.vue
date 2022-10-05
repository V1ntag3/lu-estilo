<template>
    <div id="containercompra">
        <p id="c-compra1">Resumo da Compra</p>
        <div id="subcontainercompra1">
            <p id="c-compra2">Subtotal </p>
            <p id="c-compra3" v-bind=" formatarValorSub(valorSub)">{{valorSubFormat}}</p>
        </div>
        <div id="subcontainercompra2">
            <p id="c-compra4">Valor da entrega </p>
            <p id="c-compra5" v-bind=" formatarValorEntrega(valorEntrega)">{{valorEntregaFormat}}</p>
        </div>
        <div id="subcontainercompra3">
            <p id="c-compra6">Valor total </p>
            <p id="c-compra7" v-bind=" formatarValorTotal(valorTotal)">{{valorTotalFormat}}</p>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        valorSub: { Type: Number },
        valorEntrega: {
            Type: Number
        },
        valorTotal: {
            Type: Number
        }
    }, methods: {
        formatarValorSub(money) {
            this.valorSubFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money);
        },
        formatarValorEntrega(money) {
            this.valorEntregaFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money);
        },
        formatarValorTotal(money) {
            this.valorTotalFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money);
        }
    }, data() {
        return {
            valorSubFormat: 0,
            valorEntregaFormat: 0,
            valorTotalFormat: 0,
        }
    }
}
</script>
<style>
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
    margin-bottom: 65px;
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
</style>