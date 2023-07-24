<template>
  <section class="login-form-inner register-form">
    <form class="form">
      <h2>Welcome to Parchi</h2>
      <span>
        Enter details for Register
      </span>
      <div class="form-item mb-16">
        <input type="text" class="" placeholder="Enter your name">
        <div class="err-msg">Please enter your name</div>
      </div>
      <div class="form-item mb-16">
        <input type="number" class="" placeholder="Enter your phone no">
        <div class="err-msg">Please enter your phone no</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" class="" placeholder="Enter your email">
        <div class="err-msg">Please enter your email</div>
      </div>
      <div class="radio-btns mb-16">
        <div class="two-inputs">
          <div class="col-5 form-item">
            <input type="radio" name="gender" id="male">
            <label for="male">Male</label>
          </div>
          <div class="col-5 form-item">
            <input type="radio" name="gender" id="female">
            <label for="female">Female</label>
          </div>
          <div class="col-5 form-item">
            <input type="radio" name="gender" id="other">
            <label for="other">Other</label>
          </div>
        </div>
        <div class="err-msg text-left">Please select gender</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" class="" placeholder="Enter your address">
        <div class="err-msg">Please enter your address</div>
      </div>
      <div class="form-item mb-16">
        <input type="text" placeholder="Locality">
        <div class="err-msg text-left">Enter Locality</div>
      </div>
      <div class="form-item mb-16">
        <SingleSelect
          v-model="login.state"
          :options="stateOptions"
          @selected="handleSelectedOption"
          placeholder="Select state"
        ></SingleSelect>
        <div class="err-msg text-left">Please select state</div>
      </div>
      <div class="form-item mb-16">
        <SingleSelect
          v-model="login.city"
          :options="cityOptions"
          @selected="handleSelectedOption"
          placeholder="Select city"
        ></SingleSelect>
        <div class="err-msg">Please select city</div>
      </div>
      <div class="submit-btn form-item">
        <button class="btn black-btn">Verify Now</button>
      </div>
      <div class="reg">
        Back to
        <icon-right-arrow></icon-right-arrow> 
        <router-link to="/login">Login</router-link> 
      </div>
    </form>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const login = reactive({
    state: "",
    city: "",
  })

  const stateOptions = [
    { id: 1, name: "Goa" },
    { id: 2, name: "Maharashtra" },
  ];
  const cityOptions = [
    { id: 1, name: "Ratnagiri" },
    { id: 2, name: "Mumbai" },
  ];

  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };

</script>

<style>

</style>