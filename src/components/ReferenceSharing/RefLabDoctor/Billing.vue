<template>
  <section class="ref-billing-page common-list-page">
    <div class="card">
      <div class="heading">
        <div class="title">Billing</div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search By Patient/Test" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
          <div class="add-btn">
            <button class="btn black-btn" @click.prevent="formVar.billModal = true">
              All Bill
            </button>
          </div>
          <div class="add-btn">
            <button class="btn black-btn" @click.prevent="formVar.doctorBillModal = true">
              Bill
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Test</th>
              <th>Reference Doctor</th>
              <th>Price(₹)</th>
              <th>Share(%)</th>
              <th>Discount(₹)</th>
              <th>Final Share(%)</th>
              <th>Paid(₹)</th>
              <th>Paid Date(₹)</th>
              <th>Due(₹)</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in billData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.patient_name }}</td>
                <td>{{ item.test }}</td>
                <td>{{ item.ref_doctor }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.share }}</td>
                <td>{{ item.discount }} %</td>
                <td>{{ item.final_share }}</td>
                <td>{{ item.paid }}</td>
                <td>{{ item.paid_date }}</td>
                <td>{{ item.due }}</td>
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
    <!-- Modals -->
    <Modal
      v-model:show="formVar.billModal"
      class="billing-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Payment</div>
        <div class="close-btn" @click.prevent="formVar.billModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="date-row">
        <div class="right">
          Bill Date : 
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
      <div class="table-outer main-table-outer mb-16">
        <table class="table">
          <thead>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Investigation</th>
            <th>Price(₹)</th>
            <th>Sharing(%)</th>
            <th>Discount(₹)</th>
            <th>Paid(₹)</th>
            <th>Due(₹)</th>
            <th class="text-center">Option</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in billingData" :key="item">
              <td>{{ index + 1 }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.doctor }}</td>
              <td>{{ item.patient_name }}</td>
              <td>{{ item.investigation }}</td>
              <td>{{ item.price }}</td>
              <td>
                <input type="number" placeholder="00 %">
              </td>
              <td>{{ item.discount }} %</td>
              <td>{{ item.paid }}</td>
              <td>{{ item.due }}</td>
              <td class="text-center">
                <div class="option-btns">
                  <div class="">
                    <img src="/src/assets/images/png/delete.png" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="total-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>No. of Doctors</th>
              <th>No. of Investigation</th>
              <th>Total Price(₹)</th>
              <th>Total Sharing(₹)</th>
              <th>Total Discount(₹)</th>
              <th>Total Paid(₹)</th>
              <th>Total Due(₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Post Prandial Blood Glucose	</td>
                <td>2000</td>
                <td>10</td>
                <td>10</td>
                <td>1000</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pay-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Pay Mode</th>
              <th>Payable(₹)</th>
              <th>Pay Now(₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Cash</option>
                      <option value="">Card</option>
                      <option value="">Cheque</option>
                      <option value="">Net Banking</option>
                      <option value="">Google Pay</option>
                      <option value="">Paytm</option>
                      <option value="">PhonePe</option>
                      <option value="">Credit Card</option>
                      <option value="">Debit Card</option>
                      <option value="">UPI</option>
                      <option value="">Amazon Pay</option>
                    </select>
                  </div>
                </td>
                <td>00</td>
                <td>00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="btn-row">
        <button class="btn black-btn">Accept Payment</button>
      </div>
    </Modal>
    <Modal
      v-model:show="formVar.doctorBillModal"
      class="billing-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Payment</div>
        <div class="close-btn" @click.prevent="formVar.doctorBillModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="date-row">
        <div class="select-dr">
          <SingleSelect
            v-model="formVar.doctor"
            :options="doctorOptions"
            @selected="handleSelectedOption"
            placeholder="Select Reference Doctor"
          ></SingleSelect>
          <div class="id">RDID : 5</div>
        </div>
        <div class="right">
          Bill Date : 
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
      <div class="table-outer main-table-outer mb-16">
        <table class="table">
          <thead>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Investigation</th>
            <th>Price(₹)</th>
            <th>Sharing(%)</th>
            <th>Discount(₹)</th>
            <th>Paid(₹)</th>
            <th>Due(₹)</th>
            <th class="text-center">Option</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in doctorBillingData" :key="item">
              <td>{{ index + 1 }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.doctor }}</td>
              <td>{{ item.patient_name }}</td>
              <td>{{ item.investigation }}</td>
              <td>{{ item.price }}</td>
              <td>
                <input type="number" placeholder="00 %">
              </td>
              <td>{{ item.discount }} %</td>
              <td>{{ item.paid }}</td>
              <td>{{ item.due }}</td>
              <td class="text-center">
                <div class="option-btns">
                  <div class="">
                    <img src="/src/assets/images/png/delete.png" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="total-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>No. of Doctors</th>
              <th>No. of Investigation</th>
              <th>Total Price(₹)</th>
              <th>Total Sharing(₹)</th>
              <th>Total Discount(₹)</th>
              <th>Total Paid(₹)</th>
              <th>Total Due(₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Post Prandial Blood Glucose	</td>
                <td>2000</td>
                <td>10</td>
                <td>10</td>
                <td>1000</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pay-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Pay Mode</th>
              <th>TDS(%)</th>
              <th>TDS(₹)</th>
              <th>Payable(₹)</th>
              <th>From Advance(₹)</th>
              <th>Pay Now(₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Cash</option>
                      <option value="">Card</option>
                      <option value="">Cheque</option>
                      <option value="">Net Banking</option>
                      <option value="">Google Pay</option>
                      <option value="">Paytm</option>
                      <option value="">PhonePe</option>
                      <option value="">Credit Card</option>
                      <option value="">Debit Card</option>
                      <option value="">UPI</option>
                      <option value="">Amazon Pay</option>
                    </select>
                  </div>
                </td>
                <td>
                  <input type="number" placeholder="00">
                </td>
                <td>00</td>
                <td>00</td>
                <td>00</td>
                <td>
                  <input type="number" placeholder="00">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="btn-row">
        <button class="btn black-btn w-10-r">Pay</button>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  billModal: false,
  doctorBillModal: false,
  doctor: null,
})
//Main table
const billData = reactive([
  {
    date: '12/10/2022',
    patient_name: 'Ravi Kumar',
    test: 'Dr. Kumar',
    ref_doctor: 'Dr. Kumar',
    price: 2000,
    share: 10,
    discount: 10,
    final_share: 1000,
    paid: 1000,
    paid_date: '12-10-2022',
    due: 1500,
  },
]);
//Modal Table
const billingData = reactive([
  {
    date: '12/10/2022',
    patient_name: 'Ravi Kumar',
    doctor: 'Dr. Kumar',
    investigation: 'Post Prandial Blood Glucose',
    price: 2000,
    discount: 10,
    paid: 1000,
    due: 1500,
  },
]);

//For Doctor Bill modal
//Modal Table
const doctorBillingData = reactive([
  {
    date: '12/10/2022',
    patient_name: 'Ravi Kumar',
    doctor: 'Dr. Kumar',
    investigation: 'Post Prandial Blood Glucose',
    price: 2000,
    discount: 10,
    paid: 1000,
    due: 1500,
  },
]);

//search select
const doctorOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>