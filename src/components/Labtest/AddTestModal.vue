<template>
  <Modal v-model:show="storeVar.addTestModal" class="add-test-modal">
    <template v-slot:header>
      <div class="title" showHeader="true">
        Add Lab Test
      </div>
      <div class="close-btn" @click.prevent="storeVar.addTestModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    
  </Modal>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const storeVar = computed(() => store.state.Auth);
</script>

<style>
</style>