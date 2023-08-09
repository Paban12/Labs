<template>
  <section class="login-form-inner">
    <form action="" class="form">
      <h2>Welcome to Parchi</h2>
      <div class="text">Login to continue</div>
      <div class="form-item mb-16">
        <div class="title">Phone Number</div>
        <div class="input">
          <input type="text" v-model="formVar.loginId" placeholder="+91 8888888888"
          v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)">
        </div>
        <div class="err-msg" v-if="formVar.submit && loginIdValid">{{ loginIdValid }}</div>
        <div class="title">Password</div>
        <div class="input">
          <input type="text" v-model="formVar.password" placeholder="Password">
        </div>
        <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
      </div>
      <div class="login-btn form-item">
        <button type="button" class="btn black-btn load-btn" v-if="storeVar.loaderButton">
          <icon-login-loader></icon-login-loader>
        </button>
        <button type="button" class="btn black-btn" v-else @click="onSubmitLogin">Get OTP <icon-right-arrow></icon-right-arrow> </button>
      </div>
      <!-- <div class="login-btn">
        <button type="button" class="btn black-btn" @click="onSubmitLogin"> <icon-right-arrow></icon-right-arrow> </button>
      </div> -->
      <div class="reg">
        New On Parchi
        <icon-right-arrow></icon-right-arrow> 
        <router-link to="/register">Register Here</router-link> 
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  loginId: null,
  password:null,
});

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = () => {
  if (
    loginIdValid.value ||
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {     
    loginId: formVar.loginId,
    password: formVar.password, });
};
/* Functions/Methods */

/* Validation */
const loginIdValid = computed(() => {
  if (!formVar.loginId) {
    return "Please enter your phone number!";
  }
});
const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please enter your password!";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.loginId = e.slice(0, 10)
}
/* Validation */
</script>


<style>

</style>