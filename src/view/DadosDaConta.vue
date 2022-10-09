<template>
    <div id="container-conta">
        <div id="image-conta">
            <img src="@/assets/user.png" alt="">
        </div>
        <div id="informacoes-conta" class="letra-600-16-28-00075">
            <p>Nome: <input type="text" disabled="disabled" v-model="store.dataUser.name" class="letra-400-14-24-00075">
            </p>

            <p>CPF: <input type="text" v-model="cpf" v-maska="'###.###.### - ##'" class="letra-400-14-24-00075"></p>
            <p>Telefone: <input type="text" disabled="disabled" v-model="telefone" class="letra-400-14-24-00075"></p>
        </div>

        <div id="logout" @click="logout()">
            <p class="letra-600-14-24-00075">Logout</p>
        </div>
    </div>

    <NavbarInferior />
</template>
<script setup>
import { useUserStore } from "../store";

const store = useUserStore();
const cpf = store.dataUser.cpf_cnpj
const telefone = store.dataUser.phone
</script>
 
<script>
import NavbarInferior from "@/components/NavbarInferior.vue";
export default {
    methods: {
        logout() {
            const store = useUserStore();
            store.isLogged = false
            store.dataUser = {}
            this.$router.push(this.$route.query.from || "/loja");
        }
    }
}

</script>
<style>
#container-conta {
    text-align: center;
    background-color: #ffffff;
    margin: 40px auto;
    width: 382px;
    border-radius: 8px;
    padding: 20px 0px;
}

#image-conta img {
    margin: 30px 0px;
    width: 80px;
}

#informacoes-conta {
    color: #14142b;
    text-align: left;
    margin-left: 30px;
}

#informacoes-conta p {
    margin: 5px 0px;
}

#informacoes-conta input {
    border: none;
}

#logout {
    transition: 0.5s;
    color: #e74845;
    margin: 30px;
    border-radius: 8px;
    margin-top: 40px;
    padding: 10px 0px;
    border: 3px solid #e74845;
}

#logout:hover {
    cursor: pointer;
    opacity: 0.4;
}
</style>