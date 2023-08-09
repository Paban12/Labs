<template>
  <Modal v-model:show="storeVar.aptSuccessModal" class="apt-success-modal">
    <div class="apt-card">
      <div class="img">
        <img src="/src/assets/images/png/clock.png" alt="image">
      </div>
      <h2 class="no">#548769</h2>
      <h3>Appointment Booked Successfully</h3>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus quo non minus magni consectetur?
      </div>
      <div class="btns">
        <div class="btn black-btn" @click.prevent="storeVar.aptSuccessModal = false">Close</div>
        <router-link to="/appointment/overview" class="btn make-btn">Appointment Overview</router-link>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const storeVar = computed(() => store.state.Auth);
</script>

<style>
</style>