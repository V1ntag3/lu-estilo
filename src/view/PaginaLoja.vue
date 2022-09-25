<template>
    <Banner />
    <Pesquisar />
</template>

<script>
import Banner from "@/components/Banner.vue";
import Pesquisar from "@/components/Pesquisar.vue"

export default {
    name: 'App',
    components: {
        Banner, Pesquisar
    }, props: {
        banner: {
            type: String
        }

    },
    data() {
        return
    }
}
</script>