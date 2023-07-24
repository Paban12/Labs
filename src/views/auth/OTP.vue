<template>
  <section class="login-form-inner">
    <form class="form">
      <h2>Welcome to Parchi</h2>
      <span>
        Enter OTP for Login
      </span>
      <div class="form-item">
        <div class="otp-inputs">
          <input
            class="otp-input"
            v-model="otpData.input1"
            type="number"
            @input="digitValidate(1)"
            @keyup="tabChange(1)"
            maxlength="1"
          />
          <input
            class="otp-input"
            v-model="otpData.input2"
            type="number"
            @input="digitValidate(2)"
            @keyup="tabChange(2)"
            maxlength="1"
          />
          <input
            class="otp-input"
            v-model="otpData.input3"
            type="number"
            @input="digitValidate(3)"
            @keyup="tabChange(3)"
            maxlength="1"
          />
          <input
            class="otp-input"
            v-model="otpData.input4"
            type="number"
            @input="digitValidate(4)"
            @keyup="tabChange(4)"
            maxlength="1"
          />
        </div>
      </div>
      <div class="send-again">
        Didn't get it? 
        <strong>Send Again</strong>
      </div>
      <div class="login-btn form-item">
        <button class="btn black-btn">Verify <icon-right-arrow></icon-right-arrow> </button>
        <!-- <button class="btn black-btn load-btn">
          <icon-login-loader></icon-login-loader>
        </button> -->
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
  import { reactive } from 'vue';

  const otpData = reactive({
    input1: null,
    input2: null,
    input3: null,
    input4: null,
  });

  function digitValidate(ele) {
    if (ele === 1) {
      otpData.input1 = otpData.input1.replace(/[^0-9]/g, '')
    }
    if (ele === 2) {
      otpData.input2 = otpData.input2.replace(/[^0-9]/g, '')
    }
    if (ele === 3) {
      otpData.input3 = otpData.input3.replace(/[^0-9]/g, '')
    }
    if (ele === 4) {
      otpData.input4 = otpData.input4.replace(/[^0-9]/g, '')
    }
  }

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
</script>

<style>

</style>