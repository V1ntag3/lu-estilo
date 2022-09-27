<template>
    <h1 id="titulo-login">Acessar conta</h1>
    <h2 id="subtitulo-login">Insira os dados da sua conta para poder continuar com o processo de compra.</h2>
    <form action="login" method="post">
        <label for="telefone" id="label-dados">Telefone</label>
        <input type="tel" name="telefone" id="telefone" placeholder="Insira o seu telefone aqui...">
        <label for="senha" id="label-dados">Senha</label>
        <input type="password" name="senha" id="senha" placeholder="Insira a sua senha aqui...">
        <a href="" id="esqueci-senha">Esqueci minha senha</a>
        <input type="submit" value="" id="enviar">
    </form>
</template>
<script>

</script>
<style>
#titulo-login,
#subtitulo-login {
    text-align: left;
    color: #FFFFFF;
}

#titulo-login {

    margin-top: 80px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
}

#subtitulo-login {
    margin-bottom: 100px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
}

#telefone,
#senha {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #6E7191;
    margin-top: 5px;
    margin-bottom: 15px;
    width: 98%;
    padding: 12px 0px 12px 16px;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 4px;
}

#enviar {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
    width: 100%;
    padding: 16px 112px;
    gap: 10px;
    border: none;
    background: #E74845;
    opacity: 0.4;
    border-radius: 4px;
    margin-top: 30px;
}

#senha {
    margin-bottom: 60px;
}

#label-dados {
    display: block;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
}

#esqueci-senha {
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
}
</style>