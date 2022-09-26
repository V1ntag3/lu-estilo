<template>
    <Logo :image="image" />

    <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street" :number="loja.number"
        :loja="loja"></LocalizacaoItem>

    <router-view />
</template>

<script setup>
import { onMounted, computed } from 'vue';
//import users store
import { useUserStore } from "../store";
// declare store variable
const store = useUserStore();

const lojas = computed(() => {
    return store.getLojas
})
const image = computed(() => {
    return store.getBanner
})
onMounted(() => {
    store.fetchLojas();
})
</script>


<script >

import Logo from "../components/Logo.vue";

import LocalizacaoItem from '../components/Localizacao.vue'
export default {
    name: 'App',
    components: {
        Logo, LocalizacaoItem
    }
}

</script>
