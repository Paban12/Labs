<template>
  <section class="login-form-inner register-form">
    <form class="form">
      <h2>Welcome to Parchi</h2>
      <span>
        Enter details for Register
      </span>
      <div class="form-item mb-16">
        <input type="text" v-model="formVar.name" class="" placeholder="Enter your name">
        <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
      </div>
      <div class="form-item mb-16">
        <input type="number" v-model="formVar.phone" class="" placeholder="Enter your phone no"
        v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)">
        <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" v-model="formVar.email" class="" placeholder="Enter your email">
        <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
      </div>
      <div class="radio-btns mb-16">
        <div class="two-inputs">
          <div class="col-5 form-item">
            <input type="radio" v-model="formVar.gender" value="Male" autocomplete="off" name="gender" id="male">
            <label for="male">Male</label>
          </div>
          <div class="col-5 form-item">
            <input type="radio" v-model="formVar.gender" value="Female" autocomplete="off" name="gender" id="female">
            <label for="female">Female</label>
          </div>
          <div class="col-5 form-item">
            <input type="radio" name="gender" id="other">
            <label for="other">Other</label>
          </div>
        </div>
        <div class="err-msg text-left" v-if="formVar.submit && genderValid">{{ genderValid }}</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" v-model="formVar.address" class="" placeholder="Enter your address">
        <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" v-model="formVar.locality" placeholder="Locality">
        <div class="err-msg text-left" v-if="formVar.submit && localityValid">{{ localityValid }}</div>
      </div>
      <div class="form-item mb-16">
        <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
          placeholder="Select state"></SingleSelect>
        <div class="err-msg text-left" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
      </div>
      <div class="form-item mb-16">
        <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
          placeholder="Select city"></SingleSelect>
        <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
      </div>
      <div class="login-btn form-item">
        <button type="button" class="btn black-btn load-btn" v-if="storeVar.loaderButton">
          <icon-login-loader></icon-login-loader>
        </button>
        <button type="button" class="btn black-btn" v-else @click="onSubmitRegister">Verify Now <icon-right-arrow></icon-right-arrow> </button>
      </div>
      <!-- <div class="submit-btn form-item">
        <button type="submit" class="btn black-btn"></button>
      </div> -->
      <div class="reg">
        Back to
        <icon-right-arrow></icon-right-arrow>
        <router-link to="/login">Login</router-link>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'

/* Constants */

const stateOptions = [
  { id: 1, name: "Goa" },
  { id: 2, name: "Maharashtra" },
];
const cityOptions = [
  { id: 1, name: "Ratnagiri" },
  { id: 2, name: "Mumbai" },
];

const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  name:null,
  phone:null,
  email:null,
  address:null,
  locality:null,
  gender:null,
  state: null,
  city: null,
});

/* Constants */


/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitRegister = () => {
  if (
    nameValid.value ||
    phoneValid.value ||
    emailValid.value ||
    genderValid.value ||
    addressValid.value ||
    localityValid.value ||
    stateValid.value ||
    cityValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/register", { userId:453245 });
};

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
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
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please select gender!";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter your address !";
  }
});
const localityValid = computed(() => {
  if (!formVar.locality) {
    return "Enter Locality!";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please select state!";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please select city!";
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