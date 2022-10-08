<template>

    <BotaoDeVoltarBranco />

    <TituloPaginas :titulo=" 'Passo 3 de 3' " :subtitulo="'Confirme o seus dados para acesso'"
        :tituloForm="'Dados para acesso'" />

    <div class="formulario-cadas">
        <form action="">
            <label for="">Telefone</label>
            <input placeholder="(XX) XXXXX - XXXX" v-maska="'(##) ##### - ####'" v-model="username">

            <label for="">Senha</label>
            <input type="password" placeholder="Insira sua senha aqui..." v-model="senha">

            <label for="">Confirmar senha</label>
            <input type="password" placeholder="Confirme sua senha aqui..." v-model="senhaConfirmar">
            <router-link :to="{name: 'PaginaLojaVoltar'}">
                <input type="submit" value="Próximo" v-if="username != '' && senha != '' && 
                senhaConfirmar != '' && senha == senhaConfirmar" @click="salvarDadosDoConsumidor()">
            </router-link>
        </form>
        <button id="botao-inativo"
            v-if=" username == '' || senha == '' || senhaConfirmar == '' || senha != senhaConfirmar">
            Próximo
        </button>
    </div>
</template>

<script >
import TituloPaginas from "@/components/TituloPaginas.vue";
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";
import { useUserStore } from "../store";
import { http } from '../services/config'
export default {
    components: {
        TituloPaginas,
        BotaoDeVoltarBranco
    }, data() {
        return {
            username: "",
            senha: "",
            senhaConfirmar: ""
        }
    }, methods: {

        async salvarDadosDoConsumidor() {

            try {
                const store = useUserStore()
                store.cadastro.consumer.user.username = this.username
                store.cadastro.consumer.user.password = this.senha
                const cadastro = store.cadastro
                var json = JSON.stringify(cadastro)
                await http.post('consumidores/', json, {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }
                )
                store.cadastro = store.cadastroNull
                this.$router.push(this.$route.query.from || "/login");

            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
}
</script>
