<template>

    <div id="navbar">

        <div id="home">
            <div id="icon-home"></div>
            <h5>Página inicial</h5>
        </div>

        <div id="carrinho">
            <div id="icon-carrinho"></div>
            <h5>Carrinho</h5>
        </div>

        <div id="minha-conta">
            <div id="icon-conta"></div>
            <h5>Conta</h5>
        </div>

    </div>
</template>

<script>

</script>

<style>
#navbar {
    text-align: left;
    bottom: 0;
    position: fixed;
    padding: 0px;
    width: 100%;
    height: 56px;
    background: #FFFFFF;
}

#navbar #home,
#carrinho,
#minha-conta {
    transition: 0.5s;
    width: 33.3%;
    display: inline-block;
    height: 100%;
}

#navbar #carrinho,
#minha-conta {
    cursor: pointer;
}

#navbar h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.0075em;
    color: #395BB9;
}

#icon-home {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/home.png);
    width: 16px;
    height: 18.59px;
}

#icon-carrinho {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/carrinho.png);
    width: 20px;
    height: 19px;
}

#icon-conta {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background: no-repeat;
    background-image: url(../assets/conta.png);
    width: 16px;
    height: 19px;
}
</style>