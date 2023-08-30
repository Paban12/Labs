<template>
  <section class="doctors-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">All Doctors</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Doctors" />
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
                  <td>{{ item.speciality }}</td>
                  <td>{{ item.doctorDetail?.status }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <a class="" @click="navigate('/doctor/profile',item.id)">
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
          <div class="table-footer">
            <div class="entries">
              Showing <span>{{ formVar.offset }}</span> to <span>{{ formVar.limit+formVar.offset }}</span> of <span>{{
                storeVar.totalDoctor }}</span> entries
            </div>
            <div class="pagination">
              <span @click="clickFirst">First</span>
              <span @click="lowerClick(storeVar.lowerPage)">Previous</span>
              <div class="page" @click="lowerClick(storeVar.lowerPage)">{{ storeVar.lowerPage }}</div>
              <!-- <div v-if="storeVar.upperPage" class="page" @click="upperClick(storeVar.upperPage)">{{ storeVar.upperPage }}</div> -->
              <span @click="upperClick(storeVar.lowerPage)">Next</span>
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
    <Modal v-model:show="storeVar.addDoctorModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Doctor</div>
        <div class="close-btn" @click.prevent="storeVar.addDoctorModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitDoctor">
        <div class="row">
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.name" placeholder="Doctor Name" />
            <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
          </div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.email" placeholder="Enter Email" />
          <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.phone" placeholder="Enter Phone no" v-on:keypress="isNumber($event)"
            v-on:keyup="phnum($event.target.value)" />
          <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
        </div>
        <div class="form-item mb-16">
          <SingleSelect v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
            placeholder="Select Gender"></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && genderValid">{{ genderValid }}</div>
        </div>
        <div class="row">
          <div class="col-75 form-item mb-16">
            <div class="date-input">
              <input type="date" v-model="formVar.dob" :max="today()" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="" />
              </div>
            </div>
            <div>{{ ageCalculate }}</div>
            <div class="err-msg" v-if="formVar.submit && dobValid">{{ dobValid }}</div>
          </div>
          <div class="col-2 form-item mb-16">
            <input type="text" v-model="formVar.age" class="bg-blue" disabled />
          </div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.password" placeholder="Enter Password" />
          <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
        </div>
        <div class="save-btn form-item">
          <button type="button" class="btn black-btn load-btn" v-if="storeVar.loaderButton">
            <icon-login-loader></icon-login-loader>
          </button>
          <button type="submit" class="btn black-btn">Add</button>
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
  { id: 'MALE', name: "MALE" },
  { id: 'FEMALE', name: "FEMALE" },
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
  gender: null,
  dob: null,
  password: null,
  cPage: 1,
})

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, formVar.cPage)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDoctor(limit, offset, keyword, status, role, cPage) {
  store.dispatch("Doctor/getDoctor", { limit, offset, keyword, status, role, cPage });
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
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addDoctor", {
    loginId: formVar.phone,
    name: formVar.name,
    emailId: formVar.email,
    gender: formVar.gender,
    dob: formVar.dob,
    roles: formVar.role,
    password: formVar.password
  });
};
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
function navigate(link,id){
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

const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please select gender!";
  }
});
const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please enter password!";
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