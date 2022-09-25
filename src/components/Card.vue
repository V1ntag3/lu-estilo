<template>
    <div id="itens">
        <div class="card">
            <img src={{image}} alt="" id="card-image">
            <div class="card-image"></div>
            <p class="card-desc">{{ short_description }}</p>
            <p class="card-preco">R$ {{unit_price}}</p>
        </div>
    </div>
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
        }
    }
}


</script>

<style>
.card {
    cursor: pointer;
    text-align: left;
    display: block;
    width: 180px;
    height: 180px;
    margin: 10px;
}

.card-image {
    width: 180px;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 10px;
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
</style>
