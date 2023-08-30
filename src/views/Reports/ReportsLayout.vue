<template>
  <section class="reports-layout">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Reports</div>
        <div class="card-body">
          <div class="select-row">
            <div class="left">
              <div class="select-dropdown">
                <select v-model="selectedTab">
                  <option v-for="(tab, index) in tabs" :key="index" :value="index">{{ tab.title }}</option>
                </select>
              </div>
              <div class="date-row">
                <div class="date-input">
                  <input type="date" />
                  <div class="icon">
                    <img src="/src/assets/images/icons/calender.svg" alt="" />
                  </div>
                </div>
                <span>-</span>
                <div class="date-input">
                  <input type="date" />
                  <div class="icon">
                    <img src="/src/assets/images/icons/calender.svg" alt="" />
                  </div>
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Yesterday</option>
                    <option value="">Last 7 days</option>
                    <option value="">Last 30 days</option>
                    <option value="">This Month</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img src="/src/assets/images/png/printer.png" alt="">
              </div>
              <div class="img">
                <img src="/src/assets/images/png/mail.png" alt="">
              </div>
              <div class="img">
                <img src="/src/assets/images/png/file.png" alt="">
              </div>
            </div>
          </div>
          <div class="select-content" v-if="selectedTab === 0">
            <PatientReport />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue';

const tabs = [
  { title: 'Patients' },
  { title: 'Appointments' },
  { title: 'Expenses' },
  { title: 'Communication' },
  { title: 'Billing' },
  { title: 'Online Consult' },
  { title: 'Lab' },
  { title: 'GST Report' },
  { title: 'Bio Medical Waste' },
  { title: 'Machines & Equipments' },
  { title: 'Insurance & TPA' },
];

const selectedTab = ref(0);
</script>

<style>
</style>