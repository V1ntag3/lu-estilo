<template>
    <div id="descricao">
        <h1 id="nome-do-produto">Nome do produto</h1>

        <h5>Opções</h5>

        <div id="opcoes">
            <button>Inox</button>
            <button>Branca</button>
            <button>Preta</button>
        </div>

        <hr>

        <h5>Descrição</h5>
        <h5>Aqui vai ter uma descrição completa do produto mostrando todas as especificações do mesmo. Aqui vai ter uma
            descrição
            completa do produto mostrando todas as especificações do mesmo. Aqui vai ter uma descrição completa do
            produto mostrando
            todas as especificações do mesmo.</h5>

        <hr>
    </div>
</template>
<script>

</script>
<style>
#descricao {
    margin: 0 15px;
    padding-bottom: 100px;
}

#nome-do-produto {
    margin-bottom: 20px;
    margin-top: 20px;

    text-align: left;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}

h5 {
    margin-bottom: 10px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: rgba(255, 255, 255, 0.8);
}

#opcoes {
    text-align: left;
    ;
}

#opcoes button {
    transition: 0.5s;
    border: none;
    background: rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 16px 22px;
    height: 56px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
}

#opcoes button:focus {
    background: rgba(0, 0, 0, 0.50);
}

hr {
    margin: 20px auto;
    border-color: black;
    width: 96%;
}
</style>