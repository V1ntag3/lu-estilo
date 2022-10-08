<template>
    <router-link :to="{ name: 'PaginaLoja' , params: {slug: loja.slug }}">
        <div>
            <div id="localizacao">
                <i class="bi bi-geo-alt-fill" id="icon-localizacao" width="30px" height="30px"
                    style=" color: #395BB9"></i>
                <div id="sub-container-localizacao">
                    <p id="nome-loja-localizacao">{{name}}</p>
                    <p id="endereco-localizacao" class="letra-400-14-24-00075">{{street}}, {{number}}</p>
                </div>
                <div id="seta-localizacao"></div>
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

#icon-localizacao {
    background-repeat: no-repeat;
    width: 14px;
    height: 18px;
    position: relative;
    display: inline-block;
    top: -10px;
    margin-left: 20px;
}

#sub-container-localizacao {
    margin-top: 10px;
    display: inline-block;
    width: 200px;
    margin-left: 30px;
    padding-bottom: 0px;
}

#nome-loja-localizacao {
    display: block;

    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;

    color: #14142b;
    margin-bottom: 0px;
}

#endereco-localizacao {
    display: inline-block;
    margin-bottom: 0px;
    color: #4e4b66;
}

#seta-localizacao {
    background-repeat: no-repeat;
    background-image: url(../assets/coolicon2.png);
    margin-left: 90px;
    margin-bottom: 10px;
    display: inline-block;
    width: 7.42px;
    height: 13.02px;
}
</style>
