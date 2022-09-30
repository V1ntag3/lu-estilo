<template>
    <div id="descricao">
        <h1 id="nome-do-produto">{{nome}}</h1>

        <h5 id="opcoes-prod">Opções</h5>

        <div id="opcoes">
            <button v-for="opcao in opcoes" :key="opcao.unit_price">{{opcao.unit_price}}</button>
        </div>

        <div id="separador-prod"></div>

        <h5 id="descricao-prod">Descrição</h5>
        <h5 id="descricao-prod-sub">{{descricao}}</h5>
        <div id="separador-prod"></div>

        <InputPadrao :titulo="'Você quer adicionar alguma observação?'" />

    </div>
    <BarraInferiorCompra />

</template>

<script>
import BarraInferiorCompra from "./BarraInferiorCompra.vue";
import InputPadrao from "./InputPadrao.vue";
export default {
    name: "DescricaoDoProdutoItem",
    props: {
        id: {
            type: Number
        },
        nome: {
            type: String
        },
        opcoes: {
            type: Array,
        },
        descricao: {
            type: String
        },
        produto: {
            Type: Array
        }
    },
    components: { BarraInferiorCompra, InputPadrao }
}
</script>
<style>
#descricao {
    margin: 0 15px;
    padding-bottom: 150px;
}

#nome-do-produto {
    margin-bottom: 20px;
    margin-top: 20px;

    text-align: left;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}

#descricao h5 {
    text-align: left;
}

#opcoes {
    text-align: left;
    display: block;
}

#opcoes-prod {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 15px;
}

#opcoes button {
    transition: 0.5s;
    border: none;
    background: rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 16px 22px;
    height: 56px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
}

#opcoes button:focus {
    background: rgba(0, 0, 0, 0.50);
}

#separador-prod {
    background: #343435;
    height: 1px;
    margin: 25px auto;
    width: 96%;
}

#descricao-prod {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
}

#descricao-prod-sub {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
}
</style>