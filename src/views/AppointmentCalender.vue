<template>
  <section class="apt-calender-page">
    <div class="container">
      <div class="calender-page-row">
        <div class="doctor-list-card card">
          <div class="list-header">Doctors</div>
          <div class="list-sub-header">All Reference Doctors (114)</div>
          <div class="list">
            <div class="list-item">
              <div class="left">
                <div class="dot red-dot"></div>
                <div class="dr-name">Dr. Snehal</div>
              </div>
              <div class="val">131</div>
            </div>
            <div class="list-item">
              <div class="left">
                <div class="dot green-dot"></div>
                <div class="dr-name">Dr. Atharva</div>
              </div>
              <div class="val">131</div>
            </div>
            <div class="list-item">
              <div class="left">
                <div class="dot green-dot"></div>
                <div class="dr-name">Dr. Kamal</div>
              </div>
              <div class="val">131</div>
            </div>
          </div>
        </div>
        <event-time :date="formVar.date" :eventList="data" @update:changeDate="onDateChange($event)"></event-time>
        <div class="patient-list-card card">
          <div class="tabs">
            <div class="tab" @click.prevent="formVar.tab = 1" :class="formVar.tab === 1 ? 'active' : ''">
              <div class="val bg-grey">2</div>
              <div class="text">Schedule</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 2" :class="formVar.tab === 2 ? 'active' : ''">
              <div class="val bg-red">2</div>
              <div class="text">Collection</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 3" :class="formVar.tab === 3 ? 'active' : ''">
              <div class="val bg-blue">2</div>
              <div class="text">Progress</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 4" :class="formVar.tab === 4 ? 'active' : ''">
              <div class="val bg-green">2</div>
              <div class="text">Done</div>
            </div>
          </div>
          <div class="searchbar">
            <input type="text" placeholder="Search for Patients" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
          <div class="patient-list">
            <div class="list-item" v-for="(item, index) in patient" :key="index">
              <div class="time">{{ item.time }}</div>
              <div class="info">
                <div class="name">{{ item.name }} (PID: {{ item.pid }})</div>
                <div class="dr-name">{{ item.doctor }}</div>
                <div class="token">Token : {{ item.token }}</div>
              </div>
              <div class="img">
                <img src="/src/assets/images/png/verified.png" alt="" />
              </div>
              <div class="p-info-card card card1">
                <div class="top">
                  <div class="p-img">
                    <img src="/src/assets/images/png/user.png" alt="" />
                  </div>
                  <div class="p-info">
                    <div class="name">{{ item.name }}</div>
                    <div class="about">
                      <span>{{ item.gender }}</span>- <span>{{ item.age }}</span>-
                      <span>{{ item.bloodGroup }}</span>
                    </div>
                    <div class="p-id">PID : {{ item.pid }}</div>
                    <div class="amt">₹00</div>
                  </div>
                </div>
                <div class="contact-info">
                  <span>
                    <icon-mobile></icon-mobile>
                    +91 {{ item.phone }}
                  </span>
                  <span>
                    <icon-mail></icon-mail>
                    {{ item.email }}
                  </span>
                </div>
                <div class="message">
                  <span>Feedback Message</span>
                  <span>Thanks Message</span>
                </div>
                <div class="schedule">
                  <div class="time">10:45 AM For 5 Min</div>
                  <div class="dr">Dr. Self</div>
                </div>
                <div class="data flex gap-5">
                  <strong>Barcode : </strong>
                  <div class="val">206LL68</div>
                  <img src="/src/assets/images/png/printer.png" alt="" />
                </div>
                <div class="data flex gap-5">
                  <strong>Collection at : </strong>
                  <div class="val">Lab Address</div>
                </div>
                <div class="data">
                  <strong>Tests : </strong>
                  <div class="val">
                    <div class="list">Fasting Blood Glucose</div>
                    <div class="list">Fasting Blood Glucose</div>
                  </div>
                </div>
                <div class="message">
                  <router-link to="/new-prescription" class="span">Prescription</router-link>
                  <router-link to="/patient/profile" class="span">Profile</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="formVar.aptModal" class="book-apt-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Book Appointment</div>
        <div class="close-btn" @click.prevent="formVar.aptModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitAppointment">
        <div class="form-item mb-16">
          <input type="number" v-model="formVar.phone" placeholder="Enter Phone no" v-on:keypress="isNumber($event)"
            v-on:keyup="phnum($event.target.value)">
          <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
        </div>
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
        <div class="two-inputs">
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
          <input type="text" v-model="formVar.email" placeholder="Enter Email" />
          <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.address" placeholder="Enter Address" />
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
          <button type="submit" class="btn black-btn">Book</button>
        </div>
      </form>
    </Modal>
    <AptSuccessModal />
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'
import EventTime from "../components/EventCalender.vue";

/* Constants */

const data = [
  {
    id: 3,
    title: "asdas",
    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "ajk",
    },
  },
  {
    id: 1,
    title: "alsndlkasd",
    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "ajk",
    },
  },
  {
    id: 2,
    title: "asndkalsdnsd",
    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "asdasinwd",
    },
  },
  {
    id: 1,
    title: "asdas",
    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "asdsad",
    },
  },
  {
    id: 1,
    title: "lajsdlkasd",

    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "Ainimdd",
    },
  },
  {
    id: 1,
    title: "asdas",
    date: "2023-08-04 07:25 PM",
    patient: {
      id: 1,
      name: "ASdasd",
    },
  },
];

const patient = [
  {
    id: 1,
    name: 'Miss. Sharmila',
    gender: 'Femail',
    age: '35 Years',
    bloodGroup: 'B+',
    pid: '203',
    phone: '7384589652',
    email: 'sharmila@gmail.com',
    time: '11:45 AM',
    doctor: 'Dr Suraj',
    token: 1,
  },
  {
    id: 2,
    name: 'Miss. Sharmila',
    gender: 'Femail',
    age: '25 Years',
    bloodGroup: 'A+',
    pid: '289',
    phone: '7384589652',
    email: 'sharmila@gmail.com',
    time: '12:45 PM',
    doctor: 'Dr Suraj',
    token: 2,
  },
  {
    id: 3,
    name: 'Miss. Sharmila',
    gender: 'Femail',
    age: '29 Years',
    bloodGroup: 'AB+',
    pid: '348',
    phone: '7384589652',
    email: 'sharmila@gmail.com',
    time: '10:25 AM',
    doctor: 'Dr Suraj',
    token: 3,
  }
]
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  date: new Date(),
  fromDate: moment().format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),
  tab: 1,
  aptModal: false,
  name: null,
  email: null,
  phone: null,
  address: null,
  doctor: null,
  prefix: null,
  gender: null,
  blood: null,
  state: null,
  city: null,
  speciality: null,
  language: null,
  dob: null,
  age: null,
});

const onDateChange = (date) => {
  console.log(date);
};

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

//search select end//
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitAppointment = () => {
  if (
    nameValid.value ||
    prefixValid.value ||
    phoneValid.value ||
    emailValid.value ||
    dobValid.value ||
    bloodValid.value ||
    doctorValid.value ||
    genderValid.value ||
    addressValid.value ||
    specialityValid.value ||
    languageValid.value ||
    stateValid.value ||
    cityValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/register", { userId: 453245 });
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
const prefixValid = computed(() => {
  if (!formVar.prefix) {
    return "Select prefix!";
  }
});
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter patient name!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter your phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
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
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please select gender!";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please enter DOB !";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter your address !";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Select speciality!";
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
const doctorValid = computed(() => {
  if (!formVar.doctor) {
    return "Please enter doctor!";
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