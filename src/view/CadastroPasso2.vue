<template>
    <div id="container-cadastro-2">
        <div id="botao-de-voltar-gen">
            <BotaoDeVoltarBranco />
        </div>

        <TituloPaginas :titulo=" 'Passo 2 de 3' " :subtitulo="'Confirme o seus dados pessoais'"
            :tituloForm="'Dados pessoais'" />
        <div class="formulario-cadas">
            <form action="">
                <label for="">Nome completo</label>
                <input type="text" placeholder="Insira o seu nome aqui..." v-model="name">

                <label for="">CPF</label>
                <input placeholder="Insira o seu CPF aqui..." v-maska="'###.###.###-##'" v-model="cpf">

                <label for="">Data de nascimento</label>
                <input type="date" placeholder="00/00/0000" v-model="data">

                <label for="">Telefone</label>
                <input type="tel" placeholder="(00) 00000 - 0000" v-maska="'(##) ##### - ####'" v-model="telefone">
                <router-link :to="{name: 'CadastroPasso3'}">
                    <input type="submit" value="Próximo" @click="salvarDadosDoConsumidor()"
                        v-if="name != '' && cpf != '' && data != '' && telefone != '' && TestaCPF()">
                </router-link>
            </form>
            <button id="botao-inativo" v-if="name == '' || cpf == '' || data == '' || telefone == '' || !TestaCPF()">
                Próximo
            </button>
        </div>
    </div>
</template>

<script>
import TituloPaginas from "@/components/TituloPaginas.vue";
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";
import { useUserStore } from "../store";
export default {
    components: {
        TituloPaginas,
        BotaoDeVoltarBranco
    }, data() {
        return {
            name: "",
            cpf: "",
            data: "",
            telefone: ""
        }
    }, methods: {
        salvarDadosDoConsumidor() {

            const date = new Date().toLocaleTimeString();
            var today = new Date();
            var milliseconds = today.getMilliseconds();
            const dataFinal = this.data + 'T' + date + '.' + milliseconds + 'Z'
            const store = useUserStore();
            store.cadastro.consumer.name = this.name
            store.cadastro.consumer.birth_date = dataFinal
            var cpfFormatado = this.cpf.replace('-', '')
            cpfFormatado = cpfFormatado.replace('.', '')
            cpfFormatado = cpfFormatado.replace('.', '')

            store.cadastro.consumer.cpf_cnpj = cpfFormatado
            store.cadastro.consumer.phone = this.telefone


        },
        TestaCPF() {
            var Soma;

            var strCPF = this.cpf.replace('-', '')
            strCPF = strCPF.replace('.', '')
            strCPF = strCPF.replace('.', '')
            var Resto;
            Soma = 0;
            if (strCPF == "00000000000") return false;

            for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) return false;

            Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) return false;
            return true;
        }
    }
}
</script>
<style>
#container-cadastro-2 {
    padding-bottom: 5px;
}
</style>