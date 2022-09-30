<template>
    <div id="card-item">
        <div id="card-imagem"></div>
        <div id="card-descricao">
            <h4 id="nome">Nome do item</h4>
            <h4 id="preco">R$ 33,33</h4>
            <select name="" id="quantidade">
                <option value="">12 unidade</option>
            </select>
        </div>
        <img src="../assets/delete.png" alt="" id="card-delete">
    </div>
</template>
<script>

</script>
<style>
#card-item {
    cursor: pointer;
    margin: 20px auto;
    max-width: 382px;
    max-height: 116px;
    transition: 0.5s;
    background: #FFFFFF;
    border-radius: 4px;

    background-color: white;
    text-align: left;
}

#card-item:hover {
    filter: opacity(0.4)
}

#card-imagem {
    display: inline-block;
    margin-top: 20px;
    margin-left: 15px;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 8px;

}

#card-descricao {
    margin-bottom: 20px;
    display: inline-block;
    margin-left: 20px;
}

#nome {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #263E80;
}

#preco {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0075em;
    color: #4E4B66;
}

#quantidade {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    width: 100px;
    height: 20px;
    border-style: none;
    outline: none;
    color: #6E7191;
}

#quantidade:after {
    border: 0;
    outline: none;
}

#card-delete {
    margin-left: 115px;
    margin-bottom: 30px;
}
</style>