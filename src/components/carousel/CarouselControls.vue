<template>
  <!-- in vue 2.x you need wrap these buttons in a div -->
  <button class="carousel-control left" @click="$emit('prev')"></button>
  <button class="carousel-control right" @click="$emit('next')"></button>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>
<style scoped>
.carousel-control {
  background-color: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0px;
  color: #f3f3f3;
  cursor: pointer;
}

.left {
  left: 0;
  top: 65px;
  height: 235px;
}

.right {
  right: 0;
  height: 300px;
}
</style>
