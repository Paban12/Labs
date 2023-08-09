<template>
  <section class="footer">
    <div class="footer-container">
      <div class="logo">
        <img src="/src/assets/images/logo/logo-white.png" alt="">
        <!-- <div class="text grade-text">Thyromax Labs</div> -->
        <div class="links">
          <router-link to="/privacy-policy" class="link">Privacy Policy</router-link>
          <router-link to="/terms" class="link">Terms & Conditions</router-link>
          <router-link to="/about" class="link">About Us</router-link>
          <router-link to="/contact" class="link">Contact Us</router-link>
          <router-link to="/faq" class="link">FAQ</router-link>
        </div>
      </div>
      <div class="rights">
        <div class="left">© {{ getYear(new Date()) }} All Rights Reserved By Thyromax Labs</div>
        <div class="right">Design and Developed By 
          <a href="https://webappssoft.com/" class="developed" target="_blank" rel="noopener noreferrer">WASS</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed } from 'vue';
import { useStore } from 'vuex'
import router from '../router';

const store = useStore()
const storeVar = computed(() => store.state.Auth)

function navigate(link, id) {
  router.push({ path: link, query: { id } })
}
function getYear(date) {
  if (date) {
    return moment(date).format('YYYY');
  }
  return "-";
}

</script>

<style>

</style>