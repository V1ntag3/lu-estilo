<template>
    <div id="chekeds">
        <input type="radio" name="endereco" value="" />
        <p>{{titulo}}</p>

    </div>
</template>
<script>
export default {
    props: {
        titulo: {
            Type: String
        }
    }
}
</script>
<style>
#chekeds {
    display: block;

    width: 381px;

    background: #FFFFFF;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 10px;
}

#chekeds input {
    width: 16px;
    display: inline-block;
    position: relative;
    top: 10px;
    cursor: pointer;

}

#chekeds p {
    padding: 10px 0px;
    margin-left: 25px;
    position: relative;
    width: 300px;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.0075em;
    color: #4E4B66;
    top: 0px;
    text-align: left;
}
</style>