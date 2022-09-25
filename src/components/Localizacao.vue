<template>
    <div id="container">
        <router-link :to="{ name: 'PaginaLoja' , params: {slug: loja.slug }}">

            <div id="localizacao">
                <div id="icon-loc" width="30px" height="30px"></div>
                <div id="sub-container-loc">
                    <p id="nome-loja">{{name}}</p>
                    <p id="endereco">{{street}}, {{number}}</p>
                </div>
                <div id="seta"></div>
            </div>

        </router-link>
    </div>

</template>

<script>

export default {
    name: 'LocalizacaoItem',
    props: {
        name: {
            type: String
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: String
        },
        loja: {
            type: Array
        }
    }
}

</script>

<style>
#container {
    width: 100%;
}

#localizacao {
    text-align: left;
    display: inline-block;
    transition: 0.5s;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 12px 16px;
    gap: 106px;
    width: 382px;
    height: 76px;
    background: #ffffff;
    border-radius: 8px;
}

#localizacao:hover {
    background: #a1a9bb;
}

#icon-loc {
    background-repeat: no-repeat;
    background-image: url(../assets/coolicon.png);
    width: 14px;
    height: 18px;
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 10px;
}

#sub-container-loc {
    margin-top: 10px;
    display: inline-block;
    width: 200px;
    margin-left: 30px;
    padding-bottom: 0px;
}

#nome-loja {
    display: block;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #14142b;
    margin-bottom: 0px;
}

#endereco {
    display: inline-block;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0px;
    color: #4e4b66;
}

#seta {
    background-repeat: no-repeat;
    background-image: url(../assets/coolicon2.png);
    margin-left: 110px;
    margin-bottom: 10px;
    display: inline-block;
    width: 7.42px;
    height: 13.02px;
}
</style>
