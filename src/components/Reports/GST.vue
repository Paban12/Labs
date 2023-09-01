<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Tests</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Tests</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Patients</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total</div>
          <div class="val">10</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Test/Panel/Package/Patient" />
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
              <tr>
                <th rowspan="2">Sr. No.</th>
                <th rowspan="2">Test/Panel/Package</th>
                <th rowspan="2">Patient</th>
                <th rowspan="2">Date</th>
                <th rowspan="2">RCPT No</th>
                <th rowspan="2">INV No</th>
                <th rowspan="1" colspan="2">Total</th>
              </tr>
              <tr>
                <th colspan="1" rowspan="1">Taxable RS</th>
                <th colspan="1" rowspan="1">Tax RS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.test }}</td>
                <td>{{ item.patient }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.rcpt_no }}</td>
                <td>{{ item.inv_no }}</td>
                <td>{{ item.taxable_rs }}</td>
                <td>{{ item.tax_rs }}</td>
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

const testTableData = reactive([
  {
    test: 'CBC',
    patient_name: 'Ram Kumar',
    date: '12/05/2023',
    rcpt_no: 'RCPT 102',
    inv_no: 'INV 145',
    taxable_rs: 1200,
    tax_rs: 1500,
  },
]);

</script>

<style>
</style>