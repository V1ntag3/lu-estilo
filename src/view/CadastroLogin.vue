<template>
    <div id="cadastrologin">
        <button id="voltar" v-on:click="goBack">
            <img src="../assets/fechar.png" alt="">
        </button>
        <h1>Acesse sua conta ou <br>cadastre-se!</h1>
        <h2>Para continuar o processo de compra, escolha uma das opções abaixo.</h2>
        <router-link :to="{name: 'LoginDaLoja'}">
            <button id="login">Já sou cliente</button>
        </router-link>

        <button id="registrar">Criar nova conta</button>


    </div>
</template>

<script>
export default {
    methods: {
        goBack: function () {
            window.history.back()
        }
    }
}
</script>

<style scoped>
#voltar {
    background-color: transparent;
    transition: 0.5s;
    position: absolute;
    width: 50px;
    height: 50px;
    border: none;
    left: 10px;
    top: 20px;
    border-radius: 50%;
}

#voltar:hover {
    background-color: rgba(0, 0, 0, 0.50);
}

#cadastrologin h1,
#cadastrologin h2 {

    text-align: left;
    margin: 0 20px;


    /* white/elements-bg */

    color: #FFFFFF;
}

#cadastrologin h1 {
    margin-top: 200px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    width: 382px;
    height: 72px;
    letter-spacing: 0.01em;
}

#cadastrologin h2 {
    margin-bottom: 60px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
}

#login,
#registrar {
    transition: 0.5s;
    display: inline-block;
    padding: 16px 112px;
    gap: 10px;
    width: 96%;
    margin: 5px;
}

#login {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: white;
    border: none;
    background: #E74845;
    border-radius: 4px;
}

#registrar {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: white;
    border: none;
    background: transparent;
    border: 2px solid white;
    border-radius: 4px;
}

#login:hover,
#registrar:hover {
    filter: opacity(0.5);
}

@media (min-width: 1000px) {
    div {
        text-align: left;
        margin-left: 20px;
    }

    h1,
    h2 {
        margin-left: 0px;
    }

    #login,
    #registrar {
        margin-left: 0px;

        text-align: left;
        display: inline-block;
        padding: 16px 112px;
        gap: 10px;
        width: 350px;
    }


}
</style>
