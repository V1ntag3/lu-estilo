<template>
    <div id="titulo-informacoes" class="letra-600-16-28-00075">
        <p>{{titulo}}</p>
    </div>

    <div v-if="dados == ''" id="container-informacoes">
        <div id="qr-code-container">
            <img src="../assets/qr-code.png" alt="">
            <div id="qr-code-subcontainer">
                <p>Código PIX</p>
                <input type="text" class="text" disabled="disabled" v-model="code" id="code">
                <button id="copiar" @click="copiar()"><img src="../assets/copiar.png" alt=""></button>
            </div>

        </div>

    </div>


    <div v-if="dados != ''" id="container-informacoes">
        <p>{{dados}}</p>
    </div>
</template>
<script>
export default {
    name: 'InformacoesItem',
    props: {
        titulo: {
            Type: String
        }, dados: {
            Type: String
        }
    }, data() {
        return {
            code: "casd123-123wdfsd-123123-1234123-123fvdf"
        }
    }, methods: {
        async copiar() {
            try {
                await navigator.clipboard.writeText(this.code);
            } catch ($e) {
                alert('Cannot copy');
            }
        }
    }

}
</script>
<style>
#titulo-informacoes {
    margin: 0px 20px;
    margin-bottom: 5px;
    text-align: left;
    color: rgba(255, 255, 255, 0.8);
}

#container-informacoes {
    text-align: left;
    margin: auto;
    background: #FFFFFF;
    border-radius: 4px;
    width: 382px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #4E4B66;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;

}

#container-informacoes p {
    margin: 0px 20px;
}

#qr-code-container {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

#qr-code-subcontainer {
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #4E4B66;
}

#code {
    margin-left: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    width: 280px;
    border: none;
}

#copiar {
    transition: 0.5s;
    cursor: pointer;
    position: relative;
    right: -40px;
    width: 20px;
    height: 20px;
    border: none;
}

#copiar:hover {
    opacity: 0.4;
}
</style>