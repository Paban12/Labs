<template>
  <section class="staff-details-layout">
    <div class="card staff-info-card">
      <div class="card-header">
        <div class="top-info">
          <div class="img">
            <img src="/src/assets/images/png/dr2.png" alt="image">
          </div>
          <div class="staff-name">
            <p class="name">{{ storeVar.name }}</p>
            <p class="sub">Phone : {{ storeVar.mobile }}</p>
          </div>
          <div class="post Admin">{{ storeVar.roles2 }}</div>
          <!-- <div class="delete-btn" @click.prevent="formVar.confirmModal = true">
            <img src="/src/assets/images/png/delete.png" alt="image">
          </div> -->
        </div>
        <div class="tabs">
          <router-link to="/staff/details" @click="navigate('/staff/details', storeVar.staffId)"
            class="tab">Details</router-link>
          <router-link to="/staff/permission" @click="navigate('/staff/permission', storeVar.staffId)"
            class="tab">Permission</router-link>
          <router-link to="/staff/slot" @click="navigate('/staff/slot', storeVar.staffId)"
            class="tab">Availability</router-link>

          <!-- <a @click="navigate('/staff/details',storeVar.staffId)" class="tab">Details</a>
          <a @click="navigate('/staff/permission',storeVar.staffId)" class="tab">Permission</a>
          <a @click="navigate('/staff/slot',storeVar.staffId)" class="tab">Availability</a> -->
        </div>
      </div>
      <div class="card-body">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import router from "../../router";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Staff);

function navigate(link, id) {
  router.push({ path: link, query: { id } })
}
</script>

<style></style>