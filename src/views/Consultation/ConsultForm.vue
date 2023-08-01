<template>
  <section class="consult-form-page">
    <div class="container">
      <div class="row container-row">
        <div class="consult-table-data">
          <div class="card stat-card mb-16">
            <div class="stats">
              <div class="stat card1">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Completed</div>
                </div>
              </div>
              <div class="stat card2">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Pending</div>
                </div>
              </div>
              <div class="stat card3">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Waiting</div>
                </div>
              </div>
            </div>
            <div class="search-section">
              <div class="row">
                <div class="col-25">
                  <input type="text" placeholder="Search by name">
                </div>
                <div class="col-25">
                  <div class="date-input">
                    <input type="date">
                    <div class="icon">
                      <img src="/src/assets/images/icons/calender.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-25">
                  <button class="btn yellow-btn">Today</button>
                </div>
                <div class="col-25">
                  <button class="btn black-btn">Search</button>
                </div>
              </div>

            </div>
          </div>
          <div class="card table-card">
            <div class="date-no-found" v-if="consultData.length <= 0">
              <div class="no-found-card">
                <img src="/src/assets/images/png/calender.png" alt="image">
                <div class="text">No appointments for the selected date!</div>
              </div>
            </div>
            <div class="consult-table">
              <div class="title-header mb-16">
                <div class="title">Consultation Logs</div>
              </div>
              <div class="table-outer">
                <table class="table">
                  <thead>
                    <th>Sr. No.</th>
                    <th>ID</th>
                    <th>#Token</th>
                    <th>Name</th>
                    <th>Recent Visit</th>
                    <th>#Visits</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Purpose</th>
                    <th class="text-center">Actions</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in consultData" :key="item">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.id }}</td>
                      <td>
                        <span class="token">{{ item.token }}</span>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.recent_visit }}</td>
                      <td>{{ item.total_visits }}</td>
                      <td>{{ item.time }}</td>
                      <td>
                        <div class="tag green-tag">Booked</div>
                      </td>
                      <td>{{ item.purpose }}</td>
                      <td class="text-center">
                        <div class="option-btns">
                          <router-link to="/" class="">
                            <img src="/src/assets/images/png/printer.png" alt="">
                          </router-link>
                          <router-link to="/" class="">
                            <img src="/src/assets/images/icons/mail.svg" alt="">
                          </router-link>
                          <router-link to="/" class="">
                            <img src="/src/assets/images/png/eye.png" alt="">
                          </router-link>
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
        <div class="consult-form card">
          <form action="" class="form" @submit.prevent="onSubmitConsultation">
            <h3>Book Consultation</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quod!
            </span>
            <div class="form-item mb-16">
              <input type="number" v-model="formVar.phone" placeholder="Enter Phone no" v-on:keypress="isNumber($event)"
                v-on:keyup="phnum($event.target.value)">
              <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
            </div>
            <div class="row mb-16 prefix-row">
              <div class="col-25 form-item">
                <SingleSelect v-model="formVar.prefix" :options="prefixOptions" @selected="handleSelectedOption"
                  placeholder="Select Prefix"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && prefixValid">{{ prefixValid }}</div>
              </div>
              <div class="col-75 form-item">
                <input type="text" v-model="formVar.name" placeholder="Patient Name">
                <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
              </div>
            </div>
            <div class="two-inputs">
              <div class="col-25 form-item mb-16">
                <SingleSelect v-model="formVar.gender" :options="genderOptions" @selected="handleSelectedOption"
                  placeholder="Select Gender"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && genderValid">{{ genderValid }}</div>
              </div>
              <div class="col-5 form-item mb-16">
                <div class="date-input">
                  <input type="date" v-model="formVar.dob" :max="today()">
                  <div class="icon">
                    <img src="/src/assets/images/icons/calender.svg" alt="">
                  </div>
                </div>
                <div>{{ ageCalculate }}</div>
                <div class="err-msg" v-if="formVar.submit && dobValid">{{ dobValid }}</div>
              </div>
              <div class="col-25 form-item mb-16">
                <input type="text" v-model="formVar.age" class="bg-blue" disabled>
              </div>
            </div>
            <div class="two-inputs">
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
            <div class="form-item mb-16">
              <input type="text" placeholder="Enter Email" v-model="formVar.email">
              <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
            </div>
            <div class="form-item mb-16">
              <input type="text" placeholder="Enter Address" v-model="formVar.address">
              <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
            </div>
            <div class="two-inputs">
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
            <div class="two-inputs">
              <div class="col-5 form-item mb-16">
                <div class="dr-input">
                  <div class="dr-tag">Dr</div>
                  <input type="text" placeholder="Refered by" v-model="formVar.doctor">
                </div>
                <div class="err-msg" v-if="formVar.submit && doctorValid">{{ doctorValid }}</div>
              </div>
              <div class="col-5 form-item mb-16">
                <SingleSelect v-model="formVar.speciality" :options="specialityOptions" @selected="handleSelectedOption"
                  placeholder="Select Speciality"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && specialityValid">{{ specialityValid }}</div>
              </div>
            </div>
            <div class="save-btn flex justify-cente">
              <button type="submit" class="btn black-btn">Book Consultation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import moment from 'moment';

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  phone: null,
  name: null,
  email: null,
  address: null,
  doctor: null,
  dob: null,
  prefix: "",
  gender: "",
  blood: "",
  state: "",
  city: "",
  speciality: "",
  language: "",
  age: 0,
})

const consultData = [
  {
    id: 125,
    token: 25478,
    name: 'Prakash Jhaa',
    recent_visit: '20 Days ago',
    total_visits: 10,
    purpose: 'Consultation',
    time: '09:30 AM',
  },
]

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
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */
const onSubmitConsultation = () => {
  if (
    phoneValid.value ||
    prefixValid.value ||
    nameValid.value ||
    genderValid.value ||
    dobValid.value ||
    bloodValid.value ||
    languageValid.value ||
    emailValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    doctorValid.value ||
    specialityValid.value
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
			if (age === 0) {
				var total_age = `${m}m`
			} else {
				var total_age = `${age}y`
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
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Enter mobile no!!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const prefixValid = computed(() => {
  if (!formVar.prefix) {
    return "Please select prefix!";
  }
});
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter patient name!";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Select gender!";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Select DOB!";
  }
});


const bloodValid = computed(() => {
  if (!formVar.blood) {
    return "Select blood group!";
  }
});
const languageValid = computed(() => {
  if (!formVar.language) {
    return "Select language!";
  }
});

const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Enter email!!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Enter address!";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Select state!";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Select city!";
  }
});
const doctorValid = computed(() => {
  if (!formVar.doctor) {
    return "Enter doctor name!";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Select speciality!";
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