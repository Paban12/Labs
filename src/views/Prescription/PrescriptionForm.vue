<template>
  <section class="prescription-form">
    <div class="card">
      <form action="" class="form">
        <h3>Doctor Prescription</h3>
        <span class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ullam?
        </span>
        <div class="row two-inputs">
          <div class="form-item col-5 mb-16">
            <input type="number" class="" placeholder="Phone No">
            <div class="err-msg">Please enter your phone no</div>
          </div>
          <div class="form-item col-5 mb-16">
            <input type="text" class="" placeholder="Email">
            <div class="err-msg">Please enter your email</div>
          </div>
        </div>
        <div class="row two-inputs">
          <div class="form-item col-5 mb-16">
            <input type="text" placeholder="First Name">
            <div class="err-msg text-left">Enter first name</div>
          </div>
          <div class="form-item col-5 mb-16">
            <input type="text" placeholder="Last Name">
            <div class="err-msg text-left">Enter last name</div>
          </div>
        </div>
        <div class="form-item mb-16">
          <input type="text" class="" placeholder="Full Address">
          <div class="err-msg">Please enter your full address</div>
        </div>
        <div class="row two-inputs">
          <div class="form-item col-5 mb-16">
            <SingleSelect
              v-model="consult.state"
              :options="stateOptions"
              @selected="handleSelectedOption"
              placeholder="Select State"
            ></SingleSelect>
            <div class="err-msg">Please select state</div>
          </div>
          <div class="form-item col-5 mb-16">
            <SingleSelect
              v-model="consult.city"
              :options="cityOptions"
              @selected="handleSelectedOption"
              placeholder="Select City"
            ></SingleSelect>
            <div class="err-msg">Please select city</div>
          </div>
        </div>
        <div class="row two-inputs">
          <div class="form-item col-5 mb-16">
            <SingleSelect
              v-model="consult.doctor"
              :options="doctorOptions"
              @selected="handleSelectedOption"
              placeholder="Select Doctor"
            ></SingleSelect>
            <div class="err-msg">Please select doctor</div>
          </div>
          <div class="form-item col-5 mb-16">
            <SingleSelect
              v-model="consult.time"
              :options="timeOptions"
              @selected="handleSelectedOption"
              placeholder="Select Time"
            ></SingleSelect>
            <div class="err-msg">Please select time</div>
          </div>
        </div>
        <div class="submit-btns flex justify-center align-center form-item">
          <button class="btn clear-btn">Clear</button>
          <button class="btn black-btn">Save & Continue</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const consult = reactive({
    state: "",
    city: "",
    doctor: "",
    time: "",
  })

  //search select start//
  const stateOptions = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
  ];
  const cityOptions = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
  ];
  const doctorOptions = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
  ];
  const timeOptions = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
  ];

  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };
  //search select end//

</script>

<style>

</style>