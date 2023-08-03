<template>
  <section class="account-edit-page">
    <div class="card mb-16">
      <div class="header">
        <div class="date">(Reg. date: 05 Jun 23)</div>
        <div class="barcode">
          <div class="no">Case ID WASS987987898</div>
          <img src="/src/assets/images/png/barcode.png" alt="">
        </div>
      </div>
      <form action="" class="form acc-edit-form" @submit.prevent="onSubmitAccount">
        <div class="row row1">
          <div class="col-5 two-inputs mb-16">
            <div class="col-25 form-item">
              <div class="title">Prefix</div>
              <SingleSelect v-model="formVar.prefix" :options="prefixOptions" @selected="handleSelectedOption"
                placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && prefixValid">{{ prefixValid }}</div>
            </div>
            <div class="col-75 form-item">
              <div class="title">Patient Name</div>
              <input type="text" v-model="formVar.name" placeholder="Patient name">
              <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
            </div>
          </div>

          <div class="col-5 two-inputs">
            <div class="col-3 form-item mb-16">
              <div class="title">Gender</div>
              <SingleSelect v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
                placeholder="Select Gender"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && genderValid">{{ genderValid }}</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">Select DOB</div>
              <div class="date-input">
                <input type="date" v-model="formVar.dob" :max="today()">
                <div class="icon">
                  <img src="/src/assets/images/icons/calender.svg" alt="">
                </div>
              </div>
              <div>{{ ageCalculate }}</div>
              <div class="err-msg" v-if="formVar.submit && dobValid">{{ dobValid }}</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Age</div>
              <input type="text" v-model="formVar.age" class="bg-blue" disabled>
            </div>

          </div>
        </div>
        <div class="row row2">
          <div class="col-4 two-inputs">
            <div class="col-5 form-item mb-16">
              <div class="title">Blood Group</div>
              <SingleSelect v-model="formVar.blood" :options="bloodOptions" @selected="handleSelectedOption"
                placeholder="Select Blood Group"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && bloodValid">{{ bloodValid }}</div>
            </div>
            <div class="col-5 form-item mb-16">
              <div class="title">Phone Number</div>
              <input type="number" v-model="formVar.phone" placeholder="+918888888888"
              v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)">
              <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
            </div>
          </div>
          <div class="col-6 two-inputs">
            <div class="col-6 form-item mb-16">
              <div class="title">Address</div>
              <input type="text" v-model="formVar.address" placeholder="Address">
              <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">State</div>
              <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
                placeholder="Select State"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
            </div>
          </div>
        </div>
        <div class="row row3">
          <div class="col-3 two-inputs">
            <div class="col-6 form-item mb-16">
              <div class="title">City</div>
              <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
                placeholder="Select City"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">Pin Code</div>
              <input type="number" v-model="formVar.pincode" placeholder="6 digit code" 
              v-on:keypress="isNumber($event)"  v-on:keyup="pinnum($event.target.value)">
              <div class="err-msg" v-if="formVar.submit && pincodeValid">{{ pincodeValid }}</div>
            </div>
          </div>
          <div class="col-7 two-inputs">
            <div class="col-4 form-item mb-16">
              <div class="title">Refered By</div>
              <div class="dr-input">
                <div class="dr-tag">Dr</div>
                <input type="text" v-model="formVar.doctor" placeholder="Refered by">
              </div>
              <div class="err-msg" v-if="formVar.submit && doctorValid">{{ doctorValid }}</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Select Speciality</div>
              <SingleSelect v-model="formVar.speciality" :options="specialityOptions" @selected="handleSelectedOption"
                placeholder="Select Speciality"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && specialityValid">{{ specialityValid }}</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Preferred Language</div>
              <SingleSelect v-model="formVar.language" :options="langOptions" @selected="handleSelectedOption"
                placeholder="Select Language"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && languageValid">{{ languageValid }}</div>
            </div>
          </div>
        </div>
        <div class="save-btn row flex justify-center">
          <button type="submit" class="btn col-25 black-btn">Save</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit:false,
  prefix: "",
  gender: "",
  blood: "",
  state: "",
  city: "",
  speciality: "",
  language: "",
  name:null,
  age:null,
  dob:null,
  phone:null,
  address:null,
  pincode:null,
  doctor:null,
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
const langOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const specialityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const genderOptions = [
  { name: 'Male', id: 'male' },
  { name: 'Female', id: 'female' },
  { name: 'Other', id: 'other' },
];
const prefixOptions = [
  { name: 'Mr.', id: 'mr' },
  { name: 'Mrs.', id: 'mrs' },
];
const bloodOptions = [
  { name: 'A+', id: 'a+' },
  { name: 'B+', id: 'b+' },
  { name: 'O+', id: 'o+' },
  { name: 'AB+', id: 'ab+' },
  { name: 'A-', id: 'a-' },
  { name: 'B-', id: 'b-' },
  { name: 'O-', id: 'o-' },
  { name: 'AB-', id: 'ab-' },
]

//search select end//
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitAccount = () => {
  if (
    nameValid.value || 
    prefixValid.value || 
    genderValid.value || 
    dobValid.value || 
    bloodValid.value || 
    phoneValid.value || 
    addressValid.value || 
    stateValid.value || 
    cityValid.value || 
    pincodeValid.value || 
    doctorValid.value || 
    specialityValid.value || 
    languageValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {
    userId: 10563543453,
    password: 4532453,
  });
};
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
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
			if (age === 0 ) {
				var total_age = `${m} m`
			} else {
				var total_age = `${age} y`
			}
			formVar.age= total_age;
		}
const ageCalculate = computed(() => {
  if (formVar.dob) {
    getAge(formVar.dob)
  }
});
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter patient name!";
  }
});

const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Select dob!";
  }
});
const prefixValid = computed(() => {
  if (!formVar.prefix) {
    return "Select prefix!";
  }
});
const bloodValid = computed(() => {
  if (!formVar.blood) {
    return "Select blood group!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter phone no!";
  }else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const doctorValid = computed(() => {
  if (!formVar.doctor) {
    return "Please enter doctor!";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please select gender!";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Please select speciality!";
  }
});
const languageValid = computed(() => {
  if (!formVar.language) {
    return "Please select language!";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter address!";
  }
});
const pincodeValid = computed(() => {
  if (!formVar.pincode) {
    return "Enter pincode!";
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
function pinnum(e) {
  formVar.pincode = e.slice(0, 6)
}
/* Validation */


</script>

<style></style>