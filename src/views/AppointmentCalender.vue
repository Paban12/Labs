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
          <div class="add-btns">
            <div class="icon" @click.prevent="storeVar.aptBookModal = true">
              <icon-add></icon-add>
              <div class="tooltip">Book Appointment</div>
            </div>
            <div class="icon">
              <icon-add-user></icon-add-user>
              <div class="tooltip">Add New Patient</div>
            </div>
          </div>
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
                  <router-link to="/patient/lab-report" class="span">Lab</router-link>
                  <router-link to="/patient/profile" class="span">Profile</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
  </section>
</template>

<script setup>
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
  date: new Date(),
  tab: 1,
});

const onDateChange = (date) => {
  console.log(date);
};

//search select end//
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

/* Functions/Methods */

/* Validation */

/* Validation */
</script>