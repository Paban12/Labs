<template>
  <section class="apt-calender-page apt-patient-page">
    <div class="container">
      <div class="calender-page-row">
        <div class="patient-list-card card">
          <div class="tabs">
            <div
              class="tab"
              @click.prevent="formVar.tab = 1"
              :class="formVar.tab === 1 ? 'active' : ''"
            >
              <div class="val bg-grey">2</div>
              <div class="text">Schedule</div>
            </div>
            <div
              class="tab"
              @click.prevent="formVar.tab = 2"
              :class="formVar.tab === 2 ? 'active' : ''"
            >
              <div class="val bg-red">2</div>
              <div class="text">Collection</div>
            </div>
            <div
              class="tab"
              @click.prevent="formVar.tab = 3"
              :class="formVar.tab === 3 ? 'active' : ''"
            >
              <div class="val bg-blue">2</div>
              <div class="text">Progress</div>
            </div>
            <div
              class="tab"
              @click.prevent="formVar.tab = 4"
              :class="formVar.tab === 4 ? 'active' : ''"
            >
              <div class="val bg-green">2</div>
              <div class="text">Done</div>
            </div>
          </div>
          <div class="searchbar">
            <input type="text" placeholder="Search for Patients" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
          <div class="patient-list">
            <div class="list-item">
              <div class="time">11:15 AM</div>
              <div class="info">
                <div class="name">Miss. Sharmila (PID: 226)</div>
                <div class="dr-name">Dr Suraj</div>
                <div class="token">Token: 1</div>
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
                    <div class="name">Mrs Rekha</div>
                    <div class="about">
                      <span>Female</span>- <span>49 Years</span>-
                      <span>A+</span>
                    </div>
                    <div class="p-id">PID : 189</div>
                    <div class="amt">₹00</div>
                  </div>
                </div>
                <div class="contact-info">
                  <span>
                    <icon-mobile></icon-mobile>
                    +91 8888888888
                  </span>
                  <span>
                    <icon-mail></icon-mail>
                    company@mail.com
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
            <div class="list-item">
              <div class="time">11:15 AM</div>
              <div class="info">
                <div class="name">Miss. Sharmila (PID: 226)</div>
                <div class="dr-name">Dr Suraj</div>
                <div class="token">Token: 1</div>
              </div>
              <div class="img">
                <img src="/src/assets/images/png/verified.png" alt="" />
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
</script>

<style>
</style>