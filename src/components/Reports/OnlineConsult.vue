<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Patient</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Appointment</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 3"
        :class="report.tab === 3 ? 'active' : ''"
      >
        <div class="title">Billing</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Total Patient</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Male</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Female</div>
          <div class="val">2</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
        <div class="select-dropdown">
          <select name="" id="">
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
            <option value="">500</option>
          </select>
        </div>
      </div>
      <div class="report-table">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Marital Status</th>
              <th>Blood Group</th>
              <th>Language Preference</th>
              <th>Education</th>
              <th>Occupation</th>
              <th>Locality</th>
              <th>City</th>
              <th>Activity Level</th>
              <th>Food Preference</th>
              <th>Smoking Habit</th>
              <th>Alcohol Consumption</th>
              <th>Relation</th>
              <th>User</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in patientTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.marital_status }}</td>
                <td>{{ item.blood_group }}</td>
                <td>{{ item.lang_prefer }}</td>
                <td>{{ item.education }}</td>
                <td>{{ item.occupation }}</td>
                <td>{{ item.locality }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.activity_level }}</td>
                <td>{{ item.food_prefer }}</td>
                <td>{{ item.smoking_habit }}</td>
                <td>{{ item.alcohol_consumption }}</td>
                <td>{{ item.relation }}</td>
                <td>{{ item.user }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div>No records Found!</div>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <icon-left-double-arrow></icon-left-double-arrow>
            <div class="page">1</div>
            <div class="page active">2</div>
            <div class="page">3</div>
            <icon-right-double-arrow></icon-right-double-arrow>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 2">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No of Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Chat</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Cancelled Appointments</div>
          <div class="val">0</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
        <div class="select-dropdown">
          <select name="" id="">
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
            <option value="">500</option>
          </select>
        </div>
      </div>
      <div class="report-table">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Day</th>
              <th>Schedule At</th>
              <th>Start At</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in aptTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.day }}</td>
                <td>{{ item.schedule_at }}</td>
                <td>{{ item.start_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div>No records Found!</div>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <icon-left-double-arrow></icon-left-double-arrow>
            <div class="page">1</div>
            <div class="page active">2</div>
            <div class="page">3</div>
            <icon-right-double-arrow></icon-right-double-arrow>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 3">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Chat</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Total Amount(₹)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Refund(₹)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Final Received(₹)</div>
          <div class="val">0</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
        <div class="select-dropdown">
          <select name="" id="">
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
            <option value="">500</option>
          </select>
        </div>
      </div>
      <div class="report-table">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Appointment</th>
              <th>Duration</th>
              <th>Receipt</th>
              <th>Total Amount(₹)</th>
              <th>Pay Mode</th>
              <th>Refund(₹)</th>
              <th>Refund RCPT No</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in billingTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.apt }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.receipt }}</td>
                <td>{{ item.total_amt }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.refund }}</td>
                <td>{{ item.refund_rcpt_no }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div>No records Found!</div>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <icon-left-double-arrow></icon-left-double-arrow>
            <div class="page">1</div>
            <div class="page active">2</div>
            <div class="page">3</div>
            <icon-right-double-arrow></icon-right-double-arrow>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const report = reactive({
  tab: 1,
});

const patientTableData = reactive([
  {
    date: '12/05/2023',
    patient_name: 'Prakash Jhaa',
    gender: 'Male',
    age: '27 Years',
    marital_status: 'Unmarried',
    blood_group: 'A+',
    lang_prefer: 'Hindi',
    education: 'Graduation',
    occupation: 'Job',
    locality: 'Nashik',
    city: 'Nashik',
    activity_level: 'regular',
    food_prefer: 'Nonveg',
    smoking_habit: 'Yes',
    alcohol_consumption: 'yes',
    relation: 'Self',
    user: 'User',
  },
]);

const aptTableData = reactive([
  {
    patient_name: 'Prakash Jhaa',
    type: 'Type',
    duration: '1 Hour',
    day: '12/05/2023 Mon',
    schedule_at: '10.30 AM',
    start_at: '10.30 AM'
  },
]);

const billingTableData = reactive([
  {
    date: '12/05/2023',
    patient_name: 'Prakash Jhaa',
    apt: 'Lab',
    duration: '1 Hour',
    receipt: 'RCPT 102',
    total_amt: 2000,
    pay_mode: 'Cash',
    refund: 1500,
    refund_rcpt_no: 102,
  },
]);

</script>

<style>
</style>