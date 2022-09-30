<template>
    <div id="cadastro-passo-1">
        <BotaoDeVoltarBranco />


        <TituloPaginas :titulo=" 'Passo 1 de 3' " :subtitulo="'Confirme o seus dados de entrega'"
            :tituloForm="' Endereço para entrega'" />
        <div class="formulario-cadas">
            <form action="">
                <label for="">CEP</label>
                <input placeholder="Insira seu CEP aqui..." v-maska="'#####-###'" v-model="cep">

                <label for="">Rua</label>
                <input type="text" placeholder="Insira a rua aqui...">

                <label for="">Número</label>
                <input type="number" placeholder="Insira o número aqui...">

                <label for="">Complemento</label>
                <input type="text" placeholder="Insira o complemento aqui...">

                <label for="">Estado</label>
                <input type="text" placeholder="Insira o estado aqui...">

                <label for="">Cidade</label>
                <input type="text" placeholder="Insira a cidade aqui...">
                <router-link :to="{name: 'CadastroPasso2'}">
                    <input type="submit" value="Próximo">
                </router-link>
            </form>
        </div>
    </div>
</template>

<script >
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";
import TituloPaginas from "@/components/TituloPaginas.vue";

export default {
    components: {
        TituloPaginas,
        BotaoDeVoltarBranco
    }, data() {
        return {
            cep: ""
        }
    }
}
</script>

<style>
#cadastro-passo-1 {
    padding-bottom: 1px;
}
</style>