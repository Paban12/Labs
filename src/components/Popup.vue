<template>
  <div ref="popup" class="popup" v-if="showPopup">
    <!-- Popup content goes here -->
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vitae voluptatibus est deserunt, necessitatibus ea quibusdam iste at, magnam quos tempora voluptatem culpa dolorem exercitationem ad perferendis enim odit corporis accusantium excepturi non. Corrupti officia assumenda nostrum cumque natus ducimus eveniet laborum. Molestiae voluptate et enim magni. Beatae, deleniti nihil voluptate cupiditate dolor repellendus nesciunt similique at qui ipsa, velit facilis atque iusto officia! Sed quisquam provident consequatur excepturi voluptatem repellat, aliquam similique nemo beatae reprehenderit animi blanditiis quam fugiat inventore odio tempora officia iure quidem quos illum exercitationem necessitatibus facilis quibusdam! Sequi quidem, odio rem cumque deleniti quisquam laudantium!
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const popup = ref(null);
const showPopup = ref(false);
const popupPosition = reactive({ top: 0, left: 0 });

// Function to calculate and update popup position
const updatePopupPosition = () => {
  const el = popup.value;
  if (!el) return;

  const { top, left, width, height } = el.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Set the desired padding from the edge of the screen
  const padding = 10;

  popupPosition.top = top + height + padding <= viewportHeight ? top : viewportHeight - height - padding;
  popupPosition.left = left + width + padding <= viewportWidth ? left : viewportWidth - width - padding;
};

// Listen for hover events on the target element
const targetElement = ref(null);

onMounted(() => {
  targetElement.value.addEventListener('mouseenter', () => {
    showPopup.value = true;
    updatePopupPosition();
  });

  targetElement.value.addEventListener('mouseleave', () => {
    showPopup.value = false;
  });

  // Update popup position when the window is resized
  window.addEventListener('resize', updatePopupPosition);
});

onUnmounted(() => {
  window.removeEventListener('resize', updatePopupPosition);
});
</script>

<style>
.popup {
  position: fixed;
  z-index: 9999;
  /* Add your desired styles for the popup */
}
</style>
