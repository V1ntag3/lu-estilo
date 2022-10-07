<template>
    <div id="container-titulo-gen">
        <div id="titulo-gen">
            <p>
                {{titulo}}
            </p>
        </div>
        <div id="subtitulo-gen" class="letra-400-14-24-00075">
            <p>
                {{subtitulo}}
            </p>
        </div>
        <div id="titulo-form-gen" class="letra-700-24-32-001">
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
    color: #ffffff;
}

#titulo-gen {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.01em;
}

#subtitulo-gen {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

#titulo-form-gen {
    margin-bottom: -10px;
}
</style>