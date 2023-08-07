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
              <button class="btn black-btn" @click.prevent="formVar.addModal = true">+ Add Staff</button>
            </div>
            <div class="searchbar">
              <input type="text" placeholder="Search for Medicine">
              <img src="/src/assets/images/png/search.png" alt="">
            </div>
          </div>
          <div class="card-body">
            <div class="list-item card1" v-for="(item, index) in ManagementList" :key="index">
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
            </div>
            <!-- <div class="list-item card2">
              <div class="img">
                <img src="/src/assets/images/png/dr2.png" alt="image">
              </div>
              <div class="info">
                <div class="staff-name">Mukesh Raju Rastogi</div>
                <div class="contact-info">
                  <div class="mail">ramaswami28989@gmail.com</div>
                  <div class="phone">+919765300921</div>
                </div>
              </div>
              <div class="post office">Front Desk</div>
            </div>
            <div class="list-item card3">
              <div class="img">
                <img src="/src/assets/images/png/dr2.png" alt="image">
              </div>
              <div class="info">
                <div class="staff-name">Surakha Ajita Kumar</div>
                <div class="contact-info">
                  <div class="mail">ramaswami28989@gmail.com</div>
                  <div class="phone">+919765300921</div>
                </div>
              </div>
              <div class="post manager">Manager</div>
            </div> -->
          </div>
        </div>
        <div class="staff-card-outer col-6" >
          <div class="card staff-info-card">
            <div class="card-header">
              <div class="top-info">
                <div class="img">
                  <img src="/src/assets/images/png/dr2.png" alt="image">
                </div>
                <div class="staff-name">Dr. Anurag Malohatra Strhya</div>
                <div class="post Admin">Admin</div>
                <div class="delete-btn" @click.prevent="formVar.confirmModal = true">
                  <img src="/src/assets/images/png/delete.png" alt="image">
                </div>
              </div>
              <div class="tabs">
                <router-link to="/staff/details" class="tab">Details</router-link>
                <router-link to="/staff/permission" class="tab">Permission</router-link>
                <router-link to="/staff/slot" class="tab">Availability</router-link>
              </div>
            </div>
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
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
  <Modal v-model:show="formVar.addModal" class="" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">
        Add Staff
      </div>
      <div class="close-btn" @click.prevent="formVar.addModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <form action="" class="form" @submit.prevent="onSubmitStaffDetails">
      <div class="form-item mb-16">
        <div class="title">Name</div>
        <input type="text" v-model="formVar.name" placeholder="Enter Name">
        <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
      </div>
      <div class="form-item mb-16">
        <div class="title">Phone No</div>
        <input type="number" v-model="formVar.phone" placeholder="Enter Phone No"
        v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)">
        <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
      </div>
      <div class="form-item mb-16">
        <div class="title">Email</div>
        <input type="text" v-model="formVar.email" placeholder="Enter Email">
        <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
      </div>
      <div class="form-item mb-16">
        <div class="title">Address</div>
        <input type="text" v-model="formVar.address" placeholder="Enter Address">
        <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
      </div>
      <div class="form-item mb-16">
        <div class="title">Select Post</div>
        <SingleSelect v-model="formVar.post" :options="postOptions" @selected="handleSelectedOption"
          placeholder="Select Post"></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && postValid">{{ postValid }}</div>
      </div>
      <button type="submit" class="btn black-btn w-100 mt-16">Add</button>
    </form>
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
  addModal: false,
  submit: false,
  name:null,
  phone:null,
  email:null,
  address:null,
  post: "",
  tab: 1,
})

const postOptions = [
  { id: 1, name: "Doctor" },
  { id: 2, name: "Nurse" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

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

const onSubmitStaffDetails = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    addressValid.value ||
    postValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {
    userId: 10563543453,
    password: 4532453,
  });
};
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please enter your name!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter your phone no!";
  }else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter your email!";
  }else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});
const postValid = computed(() => {
  if (!formVar.post) {
    return "Please select post!";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter your address !";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.phone = e.slice(0, 10)
}
/* Validation */
</script>

<style></style>