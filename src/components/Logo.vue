<template>
    <img v-bind:src="image" alt="logo" id="logo">

    <p id="titulo">
        Olá, seja <br />
        bem-vindo.</p>

    <p id="sub-titulo">
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

#titulo {
    margin: 30px;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;

    color: #f2f2f2;
}

#sub-titulo {
    margin-bottom: 30px;
    font-weight: 100;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #f2f2f2;
}
</style>
