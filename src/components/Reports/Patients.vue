<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Patients</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Appointment Patients</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Total New Patients</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Male</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Female</div>
          <div class="val">1</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By FAQ" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
        <div class="select-dropdown">
          <select name="" id="">
            <option value="">All</option>
            <option value="">Chat</option>
          </select>
        </div>
      </div>
      <div class="report-table">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>PID</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Marital Status</th>
              <th>Blood Group</th>
              <th>Language Preference</th>
              <th>Aadhar No.</th>
              <!-- <th>Category</th> -->
              <th>Caste</th>
              <th>Subcaste</th>
              <th>Religion</th>
              <th>Nationality</th>
              <th>Education</th>
              <th>Occupation</th>
              <!-- <th>Street</th> -->
              <!-- <th>Locality</th> -->
              <th>City</th>
              <!-- <th>Smoking Habit</th>
              <th>Alcohol Consumption</th> -->
              <th>Created By</th>
              <th>Created At</th>
              <th>Updated By</th>
              <th>Updated At</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in patientData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.p_id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.mail }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.marital_status }}</td>
                <td>{{ item.blood_group }}</td>
                <td>{{ item.language }}</td>
                <td>{{ item.aadhar_no }}</td>
                <!-- <td>{{ item.category }}</td> -->
                <td>{{ item.caste }}</td>
                <td>{{ item.sub_caste }}</td>
                <td>{{ item.religion }}</td>
                <td>{{ item.nationality }}</td>
                <td>{{ item.education }}</td>
                <td>{{ item.occupation }}</td>
                <!-- <td>{{ item.street }}</td> -->
                <!-- <td>{{ item.locality }}</td> -->
                <td>{{ item.city }}</td>
                <!-- <td>{{ item.smoking_habit }}</td>
                <td>{{ item.alcohol_consumption }}</td> -->
                <td>{{ item.created_by }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.updated_by }}</td>
                <td>{{ item.updated_at }}</td>
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
  </section>
</template>

<script setup>
import { reactive } from "vue";

const report = reactive({
  tab: 1
})

const patientData = reactive([
  {
    p_id: 254,
    date: '22/05/2023',
    name: 'Ravi Kumar',
    mobile: '+91 8888888888',
    mail: 'user@mail.com',
    gender: 'Male',
    age: '42 years',
    marital_status: 'Married',
    blood_group: 'A+',
    language: 'Bengali',
    aadhar_no: '12345678945',
    // category: 'category',
    caste: 'Hindu',
    sub_caste: 'Hindu',
    religion: 'Hindu',
    nationality: 'Indian',
    education: '12th Pass',
    occupation: 'Service',
    // street: 'MG Road',
    // locality: 'Ashoka Nagar',
    city: 'Kolkata',
    // smoking_habit: 'Yes',
    // alcohol_consumption: 'Yes',
    created_by: 'Rohith Sir',
    created_at: '16 Aug, 2023 12:42 PM',
    updated_by: 'Rohith Sir',
    updated_at: '16 Aug, 2023 12:42 PM',
  }
])

</script>

<style>

</style>