<template>

    <div id="container-titulo-gen">
        <div id="titulo-gen">
            {{titulo}}
        </div>
        <div id="subtitulo-gen">
            {{subtitulo}}
        </div>
        <div id="titulo-form-gen">
            {{tituloForm}}
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
    /* identical to box height, or 133% */

    letter-spacing: 0.01em;

    /* White / 100% */

    color: #ffffff;
    margin-bottom: 5px;
}

#subtitulo-gen {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;
    letter-spacing: 0.0075em;

    /* White / 100% */

    color: #ffffff;
    margin-bottom: 10px;
}

#titulo-form-gen {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    letter-spacing: 0.01em;

    /* White / 100% */

    color: #ffffff;
    margin-bottom: -10px;
}
</style>