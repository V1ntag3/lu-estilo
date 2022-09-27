<template>
    <BotaoDeVoltarX />
    <div id="login-view">

        <FormularioLogin />

    </div>
</template>

<script>
import BotaoDeVoltarX from '@/components/BotaoDeVoltarX.vue';
import FormularioLogin from '@/components/FormularioLogin.vue';
export default {
    name: "LoginDaLoja",
    components: { BotaoDeVoltarX, FormularioLogin }
}
</script>

<style>
#login-view {
    margin: 0px 20px;
}
</style>
