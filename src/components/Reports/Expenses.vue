<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Expense</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Expense Summary</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No of Expense</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Total Amount(₹)</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total Tax(₹)</div>
          <div class="val">10</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Title/Type/Vendor Name" />
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
              <th>Expense Title</th>
              <th>Expense Type</th>
              <th>Date</th>
              <th>Vendor</th>
              <th>Pay Mode</th>
              <th>Tax</th>
              <th>Amount(₹)</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Updated At</th>
              <th>Updated By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in expenseTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.expense_title }}</td>
                <td>{{ item.expense_type }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.vendor }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.tax }}</td>
                <td>{{ item.amt }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.created_by }}</td>
                <td>{{ item.updated_at }}</td>
                <td>{{ item.updated_by }}</td>
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
          <div class="text">No of Expense</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Total Amount(₹)</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Total Tax(₹)</div>
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
              <th>Expense Title</th>
              <th>Expense Type</th>
              <th>Vendor</th>
              <th>Pay Mode</th>
              <th>Tax</th>
              <th>Amount(₹)</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in expenseSummaryTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.expense_title }}</td>
                <td>{{ item.expense_type }}</td>
                <td>{{ item.vendor }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.tax }}</td>
                <td>{{ item.amt }}</td>
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

const expenseTableData = reactive([
  {
    expense_title: 'Expense',
    expense_type: 'Expense Type',
    date: '12/05/2023',
    vendor: 'Arush Sharma',
    pay_mode: 'Cash',
    tax: 1200,
    amt: 2000,
    created_by: "Rohith Sir",
    created_at: "16 Aug, 2023 12:42 PM",
    updated_by: "Rohith Sir",
    updated_at: "16 Aug, 2023 12:42 PM",
  },
]);

const expenseSummaryTableData = reactive([
  {
    expense_title: 'Expense',
    expense_type: 'Expense Type',
    vendor: 'Arush Sharma',
    pay_mode: 'Cash',
    tax: 1200,
    amt: 2000,
  },
]);

</script>

<style>
</style>