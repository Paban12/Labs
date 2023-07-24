<template>
  <section class="login-form-inner">
    <form action="" class="form">
      <h2>Welcome to Parchi</h2>
      <div class="text">Login to continue</div>
      <div class="form-item mb-16">
        <div class="title">Phone Number</div>
        <div class="input">
          <input type="number" v-model="formVar.loginId" placeholder="+91 8888888888" v-on:keyup="phnum($event.target.value)">
        </div>
        <div class="err-msg" v-if="formVar.submit && loginIdValid">{{ loginIdValid }}</div>
      </div>

      <div class="login-btn">
        <button class="btn black-btn" @click="onSubmitLogin">Get OTP <icon-right-arrow></icon-right-arrow> </button>
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
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  loginId: null,
});

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = () => {
  if (
    loginIdValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {     
    userId: 10563543453,
    password: 4532453, });
};
/* Functions/Methods */

/* Validation */
const loginIdValid = computed(() => {
  if (!formVar.loginId) {
    return "Please enter your phone number!";
  }
});
function phnum(e) {
  formVar.loginId = e.slice(0, 10)
}
/* Validation */
</script>


<style>

</style>