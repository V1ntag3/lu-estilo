<template>
    <img v-bind:src="image" alt="logo" id="logo">

    <p id="titulo-logo" class="letra-700-32-36-001">
        Olá, seja <br />
        bem-vindo.</p>

    <p id="sub-titulo-logo" class="letra-400-16-28-00075">
        Antes de continuarmos, selecione uma de <br />
        nossas unidades.</p>

</template>

<script>
export default {
    name: 'LogoItem',
    props: {
        image: {
            subtype: String
        }
    }
}
</script>

<style>
#logo {
    margin: 40px auto 0px auto;
}

#titulo-logo {
    margin: 30px;
    color: #f2f2f2;
}

#sub-titulo-logo {
    margin-bottom: 30px;
    color: #f2f2f2;
}
</style>
