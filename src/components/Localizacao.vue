<template>
    <router-link :to="{ name: 'PaginaLoja' , params: {slug: loja.slug }}">
        <div id="container">
            <div id="localizacao">
                <i class="bi bi-geo-alt-fill" id="icon-loc" width="30px" height="30px" style=" color: #395BB9"></i>
                <div id="sub-container-loc">
                    <p id="nome-loja">{{name}}</p>
                    <p id="endereco">{{street}}, {{number}}</p>
                </div>
                <div id="seta"></div>
            </div>
        </div>
    </router-link>
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
        },
        number: {
            type: Number
        },
        loja: {
            type: Object
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
    width: 382px;
    height: 76px;
    background: #ffffff;
    border-radius: 8px;
}

#localizacao:hover {
    filter: opacity(0.4);
}

#icon-loc {
    background-repeat: no-repeat;
    width: 14px;
    height: 18px;
    position: relative;
    display: inline-block;
    top: -10px;
    margin-left: 20px;
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
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #14142b;
    margin-bottom: 0px;
}

#endereco {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0px;
    color: #4e4b66;
}

#seta {
    background-repeat: no-repeat;
    background-image: url(../assets/coolicon2.png);
    margin-left: 90px;
    margin-bottom: 10px;
    display: inline-block;
    width: 7.42px;
    height: 13.02px;
}
</style>
