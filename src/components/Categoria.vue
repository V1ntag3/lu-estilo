<template>
    <p class="card-titulo">{{categories}}</p>
    <div class="card-container">




        <CardHome v-for="produto in produtos" :key="produto.id" :short_description="produto.short_description"
            :image="produto.images[0].image" :unit_price="produto.stocks[0].unit_price" :id="produto.id" />



    </div>
</template>

<script>
import { toRaw } from 'vue'
import CardHome from '@/components/CardHome.vue'
export default {

    name: 'CardItem',
    components: {
        CardHome
    },
    props: {
        categories: {
            type: String
        },
        products: Object
    }, data() {
        return { produtos: toRaw(this.products) }
    }, created() {
        //console.log({ ...this.products });
        // console.log(toRaw(this.products));
        //    console.log(this.products)
    },

}

</script>

<style>
.card-titulo {

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 0px;

}

.card-container {
    text-align: left;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    margin-left: 0px;
    display: flex;
    position: relative;
    width: 100%;
}
</style>
