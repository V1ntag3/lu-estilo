<template>
    <div id="container-titulo-gen">
        <div id="titulo-gen">
            <p>
                {{titulo}}
            </p>
        </div>
        <div id="subtitulo-gen">
            <p>
                {{subtitulo}}
            </p>
        </div>
        <div id="titulo-form-gen">
            <p>
                {{tituloForm}}
            </p>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            Type: String
        },
        subtitulo: {
            Type: String
        }, tituloForm: {
            Type: String
        }
    }
}
</script>

<style>
#container-titulo-gen {
    text-align: left;
    margin-left: 20px;
    margin-top: 75px;
}

#titulo-gen {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 5px;
}

#subtitulo-gen {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0075em;
    color: #ffffff;
    margin-bottom: 10px;
}

#titulo-form-gen {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: -10px;
}
</style>