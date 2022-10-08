<template>

    <div id="container-pop-up">
        <img src="../assets/ok.png" alt="">
        <div id="pop-up-text">
            <p class="letra-600-16-28-00075">{{dados}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        dados: {
            Type: String
        }
    }
}

</script>
<style>
#container-pop-up {
    text-align: left;
    border-radius: 8px;
    background: #27AE60;
    width: 328px;
    height: 56px;
}

#container-pop-up div {
    position: relative;
    color: #FFFFFF;
    display: inline-block;
    width: 260px;
    top: 16px;
    left: 30px;
}

#container-pop-up img {
    position: relative;
    top: 20px;
    left: 20px;
}
</style>