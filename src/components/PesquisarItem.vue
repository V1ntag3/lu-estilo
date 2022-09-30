<template>
    <div id="pesquisar-container">
        <img src="../assets/pesquisar.png" alt="" id="icon-pesquisar">

        <input type="search" name="pesquisar" id="pesquisar" placeholder="Digite a busca aqui">

    </div>

</template>

<script>


</script>
<style>
#pesquisar-container {
    background-size: 100%;
    background-color: #FFFFFF;

    margin-top: 20px;
    margin-bottom: 20px;

    width: 430px;
    height: 56px;

    display: inline-block;

    border-radius: 8px
}

#icon-pesquisar {
    margin-top: 10px;
    margin-bottom: -5px;
    margin-left: 20px;

    display: inline-block;
}

#pesquisar {
    margin-top: 0px;
    margin-left: 10px;
    padding: 0 10px;

    display: inline-block;

    width: 380px;
    height: 56px;

    background: white;

    border: none;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;

}

#pesquisar:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
</style>
