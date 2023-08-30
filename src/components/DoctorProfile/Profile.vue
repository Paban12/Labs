<template>
  <section class="doctor-profile">
    <form action="" class="form">
      <div class="two-inputs">
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Name</div>
            <input type="text" placeholder="Enter Name">
            <div class="err-msg">Please enter name</div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">Phone No</div>
            <input type="number" placeholder="Enter Phone No">
            <div class="err-msg">Please enter phone no</div>
          </div>
        </div>
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Alternate Phone No</div>
            <input type="number" placeholder="Enter Alternate Phone No">
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">Email</div>
            <input type="text" placeholder="Enter Email">
            <div class="err-msg">Please enter email</div>
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="row">
          <div class="form-item col-5 mb-16">
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
          <div class="form-item col-5 mb-16">
            <div class="title">Date Of Birth</div>
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
            <div class="err-msg">Please select DOB</div>
          </div>
        </div>
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Registration Council & No</div>
            <input type="text" placeholder="Registration Council & No">
            <div class="err-msg">Please enter registration council & no</div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">Registration Year</div>
            <input type="text" placeholder="Registration Year">
            <div class="err-msg">Please enter reg. year</div>
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Experience</div>
            <input type="text" placeholder="Experience">
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">Registartion Type</div>
            <div class="select-dropdown">
              <select name="" id="">
                <option value="">Registration Type</option>
                <option value="">Country</option>
                <option value="">State</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">State</div>
            <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">City</div>
            <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <textarea name="" id="" v-model="storeVar.address" placeholder="Address" />
          <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
        </div>
        <div class="form-item col-5 mb-16">
          <textarea name="" id="" placeholder="About"></textarea>
        </div>
      </div>
      <div class="save-btn">
        <button type="submit" class="btn black-btn w-10-r">Save</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
import { useRoute } from "vue-router";

/* Constants */
const genderOptions = [
  { id: 'MALE', name: "MALE" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const registrationOptions = [
  { id: 'Registration Type', name: "Registration Type" },
  { id: 'Country', name: "Country" },
  { id: 'State', name: "State" },
]
const store = useStore()
const route = useRoute();
const storeVar = computed(() => store.state.Doctor);
const formVar = reactive({
  submit: false,
  id: null,
  state: null,
  city: null,
  regType: registrationOptions[0]
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.id = route.query.id
    getDoctorProfile(formVar.id)
  }
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDoctorProfile(id) {
  store.dispatch("Doctor/getDoctorProfile", { id });
}
//search select start//
const stateOptions = [
  { id: 'West Bengal', name: "West Bengal" },
  { id: 'Asham', name: "Asham" },
];
const cityOptions = [
  { id: 'Kolkata', name: "Kolkata" },
  { id: 'Durgapur', name: "Durgapur" },
];

const onSubmitDoctor = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    genderValid.value ||
    dobValid.value ||
    altMobileValid.value ||
    regNumberValid.value ||
    pincodeValid.value ||
    stateValid.value ||
    cityValid.value ||
    addressValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/updateDoctorProfile", {
    name:storeVar.value.name,
    emailId:storeVar.value.emailId,
    altEmail:"test@gmail.com",
    mobile:storeVar.value.mobile,
    altMobile:storeVar.value.altMobile,
    gender:storeVar.value.gender?.id,
    dob:storeVar.value.dob,
    city:storeVar.value.city,
    state:storeVar.value.state,
    pincode:storeVar.value.pincode,
    reg_number:storeVar.value.reg_number,
    address:storeVar.value.address,
    id:formVar.id,
  });
};
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
function navigate(link, id) {
  router.push({ path: link, query: { id } })
}
function today() {
  var fullDate = new Date()
  var tDate = fullDate.getDate()
  var tYear = fullDate.getFullYear()
  var tMonth = fullDate.getMonth() + 1
  if (tMonth < 10) {
    tMonth = '0' + tMonth
  }
  if (tDate < 10) {
    tDate = '0' + tDate
  }
  var minDate = tYear + '-' + tMonth + '-' + tDate
  return minDate
}
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  var d = today.getDay() - birthDate.getDay();
  if (age === 0) {
    var total_age = `${m} m`
  } else {
    var total_age = `${age} y`
  }
  formVar.age = total_age;
}
const ageCalculate = computed(() => {
  if (formVar.dob) {
    getAge(formVar.dob)
  }
});
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!storeVar.value.name) {
    return "Enter name !";
  }
});

const dobValid = computed(() => {
  if (!storeVar.value.dob) {
    return "Select dob!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!storeVar.value.mobile) {
    return "Please enter phone no!";
  } else if (!phoneValid.test(storeVar.value.mobile)) {
    return "Please enter valid phone no!";
  }
});
const altMobileValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!storeVar.value.altMobile) {
    return "Please enter alternate phone no!";
  } else if (!phoneValid.test(storeVar.value.altMobile)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!storeVar.value.emailId) {
    return "Please enter email!";
  } else if (!emailValid.test(storeVar.value.emailId)) {
    return "Please enter valid email!";
  }
});

const genderValid = computed(() => {
  if (!storeVar.value.gender) {
    return "Please select gender!";
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
const addressValid = computed(() => {
  if (!storeVar.value.address) {
    return "Please enter address!";
  }
});
const regNumberValid = computed(() => {
  if (!storeVar.value.reg_number) {
    return "Please enter registration no!";
  }
});
const pincodeValid = computed(() => {
  if (!storeVar.value.pincode) {
    return "Please enter pincode !";
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