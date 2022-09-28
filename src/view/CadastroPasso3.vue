<template>

    <BotaoDeVoltarBranco />


    <TituloCadastro :titulo=" 'Passo 3 de 3' " :subtitulo="'Confirme o seus dados para acesso'"
        :tituloForm="'Dados para acesso'" />
    <div id="formulario-cad">

        <form action="">
            <label for="">Telefone</label>
            <input type="text" placeholder="(XX) XXXXX - XXXX">

            <label for="">Senha</label>
            <input type="password" placeholder="Insira sua senha aqui...">

            <label for="">Confirmar senha</label>
            <input type="password" placeholder="Confirme sua senha aqui...">
            <router-link :to="{name: 'PaginaLojaVoltar'}">
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