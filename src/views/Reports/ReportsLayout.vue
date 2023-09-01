<template>
  <section class="reports-layout">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">
          <div class="title">Reports</div>
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
          </div>
          <div class="select-content" v-if="selectedTab === 0">
            <PatientReport />
          </div>
          <div class="select-content" v-if="selectedTab === 1">
            <AppointmentReport />
          </div>
          <div class="select-content" v-if="selectedTab === 2">
            <ExpenseReport />
          </div>
          <div class="select-content" v-if="selectedTab === 3">
            <CommunicationReport />
          </div>
          <div class="select-content" v-if="selectedTab === 4">
            <BillingReport />
          </div>
          <div class="select-content" v-if="selectedTab === 5">
            <OnlineConsultReport />
          </div>
          <div class="select-content" v-if="selectedTab === 6">
            <LabReport />
          </div>
          <div class="select-content" v-if="selectedTab === 7">
            <GSTReport />
          </div>
          <div class="select-content" v-if="selectedTab === 8">
            <BioMedicalWasteReport />
          </div>
          <div class="select-content" v-if="selectedTab === 9">
            <MachineReport />
          </div>
          <div class="select-content" v-if="selectedTab === 10">
            <InsuranceReport />
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