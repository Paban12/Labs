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
                <div class="btn yellow-btn">{{ storeVar.totalStaff }}</div>
              </div>
              <router-link to="/staff-add" class="btn black-btn">+ Add Staff</router-link>
            </div>
            <div class="searchbar">
              <div class="search">
                <input type="text" placeholder="Search for Staff" @keyup="search($event.target.value)">
                <img src="/src/assets/images/png/search.png" alt="" @click="Search2">
              </div>
              <div class="drop">
                <Select v-model="formVar.changeRole" :options="postOptions" @change.prevent="onChange" />
              </div>
            </div>

          </div>
          <div class="card-body">
            <div class="list-item card1" v-for="(item, index) in storeVar.staffData" :key="index">
                <div class="img">
                  <img src="/src/assets/images/png/dr2.png" alt="image">
                </div>
                <div class="info" @click="getInfo(item.id)">
                  <div class="staff-name">{{ item.staffDetail.name }}</div>
                  <div class="contact-info">
                    <div class="mail">{{ item.staffDetail.emailId }}</div>
                    <div class="phone">{{ item.phoneNumber }}</div>
                  </div>
                </div>
                <div class="post" :class="item.roles">{{ item.roles }}</div>
            </div>
          </div>
        </div>
        <div class="staff-card-outer col-6">
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
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import router from "../../router";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Staff);
const postOptions = [
  { id: 'STAFF', name: "STAFF" },
  { id: 'EMPLOYEE', name: "EMPLOYEE" },
  { id: 'FRONT DESK', name: "FRONT DESK" },
  { id: 'BACK DESK', name: "BACK DESK" },
  { id: 'PATHOLOGIEST', name: "PATHOLOGIEST" },
];

const formVar = reactive({
  confirmModal: false,
  tab: 1,
  limit: 10,
  offset: 0,
  keyword: "",
  status: 'ACTIVE',
  role: postOptions[0],
  changeRole: postOptions[0]
})


/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getStaff(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role?.id)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getStaff(limit, offset, keyword, status, role) {
  store.dispatch("Staff/getStaff", { limit, offset, keyword, status, role });
}
function onChange(){
  getStaff(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.changeRole?.id)
}
function getInfo(id){
  store.dispatch("Staff/getOneStaff", { id });
  router.push('/staff/details')
}
function Search2(){
  getStaff(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role?.id)
}
function search(text){
  formVar.keyword=text
if(text===''){
    getStaff(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role?.id)
  }
}

/* Functions/Methods */

/* Validation */

/* Validation */
</script>

<style></style>