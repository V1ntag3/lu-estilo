<template>
    <TituloPaginas :titulo="'Acessar conta'"
        :subtitulo="'Insira os dados da sua conta para poder continuar com o processo de compra'" :tituloForm="''" />
    <form @submit.prevent="verificarLogin" id="formulario-login">
        <label for="telefone" id="label-dados" class="letra-600-14-24-00075">Telefone</label>
        <input name="telefone" id="telefone" placeholder="Insira o seu telefone aqui..." v-model="username"
            v-maska="'(##) ##### - ####'">
        <div id="error" class="letra-400-12-18-00075">
            <p v-if="erro">Ops, este número é inválido.</p>
        </div>

        <label for="senha" id="label-dados" class="letra-600-14-24-00075">Senha</label>
        <input type="password" name="senha" id="senha" placeholder="Insira a sua senha aqui..." v-model="password">
        <div id="error" class="letra-400-12-18-00075">
            <p v-if="erro">Ops, esta senha é inválida.</p>
        </div>
        <div id="espaco">
            <a href="" id="esqueci-senha" class="letra-600-14-24-00075">Esqueci minha senha</a>

        </div>
        <input v-if="(username == '' || password == '' )" type="button" id="enviar" class="letra-600-14-24-00075"
            value="Enviar">

        <input v-if="!(username == '' || password == '' )" type="submit" id="enviar-pronto"
            class="letra-600-14-24-00075" value="Enviar">

    </form>
</template>
<script>
import { http } from '../services/config'
import TituloPaginas from "@/components/TituloPaginas.vue"
import { useUserStore } from '../store'

export default {
    components: {
        TituloPaginas
    }, data() {
        return {
            username: "",
            password: "",
            dataUser: {
            }, erro: false
        }
    }, methods: {
        async verificarLogin() {

            try {
                const store = useUserStore()
                const user = { username: this.username, password: this.password };
                var json = JSON.stringify(user)
                const data = await http.post('login/consumidor/', json, {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }
                )
                this.dataUser = data.data
                store.dataUser = data.data
                store.isLogged = true
                console.log('Usuário logado')
                this.$router.push(this.$route.query.from || "/loja");

            }
            catch (error) {
                if (error.response.data.detalhes === 'Credenciais Inválidas') {
                    console.log('Usuário não encontrado')
                    this.erro = true
                }
                if (error.response.data.detalhes === 'Senha inválida') {
                    console.log('Senha inválida')
                    this.erro = true
                }
            }
        }
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
    cursor: auto;
}

#enviar-pronto {
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    padding: 16px 112px;
    border: none;
    background: #E74845;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
}

#senha {
    margin-bottom: 0px;
}

#label-dados {
    display: block;
    text-align: left;
    color: #FFFFFF;
    margin-top: 20px;
}

#espaco {
    margin-top: 50px;
}

#esqueci-senha {
    text-decoration: none;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
}

#error {
    margin-top: 5px;
    text-align: left;
    color: #E74845;
}
</style>