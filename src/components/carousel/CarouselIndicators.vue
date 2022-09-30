<template>
  <div class="carousel-indicators">
    <button class="carousel-indicator-item" :class="{ active: currentIndex === index }" v-for="(item, index) in total"
      :key="index" @click="$emit('switch', index)"></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 6.5em;
  z-index: 2;
}

.carousel-indicator-item {
  width: 8px;
  height: 8px;
  border: none;
  background: #E74845;
  opacity: 0.5;
  margin: 1px;
  border-radius: 50%;
  cursor: pointer;
}



.active {
  opacity: 1;
}
</style>
