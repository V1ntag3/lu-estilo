<template>
    <div id="barra-inferior">
        <div id="valores">
            <h2 id="preco-produto" class="letra-600-20-32-00075" v-bind="formatarDinheiro(preco)">{{precoFormat}}</h2>
            <h4 id="oferta" class="letra-400-14-24-00075" v-bind="formatarDinheiroPor3(preco)">Ou até 3x de
                {{precoFormatPor3}} sem juros</h4>
        </div>
        <h3 id="acao" class="letra-600-16-28-00075">Comprar</h3>
    </div>
</template>

<script>
export default {
    props: {
        preco: {
            Type: Number
        }
    }, data() {
        return {
            precoFormat: 0,
            precoFormatPor3: 0
        }
    }, methods: {
        formatarDinheiro(money) {
            this.precoFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money);
        }, formatarDinheiroPor3(money) {
            this.precoFormatPor3 = this.precoFormatPor3 = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(money / 3);
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
    margin-bottom: 5px;
}

#acao {
    position: fixed;
    right: 20px;
    bottom: 25px;
    display: inline-block;
}
</style>
