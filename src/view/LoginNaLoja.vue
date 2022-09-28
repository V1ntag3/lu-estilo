<template>
    <BotaoDeVoltarBranco />
    <div id="login-view">

        <FormularioLogin />

    </div>
</template>

<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import FormularioLogin from '@/components/FormularioLogin.vue';
export default {
    name: "LoginDaLoja",
    components: { BotaoDeVoltarBranco, FormularioLogin }
}
</script>

<style>
#login-view {
    margin: 0px 20px;
}
</style>
