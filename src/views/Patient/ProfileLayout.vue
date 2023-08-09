<template>
  <section class="account-layout">
    <div class="container">
      <!-- <h2>Profile</h2> -->
      <div class="main-content">
        <div class="main-content-left">
          <div class="main-heading">
            <div class="options card">
              <router-link to="/patient/profile" class="option">
                <div class="text">Profile</div>
              </router-link>
              <router-link to="/patient/edit" class="option">
                <div class="text">Edit</div>
              </router-link>
              <router-link to="/patient/visits" class="option">
                <div class="text">Visit</div>
              </router-link>
              <router-link to="/patient/lab-report" class="option">
                <div class="text">Lab</div>
              </router-link>
              <router-link to="/patient/bills" class="option">
                <div class="text">Bills</div>
              </router-link>
              <router-link to="/patient/appointment" class="option">
                <div class="text">Appointment</div>
              </router-link>
            </div>
          </div>
          <div class="profile-tabs">
            <router-view></router-view>
          </div>
        </div>
        <div class="main-content-right">
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
                    <router-link to="/labtest" class="span">Lab</router-link>
                    <router-link to="/patient/profile" class="span">Profile</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  tab: 1,
})

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
</script>

<style>

</style>