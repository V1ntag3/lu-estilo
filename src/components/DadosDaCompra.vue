<template>
    <div id="containercompra">
        <p id="c-compra1" class="letra-600-16-28-00075">Resumo da Compra</p>
        <div id="subcontainercompra1" class="letra-400-16-28-00075">
            <p id="c-compra2">Subtotal </p>
            <p id="c-compra3" v-bind=" formatarValorSub(valorSub)">{{valorSubFormat}}</p>
        </div>
        <div id="subcontainercompra2" class="letra-400-16-28-00075">
            <p id="c-compra4">Valor da entrega </p>
            <p id="c-compra5" v-bind=" formatarValorEntrega(valorEntrega)">{{valorEntregaFormat}}</p>
        </div>
        <div id="subcontainercompra3" class="letra-600-20-32-00075">
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
    color: #FFFFFF;
}

#c-compra1 {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
}

#subcontainercompra1 {
    margin-bottom: 0px;

}

#subcontainercompra2 {
    margin-bottom: 20px;
}

#subcontainercompra3 {
    margin-bottom: 65px;
}

#subcontainercompra1,
#subcontainercompra2,
#subcontainercompra3 {
    width: 100%;
    display: inline-block;
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