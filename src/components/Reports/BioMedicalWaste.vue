<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Log</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 3"
        :class="report.tab === 3 ? 'active' : ''"
      >
        <div class="title">Vendor</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">No. of Log</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Vendor</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Vehicle</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Driver</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Red (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Yellow (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Blue (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">White (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Total (Kg)</div>
          <div class="val">0</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Vendor/Driver/Vehicle No" />
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
              <th>Vendor</th>
              <th>Vehicle No</th>
              <th>Driver</th>
              <th>Red</th>
              <th>Yellow</th>
              <th>Blue</th>
              <th>White</th>
              <th>Total</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Updated At</th>
              <th>Updated By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in logTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.vendor }}</td>
                <td>{{ item.vehicle_no }}</td>
                <td>{{ item.driver }}</td>
                <td>{{ item.red }}</td>
                <td>{{ item.yellow }}</td>
                <td>{{ item.blue }}</td>
                <td>{{ item.white }}</td>
                <td>{{ item.total }}</td>
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
          <div class="text">Month</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Red (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Yellow (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Blue (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">White (Kg)</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Total (Kg)</div>
          <div class="val">0</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Month" />
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
              <th>Month</th>
              <th>Red</th>
              <th>Yellow</th>
              <th>Blue</th>
              <th>White</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in summaryTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.month }}</td>
                <td>{{ item.red }}</td>
                <td>{{ item.yellow }}</td>
                <td>{{ item.blue }}</td>
                <td>{{ item.white }}</td>
                <td>{{ item.total }}</td>
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
          <div class="text">Vendor</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">PAN</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">GST</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">TIN</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">CST</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">City</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Locality</div>
          <div class="val">0</div>
        </div>
        <div class="no">
          <div class="text">Bank</div>
          <div class="val">0</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Vendor Name" />
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
              <th>Vendor Name</th>
              <th>Owner Name</th>
              <th>Mobile</th>
              <th>PAN No.</th>
              <th>GST No.</th>
              <th>TIN No.</th>
              <th>CST No.</th>
              <th>City</th>
              <th>Locality</th>
              <th>Bank Name</th>
              <th>Account No.</th>
              <th>IFSC Code</th>
              <th>Payment Type</th>
              <th>Credit Day</th>
              <th>Credit Amount</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Updated At</th>
              <th>Updated By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in vendorTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.vendor_name }}</td>
                <td>{{ item.owner_name }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.pan_no }}</td>
                <td>{{ item.gst_no }}</td>
                <td>{{ item.tin_no }}</td>
                <td>{{ item.cst_no }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.locality }}</td>
                <td>{{ item.bank_name }}</td>
                <td>{{ item.account_no }}</td>
                <td>{{ item.ifsc_code }}</td>
                <td>{{ item.payment_type }}</td>
                <td>{{ item.credit_day }}</td>
                <td>{{ item.credit_amt }}</td>
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
  </section>
</template>

<script setup>
import { reactive } from "vue";

const report = reactive({
  tab: 1,
});

const logTableData = reactive([
  {
    date: '12/05/2023',
    vendor: 'Vendor',
    vehicle_no: 'MH15 HG 1254',
    driver: 'Ravi Kishan',
    red: 'Red',
    yellow: 'Yellow',
    blue: 'Blue',
    white: 'White',
    total: 200,
    created_at: 'Lab',
    created_by: 'Dr Satish',
    updated_at: 'Lab',
    updated_by: 'Dr Satish',
  },
]);

const summaryTableData = reactive([
  {
    month: 'October',
    red: 'Red',
    yellow: 'Yellow',
    blue: 'Blue',
    white: 'White',
    total: 200,
  },
]);

const vendorTableData = reactive([
  {
    vendor_name: 'Rahul Sharma',
    owner_name: 'Rohit Kumar',
    mobile: '+91 8888888888',
    pan_no: 'DFGTR1548T',
    gst_no: 'HGTD1425876933',
    tin_no: 'TIN24546453',
    cst_no: 'CST2467645',
    city: 'Nashik',
    locality: 'Nashik',
    bank_name: 'BOI',
    account_no: 356546874321,
    ifsc_code: 'FDRT0001357',
    payment_type: 'Cash',
    credit_day: '12/05/2023 Mon',
    credit_amt: 2000,
    created_at: 'Lab',
    created_by: 'Satish',
    updated_at: 'Lab',
    updated_by: 'Satish',
  },
]);

</script>

<style>
</style>