<template>
    <BotaoDeVoltarBranco />
    <TituloPaginas :titulo="'Dinheiro'" :subtitulo="'Complemente a informação abaixo para finalizarmos a sua compra.'"
        :tituloForm="'Você irá precisar de troco?'" />
    <CheckedBox :titulo="'Sim'" />
    <CheckedBox :titulo="'Não'" />

    <InputPadrao :titulo="'Troco pra quanto?'" />
</template>
<script>
import TituloPaginas from "@/components/TituloPaginas.vue";
import CheckedBox from "@/components/CheckedBox.vue";
import InputPadrao from "@/components/InputPadrao.vue";

export default {
    components: {
        TituloPaginas,
        CheckedBox,
        InputPadrao
    }
}
</script>
<style>

</style>