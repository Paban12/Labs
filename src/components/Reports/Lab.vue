<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Test Timing</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Doctor Wise</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 3"
        :class="report.tab === 3 ? 'active' : ''"
      >
        <div class="title">Reference Lab</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 4"
        :class="report.tab === 4 ? 'active' : ''"
      >
        <div class="title">Ref Dr Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 5"
        :class="report.tab === 5 ? 'active' : ''"
      >
        <div class="title">Doctorwise Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 6"
        :class="report.tab === 6 ? 'active' : ''"
      >
        <div class="title">Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 7"
        :class="report.tab === 7 ? 'active' : ''"
      >
        <div class="title">Charges</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 8"
        :class="report.tab === 8 ? 'active' : ''"
      >
        <div class="title">TAT</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 9"
        :class="report.tab === 9 ? 'active' : ''"
      >
        <div class="title">Sample</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 10"
        :class="report.tab === 10 ? 'active' : ''"
      >
        <div class="title">Phlebo</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 11"
        :class="report.tab === 11 ? 'active' : ''"
      >
        <div class="title">Phlebo Summary</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No of Tests</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Number</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Collection Time</div>
          <div class="val">0 Minutes</div>
        </div>
        <div class="no">
          <div class="text">Waiting Time</div>
          <div class="val">0 Minutes</div>
        </div>
        <div class="no">
          <div class="text">Processing Time</div>
          <div class="val">0 Minutes</div>
        </div>
        <div class="no">
          <div class="text">Result Time</div>
          <div class="val">0 Minutes</div>
        </div>
        <div class="no">
          <div class="text">Total Time</div>
          <div class="val">0 Minutes</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Sample Collection" />
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
              <th>Test Name</th>
              <th>Number</th>
              <th>Collection Time</th>
              <th>Waiting Time</th>
              <th>Processing Time</th>
              <th>Result Time</th>
              <th>Total Time</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testTimeTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.test_name }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.collection_time }}</td>
                <td>{{ item.waiting_time }}</td>
                <td>{{ item.processing_time }}</td>
                <td>{{ item.result_time }}</td>
                <td>{{ item.total_time }}</td>
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
          <div class="text"></div>
          <div class="val">2</div>
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
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in systemSMSTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.a }}</td>
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
    <div class="tab-content" v-if="report.tab === 9">
      <div class="patient-no-list">
        <div class="no">
          <div class="text"></div>
          <div class="val">2</div>
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
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in systemSMSTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.a }}</td>
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

const testTimeTableData = reactive([
  {
    test_name: 'CBC',
    number: '+91 8888888888',
    collection_time: '10:45 AM',
    waiting_time: '20 Min',
    processing_time: '30 Min',
    result_time: '20 Min',
    total_time: '1 Hour'
  },
]);

const doctorWiseTableData = reactive([
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