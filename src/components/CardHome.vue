<template>
    <router-link :to="{ name: 'DetalhesDoProduto', params: {id: produto_id }}">

        <div class="card">
            <img v-bind:src="image" alt="" class="card-image">

            <p class="card-desc">{{ short_description }}</p>

            <p class="card-preco">R$ {{unit_price}}</p>

        </div>

    </router-link>

</template>

<script>

export default {
    name: 'CardItem',
    props: {
        short_description: {
            type: String
        }
        ,
        image: {
            type: String,
        },
        unit_price: {
            type: Number
        }, id: {
            type: Number
        }
    }, data(props) {
        return { produto_id: props.id }
    }
}

</script>

<style>
a {
    text-decoration: none;
}

.card {
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    width: 180px;
    margin: 10px;
}

.card-image {

    width: 180px;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 10px;
}

.card:hover {
    filter: opacity(0.5);
}

.card-desc {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    letter-spacing: 0.0075em;
    color: #FFFFFF;
}

.card-preco {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #FFFFFF;
}

::-webkit-scrollbar {
    display: none;
}
</style>
