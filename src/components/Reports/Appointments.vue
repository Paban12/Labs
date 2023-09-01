<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">LAB</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">MR</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 3"
        :class="report.tab === 3 ? 'active' : ''"
      >
        <div class="title">LAB Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 4"
        :class="report.tab === 4 ? 'active' : ''"
      >
        <div class="title">Follow Up</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No. of Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Done Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Cancelled Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Average Waiting Time</div>
          <div class="val f-w-bold">1</div>
        </div>
        <div class="no">
          <div class="text">Average Engaged Time</div>
          <div class="val f-w-bold">1</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient/Doctor" />
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
              <th>Type</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Sample Collection</th>
              <th>Collcetion Center</th>
              <th>Phlebo</th>
              <th>Category</th>
              <th>Insurance</th>
              <th>Day</th>
              <th>Schedule At</th>
              <th>Check In At</th>
              <th>Engaged At</th>
              <th>Check Out At</th>
              <th>Waiting Time</th>
              <th>Engaged Time</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Updated At</th>
              <th>Updated By</th>
              <th>Cancelled At</th>
              <th>Cancelled By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in labTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.sample_collection }}</td>
                <td>{{ item.collection_center }}</td>
                <td>{{ item.phlebo }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.day }}</td>
                <td>{{ item.schedule_at }}</td>
                <td>{{ item.checkin_at }}</td>
                <td>{{ item.engaged_at }}</td>
                <td>{{ item.checkout_at }}</td>
                <td>{{ item.waiting_time }}</td>
                <td>{{ item.engaged_time }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.created_by }}</td>
                <td>{{ item.updated_at }}</td>
                <td>{{ item.updated_by }}</td>
                <td>{{ item.cancelled_at }}</td>
                <td>{{ item.cancelled_by }}</td>
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
          <div class="text">No. of Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Done Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Cancelled Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Average Waiting Time</div>
          <div class="val f-w-bold">1</div>
        </div>
        <div class="no">
          <div class="text">Average Engaged Time</div>
          <div class="val f-w-bold">1</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient/Doctor" />
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
              <th>Doctor</th>
              <th>Company</th>
              <th>Day</th>
              <th>Schedule At</th>
              <th>Check In At</th>
              <th>Engaged At</th>
              <th>Check Out At</th>
              <th>Waiting Time</th>
              <th>Engaged Time</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Updated At</th>
              <th>Updated By</th>
              <th>Cancelled At</th>
              <th>Cancelled By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in mrTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.day }}</td>
                <td>{{ item.schedule_at }}</td>
                <td>{{ item.checkin_at }}</td>
                <td>{{ item.engaged_at }}</td>
                <td>{{ item.checkout_at }}</td>
                <td>{{ item.waiting_time }}</td>
                <td>{{ item.engaged_time }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.created_by }}</td>
                <td>{{ item.updated_at }}</td>
                <td>{{ item.updated_by }}</td>
                <td>{{ item.cancelled_at }}</td>
                <td>{{ item.cancelled_by }}</td>
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
          <div class="text">Total Ref. Doctor</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Total Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Schedule Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Waiting Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Engaged Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Done Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Cancelled Appointment</div>
          <div class="val">1</div>
        </div>
        <div class="no">
          <div class="text">Average Waiting Time</div>
          <div class="val f-w-bold">1</div>
        </div>
        <div class="no">
          <div class="text">Average Engaged Time</div>
          <div class="val f-w-bold">1</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Ref. Doctor" />
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
              <th>Reference Doctor</th>
              <th>Sample Collection</th>
              <th>Collection Center</th>
              <th>Phlebo</th>
              <th>Category</th>
              <th>Insurance</th>
              <th>Total Appointments</th>
              <th>Schedule Appointments</th>
              <th>Waiting Appointments</th>
              <th>Engaged Appointments</th>
              <th>Done Appointments</th>
              <th>Cancelled Appointments</th>
              <th>Waiting Time</th>
              <th>Engaged Time</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in labSummaryTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.ref_doctor }}</td>
                <td>{{ item.sample_collection }}</td>
                <td>{{ item.collection_center }}</td>
                <td>{{ item.phlebo }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.total_apt }}</td>
                <td>{{ item.schedule_apt }}</td>
                <td>{{ item.waiting_apt }}</td>
                <td>{{ item.engaged_apt }}</td>
                <td>{{ item.done_apt }}</td>
                <td>{{ item.cancelled_apt }}</td>
                <td>{{ item.waiting_time}}</td>
                <td>{{ item.engaged_time }}</td>
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
    <div class="tab-content" v-if="report.tab === 4">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Total Ref. Doctor</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Doctor</div>
          <div class="val">2</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Ref. Doctor" />
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
            </thead>
            <tbody>
              <tr v-for="(item, index) in followTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.patient_name }}</td>
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

const labTableData = reactive([
  {
    type: 'Type',
    patient_name: 'Arnav Kumar',
    doctor_name: 'Khushi Kumari',
    sample_collection: 'Yes',
    collection_center: 'Mumbai',
    phlebo: 'Phlebo',
    category: 'Cetegory',
    insurance: 'Yes',
    day: '15/09/2023',
    schedule_at: '15/09/2023 12:45',
    checkin_at: '15/09/2023 12:45',
    engaged_at: '15/09/2023 12:45',
    checkout_at: '15/09/2023 12:45',
    waiting_time: '20 Min',
    engaged_time: '20 Min',
    status: 'True',
    created_at: "16 Aug, 2023 12:42 PM",
    created_by: "Rohith Sir",
    updated_at: "16 Aug, 2023 12:42 PM",
    updated_by: "Rohith Sir",
    cancelled_at: "16 Aug, 2023 12:42 PM",
    cancelled_by: "Rohith Sir",
  },
]);

const mrTableData = reactive([
  {
    patient_name: 'Arnav Kumar',
    doctor_name: 'Khushi Kumari',
    company: 'Company',
    day: '15/09/2023',
    schedule_at: '15/09/2023 12:45',
    checkin_at: '15/09/2023 12:45',
    engaged_at: '15/09/2023 12:45',
    checkout_at: '15/09/2023 12:45',
    waiting_time: '20 Min',
    engaged_time: '20 Min',
    status: 'True',
    created_at: "16 Aug, 2023 12:42 PM",
    created_by: "Rohith Sir",
    updated_at: "16 Aug, 2023 12:42 PM",
    updated_by: "Rohith Sir",
    cancelled_at: "16 Aug, 2023 12:42 PM",
    cancelled_by: "Rohith Sir",
  },
]);

const labSummaryTableData = reactive([
  {
    patient_name: 'Arnav Kumar',
    ref_doctor: 'Amir Khan',
    sample_collection: 'Yes',
    collection_center: 'Mumbai',
    phlebo: 'Phlebo',
    category: 'Category',
    insurance: 'Yes',
    total_apt: 5,
    schedule_apt: 4,
    waiting_apt: 4,
    engaged_apt: 4,
    done_apt: 4,
    cancelled_apt: 4,
    waiting_time: '10 min',
    engaged_time: '10 min'
  },
]);

const followTableData = reactive([
  {
    patient_name: 'Arnav Kumar',
  },
]);


</script>

<style>
</style>