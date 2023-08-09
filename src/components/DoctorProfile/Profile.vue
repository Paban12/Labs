<template>
  <section class="doctor-profile">
    <form action="" class="form">
      <div class="row">
        <div class="form-item col-25 mb-16">
          <div class="title">Name</div>
          <input type="text" placeholder="Enter Name">
          <div class="err-msg">Please enter name</div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Phone No</div>
          <input type="number" placeholder="Enter Phone No">
          <div class="err-msg">Please enter phone no</div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Alternate Phone No</div>
          <input type="number" placeholder="Enter Alternate Phone No">
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Email</div>
          <input type="text" placeholder="Enter Email">
          <div class="err-msg">Please enter email</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-25 mb-16">
          <div class="title">Gender</div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>
          <div class="err-msg">Please select gender</div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Date Of Birth</div>
          <div class="date-input">
            <input type="date" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="">
            </div>
          </div>
          <div class="err-msg">Please select DOB</div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Registration Council & No</div>
          <input type="text" placeholder="Registration Council & No">
          <div class="err-msg">Please enter registration council & no</div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Registration Year</div>
          <input type="text" placeholder="Registration Year">
          <div class="err-msg">Please enter reg. year</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-25 mb-16">
          <div class="title">Experience</div>
          <input type="text" placeholder="Experience">
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">Registartion Type</div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">Registration Type</option>
              <option value="">Country</option>
              <option value="">State</option>
            </select>
          </div>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">State</div>
          <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
            placeholder="Select State"></SingleSelect>
        </div>
        <div class="form-item col-25 mb-16">
          <div class="title">City</div>
          <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
            placeholder="Select State"></SingleSelect>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <textarea name="" id="" placeholder="Address"></textarea>
        </div>
        <div class="form-item col-5 mb-16">
          <textarea name="" id="" placeholder="About"></textarea>
        </div>
      </div>
      <div class="save-btn">
        <button class="btn black-btn w-10-r">Save</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  state: null,
  city: null,
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

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>

</style>