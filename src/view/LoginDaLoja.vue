<template>
    <div id="login-view">
        <BotaoDeVoltarX />
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

<style scoped>
#login-view {
    margin: 0px 20px;

}
</style>
