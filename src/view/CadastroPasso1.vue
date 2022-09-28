<template>

    <BotaoDeVoltarBranco />


    <TituloCadastro :titulo=" 'Passo 1 de 3' " :subtitulo="'Confirme o seus dados de entrega'"
        :tituloForm="' Endereço para entrega'" />
    <div id="formulario-cad">
        <form action="">
            <label for="">CEP</label>
            <input type="number" placeholder="Insira seu CEP aqui...">

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


</template>
<script >
import TituloCadastro from "@/components/TituloCadastro.vue";
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";

export default {
    components: {
        TituloCadastro,
        BotaoDeVoltarBranco
    }
}
</script>
<style>

</style>