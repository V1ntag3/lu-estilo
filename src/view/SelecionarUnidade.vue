<template>

    <div class="fundo">

        <Logo :image="image" />
        <TransitionGroup name="fade">
            <LocalizacaoItem v-for="loja in lojas" :key="loja.id" :name="loja.name" :street="loja.street"
                :number="loja.number" :loja="loja"></LocalizacaoItem>
        </TransitionGroup>
    </div>

    <router-view />




</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from "../store";

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

<script>
import Logo from "../components/Logo.vue";

import LocalizacaoItem from '../components/Localizacao.vue'
export default {
    components: {
        Logo, LocalizacaoItem
    }
}
</script>
<style>
.fundo {
    padding-bottom: 100px;
}
</style>