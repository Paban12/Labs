<template>
  <section class="doctors-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">All Doctors</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" @input="search($event.target.value)" placeholder="Search Doctors" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
            <div class="add-btn">
              <button class="btn black-btn" @click.prevent="storeVar.addDoctorModal = true">
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
                <th>Speciality</th>
                <th>Status</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.doctorData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.doctorDetail?.name }}</td>
                  <td>{{ item.phoneNumber }}</td>
                  <td>{{ item.doctorDetail?.emailId }}</td>
                  <td><span v-for="(items, index) in item.doctorDetail?.doctorSpecialization" :key="index">
                    <span>{{ items.specialization?.name }}, </span>
                  </span></td>
                  <td><span :class="item.doctorDetail?.status">{{ item.doctorDetail?.status }}</span></td>
                  <td class="text-center">
                    <div class="option-btns">
                      <a class="" @click="navigate('/doctor/profile', item.id)">
                        <img src="/src/assets/images/png/man.png" alt="" />
                      </a>
                      <div class="" @click.prevent="formVar.confirmModal = true">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.doctorData.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.doctorData.length > 0">
            <div class="entries">
              Showing <span>{{ formVar.offset }}</span> to <span>{{ formVar.limit + formVar.offset }}</span> of <span>{{
                storeVar.totalDoctor }}</span> entries
            </div>
            <div class="pagination">
              <span @click="clickFirst">First</span>
              <icon-left-double-arrow @click="lowerClick(storeVar.lowerPage)"></icon-left-double-arrow>
              <div class="page active" @click="lowerClick(storeVar.lowerPage)">{{ storeVar.lowerPage }}</div>
              <!-- <div v-if="storeVar.upperPage" class="page" @click="upperClick(storeVar.upperPage)">{{ storeVar.upperPage }}</div> -->
              <icon-right-double-arrow @click="upperClick(storeVar.lowerPage)"></icon-right-double-arrow>
              <span @click="clickLast">Last</span>
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
    <Modal v-model:show="storeVar.addDoctorModal" class="mid-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Doctor</div>
        <div class="close-btn" @click.prevent="storeVar.addDoctorModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitDoctor">
        <div class="two-inputs">
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.name" placeholder="Doctor Name" />
            <div class="err-msg" v-if="formVar.submit && nameValid">
              {{ nameValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
              placeholder="Select Gender"></Select>
            <div class="err-msg" v-if="formVar.submit && genderValid">
              {{ genderValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="date-input">
              <input type="date" v-model="formVar.dob" :max="today()" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="" />
              </div>
            </div>
            <div>{{ ageCalculate }}</div>
            <div class="err-msg" v-if="formVar.submit && dobValid">
              {{ dobValid }}
            </div>
          </div>
          <div class="mb-16">
            <input type="text" v-model="formVar.age" class="bg-blue" disabled />
          </div>
        </div>

        <div class="two-inputs">
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.phone" placeholder="Enter Phone no" v-on:keypress="isNumber($event)"
              v-on:keyup="phnum($event.target.value)" />
            <div class="err-msg" v-if="formVar.submit && phoneValid">
              {{ phoneValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Enter Alternate Phone no" />
          </div>
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.email" placeholder="Enter Email" />
            <div class="err-msg" v-if="formVar.submit && emailValid">
              {{ emailValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="formVar.speciality" :options="storeVar.specializationData" @selected="handleSelectedOption"
              placeholder="Select Speciality"></Select>
            <div class="err-msg" v-if="formVar.submit && specialityValid">
              {{ specialityValid }}
            </div>
          </div>
        </div>

        <div class="two-inputs">
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.council_no" placeholder="Enter Registration Council & No" />
            <div class="err-msg" v-if="formVar.submit && councilValid">
              {{ councilValid }}
            </div>
          </div>
          <span>{{ regExperienceCal }}</span>
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.council_year" placeholder="Enter Registration Year" />
            <div class="err-msg" v-if="formVar.submit && CyearValid">
              {{ CyearValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.experience" placeholder="Enter Experience (Years)" disabled/>
            <div class="err-msg" v-if="formVar.submit && experienceValid">
              {{ experienceValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="formVar.registration_type" :options="RegistrationType" @selected="handleSelectedOption"
              placeholder="Select State"></Select>
            <div class="err-msg" v-if="formVar.submit && typeValid">
              {{ typeValid }}
            </div>
          </div>
        </div>
        <div class="two-inputs">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
            <div class="err-msg" v-if="formVar.submit && stateValid">
              {{ stateValid }}
            </div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
              placeholder="Select City"></SingleSelect>
            <div class="err-msg" v-if="formVar.submit && cityValid">
              {{ cityValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="password" v-model="formVar.password" placeholder="Enter password" />
            <div class="err-msg" v-if="formVar.submit && passwordValid">
              {{ passwordValid }}
            </div>
          </div>
        </div>
        <div class="form-item mb-16">
          <textarea name="" id="" v-model="formVar.address" placeholder="Enter Address"></textarea>
          <div class="err-msg" v-if="formVar.submit && addressValid">
            {{ addressValid }}
          </div>
        </div>
        <div class="save-btn flex justify-end">
          <button type="button" class="btn black-btn w-10-r load-btn" v-if="storeVar.loaderButton">
            <icon-login-loader></icon-login-loader>
          </button>
          <button type="submit" class="btn black-btn w-10-r">Add</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Doctor);

const rolesOptions = [
  { id: 'EMPLOYEE', name: "EMPLOYEE" },
  { id: 'DOCTOR', name: "DOCTOR" },
  { id: 'STAFF', name: "STAFF" },
  { id: 'FRONT DESK', name: "FRONT DESK" },
  { id: 'BACK DESK', name: "BACK DESK" },
  { id: 'PATHOLOGIEST', name: "PATHOLOGIEST" },
];
const genderOptions = [
  { id: null, name: "Select Gender" },
  { id: 'MALE', name: "MALE" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const RegistrationType = [
  { id: null, name: 'Registration Type' },
  { id: 'Country', name: 'Country' },
  { id: 'State', name: 'State' },
]

const stateOptions = [
  { id: 'West Bengal', name: "West Bengal" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const cityOptions = [
  { id: 'Kolkata', name: "Kolkata" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const specialityOptions = [
  { id: null, name: "Select Speciality" },
  { id: 'Kolkata', name: "Kolkata" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const formVar = reactive({
  submit: false,
  confirmModal: false,
  addModal: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: 'ACTIVE',
  role: 'DOCTOR',
  name: null,
  phone: null,
  email: null,
  gender: genderOptions[0],
  registration_type: RegistrationType[0],
  speciality: { id: null, name: 'Select Speciality' },
  council_no: null,
  council_year: null,
  experience: null,
  state: null,
  city: null,
  address: null,
  dob: null,
  password: null,
  cPage: 1,
})

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, formVar.cPage)
  getSpecialization(formVar.limit, formVar.offset, formVar.keyword, true)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDoctor(limit, offset, keyword, status, role, cPage) {
  store.dispatch("Doctor/getDoctor", { limit, offset, keyword, status, role, cPage });
}
function getSpecialization(limit, offset, keyword, status) {
  store.dispatch("Doctor/getSpecialization", { limit, offset, keyword, status });
}
function search(text){
  if(text.length>2){
    getDoctor(formVar.limit, formVar.offset, text, formVar.status, formVar.role, formVar.cPage)
  }else if(text.length<=0){
    getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, formVar.cPage)
  }
}
function lowerClick(page) {
  if (page > 1) {
    formVar.offset = formVar.offset - formVar.limit
    getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, page <= 1 ? 1 : page - 1)
    storeVar.value.lowerPage = page <= 1 ? 1 : page - 1
  }
}
function upperClick(page) {
  if (storeVar.value.upperStatus) {
    formVar.offset = formVar.offset + formVar.limit
    getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, page + 1)
    storeVar.value.lowerPage = page + 1
  }
}
function clickFirst() {
  if (storeVar.value.lowerPage > 1) {
    formVar.offset = 0
    getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, 1)
    let pageNumber = storeVar.value.totalDoctor / formVar.limit
    if (Number.isInteger(pageNumber)) {
      storeVar.value.lowerPage = pageNumber
    }
    else {
      storeVar.value.lowerPage = Number(pageNumber.toFixed(0)) + 1
    }
  }
}
function clickLast() {
  if (storeVar.value.upperStatus) {
    let remainder = storeVar.value.totalDoctor % formVar.limit
    formVar.offset = storeVar.value.totalDoctor - remainder
    getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, 1)
    let pageNumber = storeVar.value.totalDoctor / formVar.limit
    if (Number.isInteger(pageNumber)) {
      storeVar.value.lowerPage = pageNumber
    }
    else {
      storeVar.value.lowerPage = Math.trunc(pageNumber) + 1
    }
  }
}
const onSubmitDoctor = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    genderValid.value ||
    dobValid.value ||
    specialityValid.value ||
    councilValid.value ||
    CyearValid.value ||
    experienceValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    typeValid.value ||
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addDoctor", {
    mobile: formVar.phone,
    name: formVar.name,
    emailId: formVar.email,
    gender: formVar.gender?.id,
    dob: formVar.dob,
    roles: formVar.role,
    password: formVar.password,
    city: formVar.city,
    state: formVar.state,
    reg_number: formVar.council_no,
    reg_year: formVar.council_year,
    reg_type: formVar.registration_type.id,
    experience: formVar.experience,
    address: formVar.address,
    about: null,
    altMobile: null,
    altEmail: null,
    type:formVar.role
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
    var total_age = `${m} M`
  } else {
    var total_age = `${age} Y`
  }
  formVar.age = total_age;
}
const ageCalculate = computed(() => {
  if (formVar.dob) {
    getAge(formVar.dob)
  }
});

const regExperienceCal = computed(() => {
  if (formVar.council_year) {
    let yer=moment().format('YYYY')-moment(formVar.council_year).format('YYYY').toString()
    if(yer){
      if(JSON.parse(yer) >1){
        formVar.experience=yer.toString()
      }
    }
  }else if(!formVar.council_year){
    formVar.experience=null
  }
});
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter doctor name!";
  }
});

const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Select dob!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Enter doctor address!";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender.id) {
    return "Please select gender!";
  }
});
const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please enter password!";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality.id) {
    return "Please select speciality!";
  }
});

const councilValid = computed(() => {
  if (!formVar.council_no) {
    return "Please enter registration council & no !";
  }
});
const CyearValid = computed(() => {
  if (!formVar.council_year) {
    return "Please enter registration year !";
  }
});

const experienceValid = computed(() => {
  if (!formVar.experience) {
    return "Please enter experience year !";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please select state !";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please select city !";
  }
});
const typeValid = computed(() => {
  if (!formVar.registration_type.id) {
    return "Please select registration type !";
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