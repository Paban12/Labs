<template>
  <section class="staff-add-page">
    <div class="card">
      <h4 class="card-header">Add New Staff</h4>
      <div class="card-body">
        <form action="" class="form" @submit.prevent="onSubmitStaffDetails">
          <div class="two-inputs">
            <div class="form-item mb-16">
              <div class="title">Name</div>
              <input type="text" v-model="formVar.name" placeholder="Enter Name" />
              <div class="err-msg" v-if="formVar.submit && nameValid">
                {{ nameValid }}
              </div>
            </div>
            <div class="form-item mb-16">
              <div class="title">Email</div>
              <input type="text" v-model="formVar.email" placeholder="Enter Email" />
              <div class="err-msg" v-if="formVar.submit && emailValid">
                {{ emailValid }}
              </div>
            </div>
          </div>
          <div class="two-inputs">
            <div class="form-item mb-16">
              <div class="title">Select Gender</div>
              <Select v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
                placeholder="Select Gender"></Select>
              <div class="err-msg" v-if="formVar.submit && genderValid">
                {{ genderValid }}
              </div>
            </div>
            <div class="form-item mb-16">
              <div class="title">DOB</div>
              <input type="date" v-model="formVar.dob" placeholder="Enter dob" />
              <div class="err-msg" v-if="formVar.submit && dobValid">
                {{ dobValid }}
              </div>
            </div>
          </div>
          <div class="two-inputs">
            <div class="form-item mb-16">
              <div class="title">Phone No</div>
              <input type="number" v-model="formVar.phone" placeholder="Enter Phone No" v-on:keypress="isNumber($event)"
                v-on:keyup="phnum($event.target.value)" />
              <div class="err-msg" v-if="formVar.submit && phoneValid">
                {{ phoneValid }}
              </div>
            </div>
            <div class="form-item mb-16">
              <div class="title">Select Roles</div>
              <Select v-model="formVar.post" :options="postOptions" @selected="handleSelectedOption"
                placeholder="Select Post"></Select>
              <div class="err-msg" v-if="formVar.submit && postValid">
                {{ postValid }}
              </div>
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Password</div>
            <input type="text" v-model="formVar.password" placeholder="Enter Password" />
            <div class="err-msg" v-if="formVar.submit && passwordValid">
              {{ passwordValid }}
            </div>
          </div>
          <!-- <div class="form-item mb-16">
            <div class="title">Address</div>
            <textarea name="" id="" v-model="formVar.address" placeholder="Enter Address"></textarea>
            <div class="err-msg" v-if="formVar.submit && addressValid">
              {{ addressValid }}
            </div>
          </div> -->
          <div class="submit-btn">
            <button type="submit" class="btn black-btn w-100 mt-16">Add</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Staff);
const postOptions = [
  { id: null, name: "Select Roles" },
  { id: 'EMPLOYEE', name: "EMPLOYEE" },
  { id: 'DOCTOR', name: "DOCTOR" },
  { id: 'STAFF', name: "STAFF" },
  { id: 'FRONT DESK', name: "FRONT DESK" },
  { id: 'BACK DESK', name: "BACK DESK" },
  { id: 'PATHOLOGIEST', name: "PATHOLOGIEST" },
];
const genderOptions = [
  { id: null, name: "Select Gender" },
  { id: 'MALE', name: "MALE" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const formVar = reactive({
  submit: false,
  name: null,
  phone: null,
  email: null,
  address: null,
  post: postOptions[0],
  dob: null,
  gender: genderOptions[0],
  password: null,

})


const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};


/* Functions/Methods */

const onSubmitStaffDetails = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    passwordValid.value ||
    genderValid.value ||
    dobValid.value ||
    postValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Staff/addStaff", {
    loginId: formVar.phone,
    name: formVar.name,
    emailId: formVar.email,
    gender: formVar.gender?.id,
    dob: formVar.dob,
    roles: formVar.post?.id,
    password: formVar.password
  });
};
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please enter your name!";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please enter your dob!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter your phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter your email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});
const postValid = computed(() => {
  if (!formVar.post?.id) {
    return "Please select post!";
  }
});
const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please enter your password !";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender?.id) {
    return "Select gender !";
  }
})
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