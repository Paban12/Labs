<template>
  <form action="" class="form">
    <!-- <h2>Welcome to Thyromax</h2> -->
    <img src="/src/assets/images/logo/logo-black.png" class="logo" alt="" />
    <div class="text">Login to continue</div>
    <div class="form-item mb-16">
      <div class="title">Phone</div>
      <div class="input">
        <input v-model="formVar.loginId" type="text" name="phone" placeholder="Phone number" />
        <div class="err-msg" v-if="formVar.submit && loginIdValid">{{ loginIdValid }}</div>
      </div>
    </div>
    <div class="form-item mb-16">
      <div class="title">Password</div>
      <div class="input">
        <input v-model="formVar.password" type="password" placeholder="*******" />
      </div>
      <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
    </div>
    <div class="forgot">
      <router-link to="/forgot">Forgot Password?</router-link>
    </div>
    <div class="login-btn">
      <button type="button" class="btn black-btn" @click="onSubmitLogin">
        Login <icon-right-arrow></icon-right-arrow>
      </button>
      <!-- <button type="button" class="btn black-btn load-btn">
      <icon-login-loader></icon-login-loader>
    </button> -->
    </div>
    <!-- <div class="reg">
      Rorgot Password
      <icon-right-arrow></icon-right-arrow> 
      <router-link to="/forgot">Forgot Password?</router-link>
    </div> -->
  </form>
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
  password: null,
});

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = () => {
  if (loginIdValid.value || passwordValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {
    loginId: formVar.loginId,
    password: formVar.password,
  });
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
  formVar.loginId = e.slice(0, 10);
}
/* Validation */
</script>


<style></style>