<template>
  <section class="doctor-profile-layout">
    <div class="container">
      <div class="top-info-card card">
        <div class="img">
          <img src="/src/assets/images/png/man.png" alt="" />
        </div>
        <div class="about">
          <div class="name">Dr. Anita Kumar</div>
          <div class="education">
            MBBS, MD (internal medicine), DNB (internal medicine), FRCP (London)
          </div>
          <div class="data-row">
            <div class="data">
              <div class="title">Specialization :</div>
              <div class="val">Cardiology, Cardiac Surgery</div>
            </div>
            <div class="data">
              <div class="title">Expertise :</div>
              <div class="val">Interventional Cardiology</div>
            </div>
          </div>
          <div class="data-row">
            <div class="data">
              <div class="title">Experience :</div>
              <div class="val">15 Years</div>
            </div>
            <div class="data">
              <div class="title">Phone No :</div>
              <div class="val">+91 8888888888</div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-main-content card">
        <div class="tab-options">
          <div
            class="tab"
            @click.prevent="formVar.tab = 1"
            :class="formVar.tab === 1 ? 'active' : ''"
          >
            <div class="text">Profile</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 2"
            :class="formVar.tab === 2 ? 'active' : ''"
          >
            <div class="text">Education</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 3"
            :class="formVar.tab === 3 ? 'active' : ''"
          >
            <div class="text">Expertise</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 5"
            :class="formVar.tab === 5 ? 'active' : ''"
          >
            <div class="text">Language</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 6"
            :class="formVar.tab === 6 ? 'active' : ''"
          >
            <div class="text">Fees & Availability</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 7"
            :class="formVar.tab === 7 ? 'active' : ''"
          >
            <div class="text">Schedule</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 8"
            :class="formVar.tab === 8 ? 'active' : ''"
          >
            <div class="text">Sign & Cert</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 9"
            :class="formVar.tab === 9 ? 'active' : ''"
          >
            <div class="text">Block</div>
          </div>
        </div>
        <div class="tabs-content">
          <div class="content" v-if="formVar.tab === 1">
            <DoctorProfile />
          </div>
          <div class="content" v-if="formVar.tab === 2">
            <DoctorEducation />
          </div>
          <div class="content" v-if="formVar.tab === 3">
            <DoctorExpertise />
          </div>
          <div class="content" v-if="formVar.tab === 5">
            <DoctorLanguage />
          </div>
          <div class="content" v-if="formVar.tab === 6">
            <DoctorFees />
          </div>
          <div class="content" v-if="formVar.tab === 7">
            <DoctorSchedule />
          </div>
          <div class="content" v-if="formVar.tab === 8">
            <DoctorSign />
          </div>
          <div class="content" v-if="formVar.tab === 9">
            <DoctorBlock />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  tab: 1,
})
</script>

<style>
</style>