<template>
  <div
    class="flexible-hover"
    @mouseenter="showElement = true"
    @mouseleave="showElement = false"
  >
    <div class="content" :class="positionClass" v-show="showElement">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showElement = ref(false);
const hoverElement = ref(null);
const contentElement = ref(null);

const positionClass = ref('bottom'); // Define positionClass here

const positionElement = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const elementRect = hoverElement.value.getBoundingClientRect();
  const contentRect = contentElement.value.getBoundingClientRect();

  const spaceTop = elementRect.top;
  const spaceLeft = elementRect.left;
  const spaceRight = viewportWidth - elementRect.right;
  const spaceBottom = viewportHeight - elementRect.bottom;

  let position = 'bottom';

  if (contentRect.height > spaceBottom) {
    if (contentRect.width > spaceRight) {
      position = 'left';
    } else if (contentRect.width > spaceLeft) {
      position = 'right';
    } else {
      position = 'top';
    }
  }

  positionClass.value = position;
};

onMounted(() => {
  window.addEventListener('resize', positionElement);
  positionElement();
});

onUnmounted(() => {
  window.removeEventListener('resize', positionElement);
});
</script>


<style scoped>
.flexible-hover {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: transform 0.3s;
}

.content {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  /* display: none; */
  z-index: 1;
  transition: top 0.3s, left 0.3s, right 0.3s, bottom 0.3s;
}

/* Position classes */
.top {
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
}

.left {
  top: 50%;
  left: -100%;
  transform: translateY(-50%);
}

.right {
  top: 50%;
  right: -100%;
  transform: translateY(-50%);
}

.bottom {
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
}

/* Show content when visible */
.flexible-hover .content {
  display: block;
}
</style>
