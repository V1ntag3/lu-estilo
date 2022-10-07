<template>
    <router-link :to="{ name: 'DetalhesDoProduto', params: {id: produto_id }}">

        <div id="card">
            <img v-bind:src="image" alt="" id="card-image">

            <p id="card-desc" class="letra-600-16-28-00075">{{ short_description }}</p>

            <p id="card-preco" class="letra-400-16-28-00075">R$ {{unit_price}}</p>

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

#card {
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    width: 180px;
    margin: 10px;
    color: #FFFFFF;
}

#card-image {
    width: 180px;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 4px;
}

#card:hover {
    filter: opacity(0.5);
}

::-webkit-scrollbar {
    display: none;
}
</style>
