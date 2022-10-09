<template>
    <div id="container-login">
        <BotaoDeVoltarBranco />
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
#container-login {
    padding-bottom: 50px;
}
</style>