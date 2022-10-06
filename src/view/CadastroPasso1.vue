<template>
    <div id="cadastro-passo-1">
        <BotaoDeVoltarBranco />


        <TituloPaginas :titulo=" 'Passo 1 de 3' " :subtitulo="'Confirme o seus dados de entrega'"
            :tituloForm="' Endereço para entrega'" />
        <div class="formulario-cadas">
            <form action="">
                <label for="">CEP</label>
                <input placeholder="Insira seu CEP aqui..." v-maska="'#####-###'" v-model="cepReal"
                    @keyup="buscarCep()">

                <label for="">Rua</label>
                <input type="text" placeholder="Insira a rua aqui..." v-model="address.street">

                <label for="">Número</label>
                <input type="number" placeholder="Insira o número aqui..." v-model="address.number">

                <label for="">Complemento</label>
                <input type="text" placeholder="Insira o complemento aqui..." v-model="address.complement">

                <label for="">Estado</label>
                <input type="text" placeholder="Insira o estado aqui..." v-model="address.uf">

                <label for="">Cidade</label>
                <input type="text" placeholder="Insira a cidade aqui..." v-model="address.city">



                <router-link :to="{name: 'CadastroPasso2'}">
                    <input type="submit" value="Próximo" id="botao-ativo" @click="salvarEndereco()"
                        v-if="address.cep != '' && address.number != ''">
                </router-link>



            </form>
            <button id="botao-inativo" v-if="address.cep == '' || address.number == ''">
                Próximo
            </button>

        </div>
    </div>
</template>

<script >
import BotaoDeVoltarBranco from "@/components/BotaoDeVoltarBranco.vue";
import TituloPaginas from "@/components/TituloPaginas.vue";
import axios from "axios"

import { toRaw } from "vue"
import { useUserStore } from "../store";


export default {
    components: {
        TituloPaginas,
        BotaoDeVoltarBranco
    }, data() {
        return {
            cepReal: "",
            address: {
                cep: "",
                neighborhood: "",
                street: "",
                number: "",
                complement: "",
                uf: "",
                city: ""
            }
        }
    }, methods: {
        async buscarCep() {
            const cep = this.cepReal.replace('-', '');
            console.log(cep)
            if (cep.length == 8) {
                await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => this.data = response.data)
                    .catch(error => console.log(error))
                const dados = toRaw(this.data)
                console.log(dados)
                this.address.cep = cep.substring(0, 2) + '.' + cep.substring(2, 5) + "-" + cep.substring(5)
                console.log(this.address.cep)
                this.address.city = dados.localidade
                this.address.uf = dados.uf
                this.address.complement = dados.complemento
                this.address.neighborhood = dados.bairro
                this.address.street = dados.logradouro
            }
        },
        salvarEndereco() {
            const store = useUserStore();
            store.cadastro.address = this.address
        }
    }
}
</script>

<style>
#cadastro-passo-1 {
    padding-bottom: 1px;
}

#botao-inativo {
    color: #ffffff;
    height: 48px;
    background: #E74845;
    border-radius: 4px;
    opacity: 0.4;
    border: none;
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    margin-top: 30px;

}

#botao-ativo {
    cursor: pointer;
}
</style>