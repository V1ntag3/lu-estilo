<template>
    <TituloPaginas :titulo="'Acessar conta'"
        :subtitulo="'Insira os dados da sua conta para poder continuar com o processo de compra'" :tituloForm="''" />
    <form action="login" method="post" id="formulario-login">
        <label for="telefone" id="label-dados" class="letra-600-14-24-00075">Telefone</label>
        <input name="telefone" id="telefone" placeholder="Insira o seu telefone aqui..." v-maska="'(##) ##### - ####'">
        <label for="senha" id="label-dados" class="letra-600-14-24-00075">Senha</label>
        <input type="password" name="senha" id="senha" placeholder="Insira a sua senha aqui...">
        <a href="" id="esqueci-senha" class="letra-600-14-24-00075">Esqueci minha senha</a>
        <input type="submit" value="" id="enviar" class="letra-600-14-24-00075">
    </form>
</template>
<script>
import TituloPaginas from "@/components/TituloPaginas.vue"
export default {
    components: {
        TituloPaginas
    }
}
</script>
<style>
#formulario-login {
    margin: 0px 20px;
    margin-top: 150px;
}

#telefone,
#senha {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #6E7191;
    margin-top: 5px;
    margin-bottom: 15px;
    width: 96%;
    padding: 12px 0px 12px 16px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
}

#enviar {
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    padding: 16px 112px;
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
    color: #FFFFFF;
}

#esqueci-senha {
    text-decoration: none;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
}
</style>