<template>
  <section class="patients-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">All Patients</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Patients" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
            <div class="add-btn">
              <button class="btn black-btn" @click.prevent="formVar.addModal = true">
                Add New
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Appointments</th>
                <th>Lab tests</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in patientData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.appointments }}</td>
                  <td>{{ item.lab_tests }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <router-link to="/patient/profile" class="">
                        <img src="/src/assets/images/png/man.png" alt="" />
                      </router-link>
                      <router-link to="/patient/edit" class="">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </router-link>
                      <div class="" @click.prevent="formVar.confirmModal = true">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data">
            <div >No records Found!</div>
          </div>
          <div class="table-footer">
            <div class="entries">
              Showing <span>0</span> to <span>0</span> of <span>0</span> entries
            </div>
            <div class="pagination">
              <span>First</span>
              <span>Previous</span>
              <div class="page">1</div>
              <span>Next</span>
              <span>Last</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="formVar.addModal" class="mid-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Patient</div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitPatient">
        <div class="row">
          <div class="col-25 form-item mb-16">
            <SingleSelect v-model="formVar.prefix" :options="prefixOptions" @selected="handleSelectedOption"
              placeholder="Select Prefix"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && prefixValid">{{ prefixValid }}</div>
          </div>
          <div class="col-75 form-item mb-16">
            <input type="text" v-model="formVar.name" placeholder="Patient Name" />
            <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-25 form-item mb-16">
            <SingleSelect v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
              placeholder="Select Gender"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && genderValid">{{ genderValid }}</div>
          </div>
          <div class="col-5 form-item mb-16">
            <div class="date-input">
              <input type="date" v-model="formVar.dob" :max="today()" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="" />
              </div>
            </div>
            <div>{{ ageCalculate }}</div>
            <div class="err-msg" v-if="formVar.submit && dobValid">{{ dobValid }}</div>
          </div>
          <div class="col-25 form-item mb-16">
            <input type="text" v-model="formVar.age" class="bg-blue" disabled />
          </div>
        </div>
        <div class="row">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.blood" :options="bloodOptions" @selected="handleSelectedOption"
              placeholder="Select Blood Group"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && bloodValid">{{ bloodValid }}</div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.language" :options="langOptions" @selected="handleSelectedOption"
              placeholder="Select Language"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && languageValid">{{ languageValid }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.maritalStatus" :options="maritalStatusOptions" @selected="handleSelectedOption"
              placeholder="Marital Status"></SingleSelect>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.activityLevel" :options="activityLevelOptions" @selected="handleSelectedOption"
              placeholder="Activity Level"></SingleSelect>
          </div>
        </div>
        <div class="row">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.smoking" :options="smokingOptions" @selected="handleSelectedOption"
              placeholder="Smoking Habit"></SingleSelect>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.alcohol" :options="alcoholOptions" @selected="handleSelectedOption"
              placeholder="Alcohol Consumption"></SingleSelect>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.phone" placeholder="Enter Phone no"
            v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)" />
            <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
          </div>
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.email" placeholder="Enter Email" />
            <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
              placeholder="Select City"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
          </div>
        </div>
        <div class="form-item mb-16">
          <textarea type="text" v-model="formVar.address" placeholder="Enter Address" />
          <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
        </div>
        <div class="two-inputs">
          <div class="col-5 form-item mb-16">
            <div class="dr-input">
              <div class="dr-tag">Dr</div>
              <input type="text" v-model="formVar.doctor" placeholder="Refered by" />
            </div>
            <div class="err-msg" v-if="formVar.submit && doctorValid">{{ doctorValid }}</div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.speciality" :options="specialityOptions" @selected="handleSelectedOption"
              placeholder="Select Speciality"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && specialityValid">{{ specialityValid }}</div>
          </div>
        </div>
        <div class="save-btn form-item">
          <button class="btn black-btn">Add</button>
        </div>
      </form>
    </Modal>
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
  confirmModal: false,
  addModal: false,
  prefix: "",
  gender: "",
  blood: "",
  state: "",
  city: "",
  speciality: "",
  language: "",
  name:null,
  dob:null,
  phone:null,
  email:null,
  address:null,
  doctor:null,
  maritalStatus:null,
  activityLevel:null,
  smoking:null,
  alcohol:null,
})

const patientData = reactive([
  {
    id: 125,
    name: "Prakash Jhaa",
    phone: 8888888888,
    email: "patient@mail.com",
    appointments: 12,
    lab_tests: 15,
  },
]);

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
  { name: "Male", id: "male" },
  { name: "Female", id: "female" },
  { name: "Other", id: "other" },
];
const prefixOptions = [
  { name: "Mr.", id: "mr" },
  { name: "Mrs.", id: "mrs" },
];
const bloodOptions = [
  { name: "A+", id: "a+" },
  { name: "B+", id: "b+" },
  { name: "O+", id: "o+" },
  { name: "AB+", id: "ab+" },
  { name: "A-", id: "a-" },
  { name: "B-", id: "b-" },
  { name: "O-", id: "o-" },
  { name: "AB-", id: "ab-" },
];
const maritalStatusOptions = [
  { name: "Married", id: "1" },
  { name: "Unmarried", id: "2" },
];
const activityLevelOptions = [
  { name: "regular", id: "1" },
  { name: "never", id: "2" },
];
const alcoholOptions = [
  { name: "Yes", id: "1" },
  { name: "No", id: "2" },
];
const smokingOptions = [
  { name: "Yes", id: "1" },
  { name: "No", id: "2" },
];

//search select end//

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitPatient = () => {
  if (
    nameValid.value || 
    prefixValid.value || 
    genderValid.value || 
    dobValid.value || 
    bloodValid.value || 
    phoneValid.value || 
    emailValid.value || 
    addressValid.value || 
    stateValid.value || 
    cityValid.value || 
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
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter your email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
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

/* Validation */
</script>

<style></style>