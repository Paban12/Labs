<template>
  <section class="login-form-inner">
    <form class="form">
      <h2>Welcome to Parchi</h2>
      <span>
        Enter OTP for Login
      </span>
      <div class="otp-inputs">
        <input class="otp-input" v-model="formVar.input1" type="text" v-on:keypress="isNumber($event)"
         @keyup="tabChange(1)" maxlength="1" />
        <input class="otp-input" v-model="formVar.input2" type="text" v-on:keypress="isNumber($event)" 
        @keyup="tabChange(2)" maxlength="1" />
        <input class="otp-input" v-model="formVar.input3" type="text" v-on:keypress="isNumber($event)" 
        @keyup="tabChange(3)" maxlength="1" />
        <input class="otp-input" v-model="formVar.input4" type="text" v-on:keypress="isNumber($event)" 
        @keyup="tabChange(4)" maxlength="1" />

      </div>
      <div class="err-msg" v-if="formVar.submit && otpValid">{{ otpValid }}</div>
      <div class="send-again">
        Didn't get it?
        <strong>Send Again</strong>
      </div>
      <div class="login-btn form-item">
        <button class="btn black-btn load-btn" v-if="storeVar.loaderButton">
          <icon-login-loader></icon-login-loader>
        </button>
        <button type="button" class="btn black-btn" v-else @click="onSubmitOtp">Verify <icon-right-arrow></icon-right-arrow> </button>
      </div>
      <div class="reg">
        New On Parchi
        <icon-right-arrow></icon-right-arrow>
        <router-link to="/register">Register Here</router-link>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  input1: null,
  input2: null,
  input3: null,
  input4: null,
});

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitOtp = () => {
  if (
    otpValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
  store.dispatch("Auth/otpVerifyUser", {     
    userId: 10563543453,
    otp: formVar.input1 + formVar.input2 + formVar.input3 + formVar.input4,});
  };

function tabChange(val) {
  let ele = document.querySelectorAll('input');
  if (ele[val - 1].value != '') {
    if (val < 4) {
      ele[val].focus();
    }
  } else if (ele[val - 1].value == '') {
    if (val > 1) {
      ele[val - 2].focus();
    }
  }
}
/* Functions/Methods */


/* Validation */
const otpValid = computed(() => {
  if (!formVar.input1 || !formVar.input2 || !formVar.input3 || !formVar.input4) {
    return "Please Enter OTP!";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
/* Validation */




</script>

<style></style>