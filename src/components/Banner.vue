<template>
    <img v-bind:src="image" alt="" id="banner">
</template>

<script>

export default {
    name: 'BannerItem',
    props: {
        image: {
            type: String
        }
    }


}
</script>

<style>
#banner {
    width: 100%;
    height: 43vw;
}
</style>
