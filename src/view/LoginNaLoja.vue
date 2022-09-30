<template>
    <BotaoDeVoltarBranco />
    <FormularioLogin />
</template>

<script>
import BotaoDeVoltarBranco from '@/components/BotaoDeVoltarBranco.vue';
import FormularioLogin from '@/components/FormularioLogin.vue';
export default {
    name: "LoginDaLoja",
    components: { BotaoDeVoltarBranco, FormularioLogin }
}
</script>