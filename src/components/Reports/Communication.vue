<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">SMS Center</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">System SMS</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No of Times</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">No of Patients</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">No of Staff</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">No of Ref. Dr.</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total SMS</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total Cost(₹)</div>
          <div class="val">10</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search" />
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
              <th>Date Time</th>
              <th>No of Patients</th>
              <th>No of Staff</th>
              <th>No of Ref. Dr.</th>
              <th>Total SMS</th>
              <th>SMS Cost(₹)</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in SMSCenterTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date_time }}</td>
                <td>{{ item.total_patients }}</td>
                <td>{{ item.total_staff }}</td>
                <td>{{ item.total_ref_dr }}</td>
                <td>{{ item.total_sms }}</td>
                <td>{{ item.sms_cost }}</td>
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
          <div class="text">No of Days</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Appointments</div>
          <div class="val">All</div>
        </div>
        <div class="no">
          <div class="text">Patient / MR</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Doctor</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total SMS</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total Cost(₹)</div>
          <div class="val">10</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search" />
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
              <th>Appointment</th>
              <th>Type</th>
              <th>Date</th>
              <th>Patient/MR</th>
              <th>Doctor</th>
              <th>Total SMS</th>
              <th>SMS Cost(₹)</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in systemSMSTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.appointment }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.total_sms }}</td>
                <td>{{ item.sms_cost }}</td>
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

const SMSCenterTableData = reactive([
  {
    date_time: '12/05/2023 15:45',
    total_patients: 45,
    total_staff: 12,
    total_ref_dr: 10,
    total_sms: 100,
    sms_cost: 2000,
  },
]);

const systemSMSTableData = reactive([
  {
    appointment: 'Apt',
    type: 'Type',
    date: '12/05/2023',
    patient_name: 'Ram Sahu',
    doctor_name: 'Rahul Sharma',
    total_sms: 100,
    sms_cost: 2000,
  },
]);

</script>

<style>
</style>