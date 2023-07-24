
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";


import Notification from "./components/Notification.vue";

const store = useStore();
const storeVar = computed(() => store.state);

</script>

<template>
  <section>
    <div id="app">
      <router-view />
    </div>
    <notification />
    <base-spinner v-if="storeVar.loader"></base-spinner>
    <!-- <Alert /> -->
    <!-- <Loader /> -->
  </section>
</template>