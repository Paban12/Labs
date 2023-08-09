<template>
  <section class="staff-layout">
    <div class="container">
      <!-- <div class="card flex justify-space align-center mb-16 gap-16">
        <div class="head flex align-center gap-16">
          <h4>Staff Management</h4>
          <div class="btn yellow-btn">12</div>
        </div>
        <button class="btn black-btn" @click.prevent="staff.addModal = true">+ Add Staff</button>
      </div> -->
      <div class="staff-content row">
        <div class="card staff-listbar col-4">
          <div class="card-header">
            <div class="top">
              <div class="head">
                <h4>Staff Management</h4>
                <div class="btn yellow-btn">12</div>
              </div>
              <router-link to="/staff-add" class="btn black-btn">+ Add Staff</router-link>
            </div>
            <div class="searchbar">
              <input type="text" placeholder="Search for Medicine">
              <img src="/src/assets/images/png/search.png" alt="">
            </div>
          </div>
          <div class="card-body">
            <router-link to="/staff/details" class="list-item card1" v-for="(item, index) in ManagementList" :key="index">
              <div class="img">
                <img src="/src/assets/images/png/dr2.png" alt="image">
              </div>
              <div class="info">
                <div class="staff-name">{{ item.name }}</div>
                <div class="contact-info">
                  <div class="mail">{{ item.email }}</div>
                  <div class="phone">{{ item.phone }}</div>
                </div>
              </div>
              <div class="post" :class="item.roles">{{ item.roles }}</div>
            </router-link>
          </div>
        </div>
        <div class="staff-card-outer col-6" >
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
  <!-- modals -->
  <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
    <h4>
      Are you sure want to Delete
    </h4>
    <div class="btns">
      <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">Cancel</button>
      <button class="btn confirm-btn">Confirm</button>
    </div>
  </Modal>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  confirmModal: false,
  tab: 1,
})


const ManagementList=[
  {
    id:1,
    name:'Dr. Anurag Malohatra Strhya',
    email:'ramaswami28989@gmail.com',
    phone:'+919765300921',
    roles:'Doctor',
  },
  {
    id:2,
    name:'Mukesh Raju Rastogi',
    email:'ramaswami28989@gmail.com',
    phone:'+918945214896',
    roles:'Front Desk',
  },
  {
    id:3,
    name:'Surakha Ajita Kumar',
    email:'surakha.kumar@gmail.com',
    phone:'+919745236985',
    roles:'Admin',
  },
  {
    id:4,
    name:'Mukesh Raju Rastogi',
    email:'ramaswami28989@gmail.com',
    phone:'+918945214896',
    roles:'Manager',
  },
  {
    id:5,
    name:'Surakha Ajita Kumar',
    email:'surakha.kumar@gmail.com',
    phone:'+919745236985',
    roles:'Admin',
  },
  {
    id:6,
    name:'Dr. Anurag Malohatra Strhya',
    email:'ramaswami28989@gmail.com',
    phone:'+919765300921',
    roles:'Doctor',
  },
  {
    id:7,
    name:'Mukesh Raju Rastogi',
    email:'ramaswami28989@gmail.com',
    phone:'+918945214896',
    roles:'Front Desk',
  },
  {
    id:8,
    name:'Mukesh Raju Rastogi',
    email:'ramaswami28989@gmail.com',
    phone:'+918945214896',
    roles:'Manager',
  },
]

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

/* Functions/Methods */

/* Validation */

/* Validation */
</script>

<style></style>