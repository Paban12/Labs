<template>
  <section class="reports-page">
    <div class="card-sub-tabs mb-16">
      <div
        class="tab"
        @click.prevent="report.tab = 1"
        :class="report.tab === 1 ? 'active' : ''"
      >
        <div class="title">Summary</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 2"
        :class="report.tab === 2 ? 'active' : ''"
      >
        <div class="title">Tests</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 3"
        :class="report.tab === 3 ? 'active' : ''"
      >
        <div class="title">Pay Mode</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 4"
        :class="report.tab === 4 ? 'active' : ''"
      >
        <div class="title">Pending Bill</div>
      </div>
      <div
        class="tab"
        @click.prevent="report.tab = 5"
        :class="report.tab === 5 ? 'active' : ''"
      >
        <div class="title">Advance Payments</div>
      </div>
    </div>
    <div class="tab-content" v-if="report.tab === 1">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Patients</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Doctors</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Discount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV After Discount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Tax(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Final Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Paid Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Due Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Refund(₹)</div>
          <div class="val">2</div>
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
              <th>Billing Date</th>
              <th>Appointment</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Apt Category</th>
              <th>Insuarance/TPA</th>
              <th>Invoice</th>
              <th>Receipt</th>
              <th>Towards</th>
              <th>Invoice Amount(₹)</th>
              <th>Discount(₹)</th>
              <th>Tax(₹)</th>
              <th>INV Final Amount(₹)</th>
              <th>Paid Amount(₹)</th>
              <th>Pay Mode</th>
              <th>Due Amount(₹)</th>
              <th>Refund(₹)</th>
              <th>INV Created At</th>
              <th>INV Created By</th>
              <th>INV Updated At</th>
              <th>INV Updated By</th>
              <th>RCPT Created At</th>
              <th>RCPT Created By</th>
              <th>Refund Created At</th>
              <th>Refund Created By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in summaryTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.bill_date }}</td>
                <td>{{ item.appointment }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.apt_category }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.invoice }}</td>
                <td>{{ item.receipt }}</td>
                <td>{{ item.towards }}</td>
                <td>{{ item.invoice_amt }}</td>
                <td>{{ item.discount }}</td>
                <td>{{ item.tax }}</td>
                <td>{{ item.inv_final_amt }}</td>
                <td>{{ item.paid_amt }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.due_amt }}</td>
                <td>{{ item.refund }}</td>
                <td>{{ item.inv_created_at }}</td>
                <td>{{ item.inv_created_by }}</td>
                <td>{{ item.inv_updated_at }}</td>
                <td>{{ item.inv_updated_by }}</td>
                <td>{{ item.rcpt_created_at }}</td>
                <td>{{ item.rcpt_created_by }}</td>
                <td>{{ item.refund_created_at }}</td>
                <td>{{ item.refund_created_by }}</td>
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
          <div class="text">Test</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Appointments</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Patients</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Doctors</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Discount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV After Discount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Tax(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">INV Final Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Paid Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Due Amount(₹)</div>
          <div class="val">2</div>
        </div>
        <div class="no">
          <div class="text">Refund(₹)</div>
          <div class="val">2</div>
        </div>
      </div>
      <div class="search-select">
        <div class="searchbar">
          <input type="text" placeholder="Search By Patient/Doctor/Test" />
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
              <th>Billing Date</th>
              <th>Appointment</th>
              <th>Patient</th>
              <th>Ref. Doctor</th>
              <th>Sample Collection</th>
              <th>Collection Center</th>
              <th>Category</th>
              <th>Department</th>
              <th>Insuarance/TPA</th>
              <th>Invoice</th>
              <th>Receipt</th>
              <th>Test/Panel/Package</th>
              <th>Invoice Amount(₹)</th>
              <th>Discount(₹)</th>
              <th>Tax(₹)</th>
              <th>INV Final Amount(₹)</th>
              <th>Paid Amount(₹)</th>
              <th>Pay Mode</th>
              <th>Due Amount(₹)</th>
              <th>Refund(₹)</th>
              <th>INV Created At</th>
              <th>INV Created By</th>
              <th>INV Updated At/By</th>
              <th>RCPT Created At</th>
              <th>RCPT Created By</th>
              <th>Refund Created By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.bill_date }}</td>
                <td>{{ item.appointment }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.ref_doctor }}</td>
                <td>{{ item.sample_collection }}</td>
                <td>{{ item.collection_center }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.invoice }}</td>
                <td>{{ item.receipt }}</td>
                <td>{{ item.test }}</td>
                <td>{{ item.invoice_amt }}</td>
                <td>{{ item.discount }}</td>
                <td>{{ item.tax }}</td>
                <td>{{ item.inv_final_amt }}</td>
                <td>{{ item.paid_amt }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.due_amt }}</td>
                <td>{{ item.refund }}</td>
                <td>{{ item.inv_created_at }}</td>
                <td>{{ item.inv_created_by }}</td>
                <td>{{ item.inv_updated_at_by }}</td>
                <td>{{ item.rcpt_created_at }}</td>
                <td>{{ item.rcpt_created_by }}</td>
                <td>{{ item.refund_created_by }}</td>
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
          <div class="text">Day</div>
          <div class="val">1 Day</div>
        </div>
        <div class="no">
          <div class="text">Unique Appointments</div>
          <div class="val">3</div>
        </div>
        <div class="no">
          <div class="text">Total Amount(₹)</div>
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
              <th>Billing Date</th>
              <th>Appointment</th>
              <th>Appointment Count</th>
              <th>Insurance/TPA</th>
              <th>Pay Mode</th>
              <th>Total Amount</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in payModeTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.bill_date }}</td>
                <td>{{ item.appointment }}</td>
                <td>{{ item.appointment_count }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.total_amt }}</td>
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
          <div class="text">Appointments</div>
          <div class="val">All</div>
        </div>
        <div class="no">
          <div class="text">Patients</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Doctors</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Amount(₹)</div>
          <div class="val">10</div>
        </div>
        <div class="no">
          <div class="text">Paid Amount(₹)</div>
          <div class="val">10</div>
        </div>
        <div class="no">
          <div class="text">Due Amount(₹)</div>
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
              <th>Appointment Date</th>
              <th>Appointment</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Insurance/TPA</th>
              <th>Towards</th>
              <th>Amount(₹)</th>
              <th>Paid Amount(₹)</th>
              <th>Due Amount(₹)</th>
              <th>Invoice</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pendingTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.apt_date }}</td>
                <td>{{ item.appointment }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.towards }}</td>
                <td>{{ item.amt }}</td>
                <td>{{ item.paid_amt }}</td>
                <td>{{ item.due_amt }}</td>
                <td>{{ item.invoice }}</td>
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
    <div class="tab-content" v-if="report.tab === 5">
      <div class="patient-no-list">
        <div class="no">
          <div class="text">Appointments</div>
          <div class="val">All</div>
        </div>
        <div class="no">
          <div class="text">Patients</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Doctors</div>
          <div class="val">100</div>
        </div>
        <div class="no">
          <div class="text">Paid Amount(₹)</div>
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
              <th>Appointment Date</th>
              <th>Type</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Insurance/TPA</th>
              <th>Receipt</th>
              <th>Paid Amount(₹)</th>
              <th>Pay Mode</th>
              <th>RCPT Created At</th>
              <th>RCPT Created By</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in advancePaymentTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.apt_date }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.doctor_name }}</td>
                <td>{{ item.insurance }}</td>
                <td>{{ item.receipt }}</td>
                <td>{{ item.paid_amt }}</td>
                <td>{{ item.pay_mode }}</td>
                <td>{{ item.rcpt_created_at }}</td>
                <td>{{ item.rcpt_created_by }}</td>
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


const summaryTableData = reactive([
  {
    bill_date: '05/12/2023',
    appointment: 'LAB',
    patient_name: 'Anurag Sharma',
    doctor_name: 'Dr. Rahul Singh',
    apt_category: 'Category',
    insurance: 'Yes',
    invoice: 'INV 463',
    receipt: 'RCPT 102',
    towards: 'Coombs Test, Indirect,Hemoglobin',
    invoice_amt: 2000,
    discount: 1500,
    tax: 1200,
    inv_final_amt: 1000,
    paid_amt: 1500,
    pay_mode: 'Cash',
    due_amt: 1500,
    refund: 1000,
    inv_created_at: '01 Sep, 2023 12:10 PM',
    inv_created_by: 'Rohith Sir',
    inv_updated_at: 'Lab',
    inv_updated_by: 'Rohith Sir',
    rcpt_created_at: 'Lab',
    rcpt_created_by: 'Rohith Sir',
    refund_created_at: 'Lab',
    refund_created_by: 'Rihith Sir',
  },
]);

const testTableData = reactive([
  {
    bill_date: '05/12/2023',
    appointment: 'LAB',
    patient_name: 'Anurag Sharma',
    ref_doctor: 'Dr. Rahul Singh',
    sample_collection: '12/05/2023 12:54',
    collection_center: 'Lab',
    category: 'Category',
    department: 'Department',
    insurance: 'Yes',
    invoice: 'INV 463',
    receipt: 'RCPT 102',
    test: 'Coombs Test, Indirect,Hemoglobin',
    invoice_amt: 2000,
    discount: 1500,
    tax: 1200,
    inv_final_amt: 1000,
    paid_amt: 1500,
    pay_mode: 'Cash',
    due_amt: 1500,
    refund: 1000,
    inv_created_at: '01 Sep, 2023 12:10 PM',
    inv_created_by: 'Rohith Sir',
    inv_updated_at_by: 'Lab',
    rcpt_created_at: 'Lab',
    rcpt_created_by: 'Rohith Sir',
    refund_created_by: 'Rihith Sir',
  },
]);

const payModeTableData = reactive([
  {
    bill_date: '12/05/2023',
    appointment: 'Lab',
    appointment_count: 3,
    insurance: 'Yes',
    pay_mode: 'Cash',
    total_amt: 2000,
  },
]);

const pendingTableData = reactive([
  {
    apt_date: '12/05/2023',
    appointment: 'Lab',
    patient_name: 'Raghu Khanna',
    doctor_name: 'Rajiv Kumar',
    insurance: 'yes',
    towards: 'Blood Test',
    amt: 2000,
    paid_amt: 1000,
    due_amt: 1500,
    invoice: 'INV 452',
  },
]);

const advancePaymentTableData = reactive([
  {
    apt_date: '12/05/2023',
    type: 'Type',
    patient_name: 'Raghu Khanna',
    doctor_name: 'Rajiv Kumar',
    insurance: 'yes',
    receipt: 'RCPT 102',
    paid_amt: 1000,
    pay_mode: 'Cash',
    rcpt_created_at: 'Lab',
    rcpt_created_by: 'Dr. Satish'
  },
]);

</script>

<style>
</style>