<template>
    <div id="botao-de-voltar-gen">
        <BotaoDeVoltarBranco />
    </div>

    <TituloPaginas :titulo=" 'Passo 2 de 3' " :subtitulo="'Confirme o seus dados pessoais'"
        :tituloForm="'Dados pessoais'" />
    <div class="formulario-cadas">
        <form action="">
            <label for="">Nome completo</label>
            <input type="text" placeholder="Insira o seu nome aqui...">

            <label for="">CPF</label>
            <input type="text" placeholder="Insira o seu CPF aqui...">

            <label for="">Data de nascimento</label>
            <input type="date">

            <label for="">Telefone</label>
            <input type="tel" placeholder="(00) 00000 - 0000">
            <router-link :to="{name: 'CadastroPasso3'}">
                <input type="submit" value="Próximo">
            </router-link>
        </form>
    </div>
</template>

<script>
import TituloPaginas from "@/components/TituloPaginas.vue";
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";

export default {
    components: {
        TituloPaginas,
        BotaoDeVoltarBranco
    }
}
</script>